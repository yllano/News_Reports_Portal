import React, { useState } from 'react';
import data from './data/data.json';
import Banner from './components/Banner';
import PublicationsList from './components/PublicationsList';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import DetailModal from './components/modals/DetailModal';
import InfoModal from './components/modals/InfoModal';
import { useTheme } from './hooks/useTheme';
import { navLinks, modalContent } from './config/portalConfig.jsx';
import './App.css';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ background: 'var(--cream)' }}>

      {/* ── Encabezado ── */}
      <Header
        siteName={data.metadata.site_name}
        navLinks={navLinks.map(link => ({
          ...link,
          onClick: link.id !== 'home' ? () => setActiveModal(link.id) : undefined
        }))}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      {/* ── Modales de Información (Sobre nosotros / Información) ── */}
      <InfoModal
        isOpen={!!activeModal}
        content={activeModal ? modalContent[activeModal] : null}
        onClose={() => setActiveModal(null)}
      />

      {/* ── Modal Detalle de Ítem ── */}
      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* ── Banner Principal ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32">
        <Banner bannerData={data.banner} onViewMore={setSelectedItem} />
      </div>

      {/* ── Publicaciones ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <PublicationsList items={data.items} onViewMore={setSelectedItem} />
      </main>

      {/* ── Footer ── */}
      <Footer siteName={data.metadata.site_name} metadata={data.metadata} />

    </div>
  );
}

export default App;