import React from 'react';

const Footer = ({ siteName, metadata }) => {
    return (
        <footer className="transition-colors duration-500" style={{ background: 'linear-gradient(135deg, var(--forest-light) 0%, var(--forest) 100%)' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-xl sm:text-2xl">🌿</span>
                            <span className="text-white font-black text-lg sm:text-xl">{siteName}</span>
                        </div>
                        <p className="text-xs sm:text-sm max-w-xs transition-colors duration-300" style={{ color: 'var(--mint)' }}>
                            Portal de recursos ambientales del Instituto de Estudios Ambientales — IDEA, Universidad Nacional de Colombia.
                        </p>
                    </div>
                    <div className="sm:text-right">
                        <p className="text-[10px] sm:text-xs uppercase tracking-widest mb-1 transition-colors duration-300" style={{ color: 'var(--emerald)' }}>Convocatoria</p>
                        <p className="text-white text-sm sm:text-base font-semibold">Estudiantes Auxiliares 2026</p>
                    </div>
                </div>
                <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2"
                    style={{ borderTop: '1px solid rgba(64,145,108,0.2)' }}>
                    <p className="text-[11px] text-center sm:text-left transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                    <p className="text-[11px] transition-colors duration-300" style={{ color: 'var(--mint)' }}>IDEA · UNAL</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
