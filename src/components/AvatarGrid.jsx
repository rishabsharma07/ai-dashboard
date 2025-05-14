import AvatarCard from './AvatarCard';
import { Loader } from 'lucide-react';

function AvatarGrid({ avatars, loading, error, onEdit }) {
  if (error) {
    return (
      <div className="p-8 text-center rounded-lg bg-red-500/10 border border-red-500/30">
        <p className="text-red-400">{error}</p>
      </div>
    );  
  }

  if (loading) {
    return (
      <div className="h-64 flex flex-col items-center justify-center">
        <Loader className="animate-spin text-indigo-400 mb-4" size={32} />
        <p className="text-indigo-300">Loading avatars...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {avatars.map(avatar => (
        <AvatarCard 
          key={avatar.id} 
          avatar={avatar} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
}

export default AvatarGrid;
