import 'dotenv/config';

async function run() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-native-audio-latest?key=${process.env.GEMINI_API_KEY}`);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (e: any) {
    console.error(e.message);
  }
}
run();
