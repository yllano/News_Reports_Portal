import React from 'react';

const SortDropdown = ({ value, onChange }) => {
    return (
        <div className="flex items-center gap-2 whitespace-nowrap text-xs font-bold text-gray-500 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
            <span>Ordenar por:</span>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-transparent border-none outline-none font-black text-[#2d6a4f] cursor-pointer hover:underline transition-colors duration-300"
                style={{ color: 'var(--mint)' }}
            >
                <option value="recientes">Más recientes</option>
                <option value="nombre">Nombre (A-Z)</option>
                <option value="tamaño">Tamaño de archivo</option>
            </select>
        </div>
    );
};

export default SortDropdown;
