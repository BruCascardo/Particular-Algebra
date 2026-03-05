import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIndex from '../data/searchIndex.json';
import './SearchBar.css';

// The precompiled search index data structure
interface SearchResult {
  text: string;
  path: string;
  parcial: number;
  temaTitle: string;
  topicTitle: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 2) {
      const searchTerm = value.toLowerCase();
      // Filter the precompiled index based on the input string matching the raw text or the topic metadata
      const filteredResults = (searchIndex as SearchResult[]).filter(item => 
        item.text.toLowerCase().includes(searchTerm) ||
        item.topicTitle.toLowerCase().includes(searchTerm) ||
        item.temaTitle.toLowerCase().includes(searchTerm)
      ).slice(0, 8); // Limit to top 8 suggestions for performance and UI cleanliness

      setResults(filteredResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    
    // Create the Text Fragment suffix to highlight the exact text payload we found.
    // Replace spaces with %20 and handle basic encoding. The browser natively 
    // attempts to scroll to and highlight anything after :~:text=
    const fragmentText = encodeURIComponent(result.text.slice(0, 100)); // Limiting fragment size to prevent huge URLs
    
    // Navigate using React Router to the page, manually appending the hash fragment
    navigate(`${result.path}#:~:text=${fragmentText}`);
  };

  return (
    <div className="search-bar-wrapper" ref={wrapperRef}>
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Buscar tema o concepto..." 
          value={query}
          onChange={handleSearch}
          onFocus={() => { if(results.length > 0) setIsOpen(true); }}
        />
        {query && (
          <button className="clear-btn" onClick={() => { setQuery(''); setResults([]); setIsOpen(false); }}>
            ✕
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <ul className="search-suggestions">
          {results.map((result, idx) => (
            <li key={idx} className="search-suggestion-item" onClick={() => handleResultClick(result)}>
              <div className="suggestion-meta">
                <span className="badge parcial-badge">Parcial {result.parcial}</span>
                <span className="badge theme-badge">{result.topicTitle}</span>
              </div>
              <p className="suggestion-text">
                "...{result.text}..."
              </p>
            </li>
          ))}
        </ul>
      )}
      
      {isOpen && query.length > 2 && results.length === 0 && (
        <div className="search-suggestions no-results">
          <p>No se encontraron resultados para "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
