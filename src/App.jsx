import React, { useState } from 'react';
import Header from './components/Header';
import AvatarGrid from './components/AvatarGrid';
import CreateAvatarButton from './components/CreateAvatarButton';
import CreateAvatarModal from './components/CreateAvatarModal';
import EditAvatarModal from './components/EditAvatarModal';
import { useAvatars } from './hooks/useAvatars';

function App() {
  const { avatars, loading, error, updateAvatar } = useAvatars();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingAvatar, setEditingAvatar] = useState(null);
  
  const handleEditAvatar = (id) => {
    const avatar = avatars.find(a => a.id === id);
    if (avatar) {
      setEditingAvatar(avatar);
    }
  };
  
  const handleSaveAvatar = (id, updatedAvatar) => {
    updateAvatar(id, updatedAvatar);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header component */}
        <Header />
        
        {/* Main content */}
        <main className="pb-24">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">My Avatars</h2>
            <div className="px-4 py-2 bg-indigo-800/50 rounded-lg text-indigo-200 text-sm">
              {avatars.length} Avatars Available
            </div>
          </div>
          
          {/* Avatar grid */}
          <AvatarGrid 
            avatars={avatars} 
            loading={loading} 
            error={error} 
            onEdit={handleEditAvatar}
          />
        </main>
        
        {/* Create Avatar Button */}
        <CreateAvatarButton onClick={() => setIsCreateModalOpen(true)} />
        
        {/* Create Avatar Modal */}
        <CreateAvatarModal 
          isOpen={isCreateModalOpen} 
          onClose={() => setIsCreateModalOpen(false)} 
        />
        
        {/* Edit Avatar Modal */}
        <EditAvatarModal 
          avatar={editingAvatar}
          isOpen={!!editingAvatar}
          onClose={() => setEditingAvatar(null)}
          onSave={handleSaveAvatar}
        />
      </div>
    </div>
  );
}

export default App;
