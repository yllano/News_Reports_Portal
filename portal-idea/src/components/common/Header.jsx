import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ siteName, navLinks, isDarkMode, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500 overflow-hidden"
            style={{
                background: 'var(--header-bg)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(64,145,108,0.15)'
            }}>

            {/* Luz ambiental decorativa superior */}
            <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-5 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
                    <div className="bg-gradient-to-br from-emerald-500 to-forest p-1.5 sm:p-2 rounded-xl shadow-lg shadow-emerald-900/20 transition-transform group-hover:scale-110">
                        <span className="text-xl sm:text-2xl">🌿</span>
                    </div>
                    <h1 className="text-base sm:text-xl font-black tracking-tight" style={{ color: 'var(--サイト-ホワイト, #fff)' }}>
                        {siteName}
                    </h1>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="text-sm font-bold opacity-80 hover:opacity-100 transition-all hover:translate-y-[-1px] relative group"
                            style={{ color: '#fff' }}
                            onClick={(e) => {
                                if (link.onClick) {
                                    e.preventDefault();
                                    link.onClick();
                                }
                            }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
                        </a>
                    ))}

                    {/* Theme Toggle Desktop */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white"
                        title={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>

                {/* Mobile menu button + Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-white/10 text-white"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <div className={`md:hidden flex flex-col items-center gap-4 bg-forest/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 py-6 border-t border-white/5' : 'max-h-0'}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        className="text-lg font-bold text-white hover:text-emerald-300 transition-colors"
                        onClick={(e) => {
                            if (link.onClick) {
                                e.preventDefault();
                                link.onClick();
                            }
                            setIsMenuOpen(false);
                        }}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </header>
    );
};

export default Header;
