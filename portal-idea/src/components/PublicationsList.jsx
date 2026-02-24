import React, { useState } from 'react';
import PublicationCard from './PublicationCard';
import Filters from './Filters';
import SearchBar from './publications/SearchBar';
import CategoryFilters from './publications/CategoryFilters';
import SortDropdown from './publications/SortDropdown';
import { motion, AnimatePresence } from 'framer-motion';

const PublicationsList = ({ items, onViewMore }) => {
  const [typeFilter, setTypeFilter] = useState('todos');
  const [categoryFilter, setCategoryFilter] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recientes');

  const types = ['todos', 'informe', 'evento'];
  const allCategories = ['todas', ...new Set(items.map(i => i.category).filter(Boolean))];

  const parseFileSize = (sizeStr) => {
    if (!sizeStr) return 0;
    const match = sizeStr.match(/(\d+\.?\d*)\s*(KB|MB|GB)/i);
    if (!match) return 0;
    const value = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    if (unit === 'KB') return value * 1024;
    if (unit === 'MB') return value * 1024 * 1024;
    if (unit === 'GB') return value * 1024 * 1024 * 1024;
    return value;
  };

  const filteredItems = items
    .filter(item => typeFilter === 'todos' || item.type === typeFilter)
    .filter(item => categoryFilter === 'todas' || item.category === categoryFilter)
    .filter(item => {
      const searchLower = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(searchLower) ||
        (item.description && item.description.toLowerCase().includes(searchLower)) ||
        (item.category && item.category.toLowerCase().includes(searchLower))
      );
    })
    .sort((a, b) => {
      if (sortBy === 'nombre') return a.title.localeCompare(b.title);
      if (sortBy === 'tamaño') return parseFileSize(b.fileSize) - parseFileSize(a.fileSize);
      return new Date(b.date) - new Date(a.date);
    });

  const typeCounts = {
    todos: items.length,
    informe: items.filter(i => i.type === 'informe').length,
    evento: items.filter(i => i.type === 'evento').length,
  };

  return (
    <section className="space-y-5 sm:space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-1 transition-colors duration-300" style={{ color: 'var(--emerald)' }}>
              ── Centro de Recursos
            </p>
            <h2 className="font-black leading-none transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: 'var(--text-primary)' }}>
              Publicaciones y Eventos
            </h2>
          </div>
          <SearchBar value={searchTerm} onChange={setSearchTerm} onClear={() => setSearchTerm('')} />
        </div>

        <div className="overflow-x-auto pb-1">
          <Filters
            categories={types}
            activeFilter={typeFilter}
            onFilterChange={(val) => { setTypeFilter(val); setCategoryFilter('todas'); }}
            counts={typeCounts}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CategoryFilters
          categories={allCategories}
          activeCategory={categoryFilter}
          onCategoryChange={setCategoryFilter}
        />
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, #40916c33, transparent)' }} />

      {filteredItems.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ opacity: { duration: 0.3 }, layout: { type: "spring", stiffness: 300, damping: 30 } }}
              >
                <PublicationCard item={item} onViewMore={onViewMore} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-16 sm:py-20 rounded-2xl"
          style={{ background: 'rgba(64,145,108,0.05)', border: '1px dashed rgba(64,145,108,0.3)' }}>
          <p className="text-4xl mb-3">🌿</p>
          <p className="font-semibold text-sm sm:text-base" style={{ color: '#4a5568' }}>
            {searchTerm ? `No se encontraron resultados para "${searchTerm}"` : "No hay publicaciones con estos filtros."}
          </p>
          {searchTerm && (
            <button onClick={() => setSearchTerm('')}
              className="mt-4 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
              style={{ background: 'rgba(64,145,108,0.1)', color: '#2d6a4f' }}>
              Limpiar búsqueda
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default PublicationsList;