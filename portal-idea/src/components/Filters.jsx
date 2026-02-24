import React from 'react';

const labels = {
  todos: 'Todos',
  informe: 'Informes',
  evento: 'Eventos',
};

const Filters = ({ categories, activeFilter, onFilterChange, counts }) => {
  return (
    <div className="inline-flex gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl flex-shrink-0 transition-colors duration-300"
      style={{ background: 'rgba(64,145,108,0.1)', border: '1px solid rgba(64,145,108,0.15)' }}>
      {categories.map((cat) => {
        const isActive = activeFilter === cat;
        return (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className="relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1 sm:gap-1.5 whitespace-nowrap"
            style={isActive
              ? { background: 'linear-gradient(135deg, #1a3a2e, #2d6a4f)', color: '#fff', boxShadow: '0 4px 14px rgba(26,58,46,0.25)' }
              : { color: 'var(--text-secondary)', background: 'transparent' }
            }
          >
            {labels[cat] ?? cat}
            {counts && (
              <span className="text-[9px] sm:text-[10px] font-black px-1 sm:px-1.5 py-0.5 rounded-full transition-colors duration-300"
                style={isActive
                  ? { background: 'rgba(255,255,255,0.2)', color: '#fff' }
                  : { background: 'var(--mint-transparent)', color: 'var(--forest-light)' }
                }
              >
                {counts[cat]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;