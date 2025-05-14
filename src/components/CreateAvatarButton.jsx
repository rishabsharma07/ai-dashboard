import { Plus } from 'lucide-react';

function CreateAvatarButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 flex items-center justify-center w-14 h-14 rounded-full bg-teal-400 text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 z-10"
      label="Create new avatar"
    >
      <Plus size={24} />
    </button>
  );
}

export default CreateAvatarButton;
