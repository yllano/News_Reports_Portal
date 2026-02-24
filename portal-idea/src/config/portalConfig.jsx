import React from 'react';

export const navLinks = [
    { name: 'Inicio', id: 'home', href: '#' },
    { name: 'Sobre nosotros', id: 'about', href: '#' },
    { name: 'Información', id: 'info', href: '#' },
];

export const modalContent = {
    about: {
        title: "Sobre Nosotros",
        icon: "🌿",
        content: (
            <div className="space-y-4">
                <p>El <strong style={{ color: 'var(--text-primary)' }}>News & Reports Portal</strong> es una iniciativa del Instituto de Estudios Ambientales (IDEA) de la Universidad Nacional de Colombia. Nuestra misión es democratizar el acceso a la información técnica sobre el estado de nuestros ecosistemas.</p>
                <p>A través de este portal, investigadores, estudiantes y ciudadanos pueden consultar reportes detallados, análisis climáticos y participar en eventos que promueven la sostenibilidad y el cuidado del medio ambiente.</p>
                <div className="p-4 rounded-xl border transition-colors duration-300"
                    style={{ background: 'var(--mint-transparent)', borderColor: 'var(--mint-soft)' }}>
                    <p className="text-sm font-bold" style={{ color: 'var(--emerald)' }}>Compromiso IDEA UNAL</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>Investigación de vanguardia para la toma de decisiones ambientales informadas en el territorio nacional.</p>
                </div>
            </div>
        )
    },
    info: {
        title: "Información del Portal",
        icon: "ℹ️",
        content: (
            <div className="space-y-4">
                <p>Este portal centraliza diversos tipos de recursos para facilitar el monitoreo ambiental:</p>
                <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                    <li><strong style={{ color: 'var(--text-primary)' }}>Informes Técnicos:</strong> Documentos detallados en formato PDF con datos oficiales.</li>
                    <li><strong style={{ color: 'var(--text-primary)' }}>Eventos:</strong> Jornadas de educación y actividades presenciales o digitales.</li>
                    <li><strong style={{ color: 'var(--text-primary)' }}>Búsqueda Inteligente:</strong> Filtre por título, categoría o palabras clave.</li>
                </ul>
                <p className="pt-2">Toda la información es actualizada de manera periódica conforme se publican nuevos resultados de investigación.</p>
                <div className="text-xs italic mt-4 border-t pt-4 transition-colors duration-300"
                    style={{ color: 'var(--text-muted)', borderColor: 'var(--mint-soft)' }}>
                    Versión del Portal: 2.0.26 — Proyecto de Estudiantes Auxiliares
                </div>
            </div>
        )
    }
};
