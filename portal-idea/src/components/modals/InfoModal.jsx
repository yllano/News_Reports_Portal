import React from 'react';
import { X } from 'lucide-react';

const InfoModal = ({ isOpen, content, onClose }) => {
    if (!isOpen || !content) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-scale-up border transition-colors duration-500"
                style={{ background: 'var(--modal-bg)', borderColor: 'rgba(64,145,108,0.2)' }}>

                {/* Modal Header */}
                <div className="p-6 sm:p-8 flex justify-between items-center border-b transition-colors duration-300"
                    style={{ background: 'var(--forest)', borderColor: 'rgba(64,145,108,0.1)' }}>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-colors duration-300 shadow-inner"
                            style={{ background: 'rgba(64,145,108,0.15)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            {content.icon}
                        </div>
                        <h2 className="text-xl font-black leading-none transition-colors duration-300 text-white">
                            {content.title}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-white/70 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-8 pb-10 leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    {content.content}
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t flex justify-end transition-colors duration-300"
                    style={{ background: 'var(--mint-transparent)', borderColor: 'var(--mint-soft)' }}>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                        style={{ background: 'linear-gradient(135deg, #1a3a2e, #2d6a4f)', color: '#fff' }}
                    >
                        Entendido
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
