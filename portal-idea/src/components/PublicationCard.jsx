import { FileText, Calendar, MapPin } from 'lucide-react';

const PublicationCard = ({ item }) => {
  const isInforme = item.type === 'informe';

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      {isInforme ? (
        <img src={item.thumbnail} alt={item.title} className="h-40 w-full object-cover" />
      ) : (
        <div className="h-40 w-full bg-blue-50 flex items-center justify-center">
          <Calendar size={48} className="text-blue-300" />
        </div>
      )}
      
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
            isInforme ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {item.type}
          </span>
          <span className="text-gray-400 text-xs">{item.date}</span>
        </div>
        <h3 className="font-bold text-gray-800 leading-tight mb-2">{item.title}</h3>
        {item.location && (
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <MapPin size={12} /> {item.location}
          </div>
        )}
      </div>

      <div className="p-4 pt-0">
        {isInforme && (
          <a 
            href={item.fileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <FileText size={16} /> Ver PDF
          </a>
        )}
      </div>
    </div>
  );
};

export default PublicationCard;