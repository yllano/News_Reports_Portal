import React from 'react';

const CategoryFilters = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="overflow-x-auto w-full sm:w-auto pb-1">
            <div className="flex gap-2 min-w-max">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => onCategoryChange(cat)}
                            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap"
                            style={isActive
                                ? { background: 'var(--emerald)', color: '#fff', boxShadow: '0 2px 10px rgba(64,145,108,0.35)' }
                                : { background: 'rgba(64,145,108,0.08)', color: 'var(--text-secondary)', border: '1px solid rgba(64,145,108,0.2)' }
                            }
                        >
                            {cat === 'todas' ? '🌿 Todas las categorías' : cat}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryFilters;
