import { FileText, Calendar, MapPin, ArrowUpRight, Download } from 'lucide-react';

const formatDate = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' });
};

const PublicationCard = ({ item, index, onViewMore }) => {
  const isInforme = item.type === 'informe';

  return (
    <div
      className="card-hover rounded-2xl overflow-hidden flex flex-col h-full transition-shadow duration-300"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--mint-soft)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      {/* Imagen — se muestra para todos los tipos si existe thumbnail */}
      {item.thumbnail ? (
        <div className="relative overflow-hidden group/img" style={{ height: '180px' }}>
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
          />
          {/* Badge de tamaño solo en informes */}
          {isInforme && item.fileSize && (
            <span className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 z-10"
              style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', backdropFilter: 'blur(8px)' }}>
              <Download size={10} />
              {item.fileSize}
            </span>
          )}
          {/* Overlay on hover for all items to see more */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
            onClick={() => onViewMore(item)}>
            <span className="bg-white/90 text-[#1a3a2e] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
              Ver Detalles
            </span>
          </div>
        </div>
      ) : (
        /* Placeholder solo si no hay thumbnail */
        <div className="flex items-center justify-center relative overflow-hidden group/img cursor-pointer transition-colors duration-500"
          onClick={() => onViewMore(item)}
          style={{ height: '180px', background: 'var(--mint-transparent)' }}>
          {/* Decorative circles */}
          <div className="absolute w-32 h-32 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #40916c, transparent)', top: '-20px', right: '-20px' }} />
          <div className="absolute w-20 h-20 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #74c69d, transparent)', bottom: '-10px', left: '-10px' }} />
          <div className="flex flex-col items-center gap-2 relative z-10">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover/img:scale-110"
              style={{ background: 'rgba(64,145,108,0.15)', border: '1px solid rgba(64,145,108,0.3)' }}>
              <Calendar size={24} style={{ color: '#2d6a4f' }} />
            </div>
            {item.date && (
              <span className="text-xs font-semibold transition-colors duration-300" style={{ color: 'var(--emerald)' }}>
                {formatDate(item.date)}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Badge + Fecha */}
        <div className="flex justify-between items-center mb-3">
          <span
            className="text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider"
            style={{ background: 'rgba(64,145,108,0.12)', color: '#2d6a4f' }}
          >
            {isInforme ? '📄 Informe' : '🗓 Evento'}
          </span>
          {item.date && (
            <span className="text-xs font-medium transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
              {formatDate(item.date)}
            </span>
          )}
        </div>

        {/* Categoría */}
        {item.category && (
          <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#40916c' }}>
            {item.category}
          </p>
        )}

        {/* Título */}
        <h3 className="font-bold leading-snug mb-3 flex-grow transition-colors duration-300" style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
          {item.title}
        </h3>

        {/* Descripción o Bloque Informativo */}
        {item.description ? (
          <p className="text-sm mb-3 line-clamp-2 transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
            {item.description}
          </p>
        ) : isInforme && (
          <div className="text-[11px] p-3 rounded-lg mb-3 transition-colors duration-300" style={{ background: 'rgba(64,145,108,0.05)', color: 'var(--text-secondary)', border: '1px solid rgba(64,145,108,0.1)' }}>
            <p className="italic leading-relaxed">
              Consulte este informe técnico completo para conocer todos los detalles y análisis del {item.title.toLowerCase()}. {item.fileSize && `(Archivo PDF de ${item.fileSize})`}
            </p>
          </div>
        )}

        {item.location && (
          <div className="flex items-center gap-1.5 mb-4 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
            <MapPin size={13} />
            <span className="text-xs font-medium">{item.location}</span>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-auto flex gap-2">
          {/* El botón "Ver más" ahora es común para todos */}
          <button
            onClick={() => onViewMore(item)}
            className="flex-1 py-2.5 px-4 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all duration-300 hover:opacity-80 cursor-pointer"
            style={{ background: 'var(--forest-light)', color: '#fff', border: '1px solid rgba(64,145,108,0.15)' }}
          >
            Ver más
          </button>

          {isInforme && (
            <a
              href={item.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group shadow-sm"
              style={{ background: 'linear-gradient(135deg, #1a3a2e, #2d6a4f)', color: '#fff' }}
            >
              <FileText size={14} />
              PDF
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}

          {!isInforme && (
            <div className="flex-[0.6] py-2.5 px-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-center flex items-center justify-center transition-colors duration-300"
              style={{ background: 'var(--mint-transparent)', color: 'var(--emerald)' }}>
              Pronto
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;