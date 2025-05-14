import React, { useEffect, useRef, useState } from 'react';
import { Upload, User2, X } from 'lucide-react';

function EditAvatarModal({ avatar, isOpen, onClose, onSave }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const modalRef = useRef(null);

  // Set initial form values when avatar changes
  useEffect(() => {
    if (avatar) {
      setFirstName(avatar.firstName);
      setLastName(avatar.lastName);
      setPreviewUrl(avatar.image);
    }
  }, [avatar]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  const handleSave = () => {
    if (avatar) {
      onSave(avatar.id, {
        firstName,
        lastName,
        image: previewUrl
      });
      onClose();
    }
  };

  if (!isOpen || !avatar) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-gradient-to-br from-indigo-900/90 to-indigo-800/90 backdrop-blur-md rounded-2xl w-full max-w-md overflow-hidden shadow-2xl shadow-indigo-700/20 transform transition-all"
        style={{ 
          animation: 'slideUp 0.3s ease-out forwards' 
        }}
      >
        <div className="flex justify-between items-center p-6 border-b border-indigo-700/50">
          <h2 className="text-xl font-semibold text-white">Edit Avatar</h2>
          <button 
            onClick={onClose}
            className="text-indigo-300 hover:text-white transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 rounded-full bg-indigo-700/30 flex items-center justify-center overflow-hidden border-2 border-indigo-500/50 mb-4">
              {previewUrl ? (
                <img 
                  src={previewUrl} 
                  alt="Avatar preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <User2 size={48} className="text-indigo-400" />
              )}
            </div>
            
            <label className="flex items-center gap-2 px-4 py-2 bg-indigo-700/50 hover:bg-indigo-700 transition-colors rounded-lg cursor-pointer text-white text-sm">
              <Upload size={16} />
              <span>Change Image</span>
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileSelect}
              />
            </label>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-indigo-200 text-sm mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            
            <div>
              <label className="block text-indigo-200 text-sm mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-indigo-700/50 flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="px-5 py-2 text-indigo-200 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="px-5 py-2 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default EditAvatarModal;
