import fs from 'fs';
import path from 'path';

// Note: To run this script without TS transpilation issues easily, it's executed using tsx or compiled independently.
// It reads the raw text from the components specified in courseRoutes.ts
import { courseRoutes } from '../src/data/courseRoutes';

const PAGES_DIR = path.resolve(process.cwd(), 'src/pages');
const OUTPUT_FILE = path.resolve(process.cwd(), 'src/data/searchIndex.json');

interface SearchIndexData {
  text: string;
  path: string;
  parcial: number;
  temaTitle: string;
  topicTitle: string;
}

function extractTextFromTsx(filePath: string): string[] {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Naively extract text between common HTML tags: <p>, <h3>, <h4>, <li>
    // We remove <InlineMath> tags, keeping the raw content or ignoring formula-heavy blocks.
    const textBlocks: string[] = [];
    
    // Match anything between <p>, <li>, <h3>, <h4> tags
    const regex = /<(p|h3|h4|li)[^>]*>([\s\S]*?)<\/\1>/gi;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      let rawText = match[2];
      
      // Cleanup inner tags like <strong>, <em>, <InlineMath>
      // For InlineMath specifically, if there is a 'math' prop, try to extract its content
      rawText = rawText.replace(/<InlineMath[^>]*math=["'{](.*?)["'}][^>]*\/?>(?:<\/InlineMath>)?/gi, ' $1 ');
      
      // Remove all other remaining HTML/JSX brackets
      rawText = rawText.replace(/<[^>]+>/g, '');
      
      // Clean up whitespace, remove newlines
      rawText = rawText.replace(/\s+/g, ' ').trim();
      
      if (rawText.length > 10) { // Ignore very short phrases or empty blocks
        // Split huge blocks into sentences to make the index more granular.
        const sentences = rawText.split(/(?<=[.!?])\s+/);
        for (const sentence of sentences) {
           if (sentence.trim().length > 10) {
              textBlocks.push(sentence.trim());
           }
        }
      }
    }
    
    return textBlocks;
  } catch (error) {
    console.warn(`Could not read or parse ${filePath}:`, error);
    return [];
  }
}

async function buildIndex() {
  console.log('Building search index...');
  const searchIndex: SearchIndexData[] = [];
  
  for (const route of courseRoutes) {
    // Determine file path based on URL path mapping. 
    // Example: path: '/parcial1/vectores/segmento-orientado' -> src/pages/parcial1/vectores/SegmentoOrientado.tsx
    // The case is capital for components!
    const parts = route.path.split('/').filter(Boolean);
    const fileNameKebab = parts.pop();
    if (!fileNameKebab) continue;
    
    // To PascalCase: segmento-orientado -> SegmentoOrientado
    const fileNamePascal = fileNameKebab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    
    let directory = parts.join('/'); // ej: parcial1/vectores
    if (route.parcial === 1 && directory.startsWith('parcial1/')) {
        directory = directory.replace('parcial1/', ''); // They are located right at src/pages/vectores/...
    }
    
    const relativePath = `${directory}/${fileNamePascal}.tsx`;
    const fullPath = path.join(PAGES_DIR, relativePath);
    
    const sentences = extractTextFromTsx(fullPath);
    
    for (const text of sentences) {
      searchIndex.push({
        text,
        path: route.path,
        parcial: route.parcial,
        temaTitle: route.temaTitle,
        topicTitle: route.topicTitle
      });
    }
  }

  // Generate output
  const dataDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchIndex, null, 2), 'utf-8');
  console.log(`Successfully built search index containing ${searchIndex.length} text fragments at ${OUTPUT_FILE}`);
}

buildIndex();
