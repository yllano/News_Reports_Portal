import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ value, onChange, onClear }) => {
    return (
        <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors duration-200 group-focus-within:text-[#40916c]">
                <Search size={18} className="text-[#8a9ba8]" />
            </div>
            <input
                type="text"
                placeholder="Buscar reportes, eventos..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 outline-none transition-colors duration-300"
                style={{
                    background: 'var(--input-bg)',
                    border: '1px solid rgba(64,145,108,0.25)',
                    color: 'var(--text-primary)'
                }}
            />
            {value && (
                <button
                    onClick={onClear}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform cursor-pointer"
                >
                    <X size={16} className="text-[#40916c]" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
