import React from 'react';
import { X, Menu } from 'lucide-react';

const DetailModal = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto py-10" style={{ perspective: '1000px' }}>
            <div
                className="fixed inset-0 backdrop-blur-md transition-opacity duration-300"
                style={{ background: 'var(--backdrop)' }}
                onClick={onClose}
            />

            <div className="relative w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl animate-scale-up my-auto transition-colors duration-500"
                style={{ background: 'var(--modal-bg)' }}>
                {/* Cabecera / Imagen */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                    {item.thumbnail ? (
                        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e8f5ee 0%, #d4eddf 100%)' }}>
                            <span className="text-6xl">🌿</span>
                        </div>
                    )}
                    {/* Overlay diferenciado si es destacado */}
                    <div className={`absolute inset-0 ${item.isFeatured ? 'bg-gradient-to-t from-[#1a3a2e]/90 via-[#1a3a2e]/20 to-transparent' : 'bg-gradient-to-t from-black/80 via-transparent to-transparent'}`} />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-md bg-black/20 text-white hover:bg-black/40 transition-colors cursor-pointer z-20"
                    >
                        <X size={20} />
                    </button>

                    <div className="absolute bottom-6 left-6 right-6 z-10">
                        <div className="flex items-center gap-2 mb-2">
                            {item.isFeatured && (
                                <span className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] bg-[#d4a853] text-[#1a3a2e] flex items-center gap-1.5 shadow-lg">
                                    ✨ Especial
                                </span>
                            )}
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white inline-block shadow-sm ${item.isFeatured ? 'bg-[#2d6a4f]' : 'bg-[#40916c]'}`}>
                                {item.category}
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight"
                            style={{ fontFamily: item.isFeatured ? "'Playfair Display', serif" : 'inherit' }}>
                            {item.title}
                        </h2>
                    </div>
                </div>

                {/* Cuerpo */}
                <div className={`p-8 sm:p-10 transition-colors duration-300 ${item.isFeatured ? 'border-t-4 border-[#d4a853]' : ''}`}>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-500">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${item.isFeatured ? 'bg-amber-50 text-amber-600 font-bold' : 'bg-green-600/10 text-green-600'}`}>
                                {item.isFeatured ? '⚡️' : <Menu size={16} />}
                            </div>
                            <div className="text-xs transition-colors duration-300">
                                <p className="font-bold leading-none" style={{ color: 'var(--text-primary)' }}>{item.isFeatured ? 'Prioridad' : 'Tipo'}</p>
                                <p className="mt-0.5 uppercase tracking-tighter" style={{ color: 'var(--text-muted)' }}>{item.isFeatured ? 'Destacado' : item.type}</p>
                            </div>
                        </div>
                        {item.date && (
                            <div className="flex items-center gap-2 text-gray-500 sm:border-l sm:pl-4 border-gray-100">
                                <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-green-600 text-sm">
                                    🗓
                                </div>
                                <div className="text-xs transition-colors duration-300">
                                    <p className="font-bold leading-none" style={{ color: 'var(--text-primary)' }}>Actualizado</p>
                                    <p className="mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.date}</p>
                                </div>
                            </div>
                        )}
                        {item.fileSize && (
                            <div className="flex items-center gap-2 text-gray-500 border-l pl-4 border-gray-100">
                                <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center text-green-600 text-sm">
                                    📄
                                </div>
                                <div className="text-xs transition-colors duration-300">
                                    <p className="font-bold leading-none" style={{ color: 'var(--text-primary)' }}>Peso</p>
                                    <p className="mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.fileSize}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="prose prose-sm max-w-none leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                        <div className="relative">
                            {item.isFeatured && (
                                <div className="absolute -left-4 top-0 w-1 h-full bg-[#d4a853]/30" />
                            )}
                            <p className={`text-base text-balance transition-colors duration-300 ${item.isFeatured ? 'font-medium' : ''}`}
                                style={{ color: item.isFeatured ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                                {item.description || `Este recurso técnico ofrece información detallada sobre ${item.title.toLowerCase()}. Es parte de la colección oficial de EcoMonitor Global para el periodo 2026.`}
                            </p>
                        </div>
                        {item.location && (
                            <p className="mt-6 flex items-center gap-2 text-sm font-medium transition-colors duration-300" style={{ color: 'var(--emerald)' }}>
                                📍 Ubicación: {item.location}
                            </p>
                        )}
                    </div>

                    {/* Botones de acción */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        {item.type === 'informe' && (
                            <a href={item.fileUrl} target="_blank" rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm transition-all hover:scale-[1.02] shadow-xl"
                                style={{
                                    background: item.isFeatured
                                        ? 'linear-gradient(135deg, #1a3a2e 0%, #2d6a4f 100%)'
                                        : 'linear-gradient(135deg, #1a3a2e, #2d6a4f)',
                                    boxShadow: item.isFeatured ? '0 10px 30px rgba(212, 168, 83, 0.2)' : 'none',
                                    color: '#fff'
                                }}>
                                {item.isFeatured ? '⚡️ Ver Informe Destacado' : 'Descargar Documento'}
                            </a>
                        )}
                        <button onClick={onClose}
                            className="flex-1 py-4 rounded-2xl font-black text-sm bg-gray-100 dark:bg-white/10 text-[#1a3a2e] dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-pointer">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;
