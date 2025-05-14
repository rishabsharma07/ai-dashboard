import { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';

function AvatarCard({ avatar, onEdit }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:translate-y-[-4px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={avatar.image} 
          alt={`${avatar.firstName} ${avatar.lastName}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`} />
        
        {/* Action buttons */}
        <div className={`absolute right-3 top-3 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <button 
            onClick={() => onEdit(avatar.id)}
            className="p-2 bg-teal-500 rounded-full text-white hover:bg-teal-600 transition-colors duration-200"
            aria-label="Edit avatar"
          >
            <Edit2 size={16} />
          </button>
          <button 
            className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors duration-200"
            aria-label="Delete avatar"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-1">{avatar.firstName} {avatar.lastName}</h3>
        <p className="text-indigo-200 text-sm">AI-Generated Avatar</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
            <span className="text-xs text-indigo-200">Active</span>
          </div>
          
          <button
            onClick={() => onEdit(avatar.id)}
            className="text-xs text-indigo-100 hover:text-green-400 transition-colors px-3 py-1 rounded-full border border-indigo-500 hover:border-teal-400"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
