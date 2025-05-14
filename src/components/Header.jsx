import{ useEffect, useState } from 'react';

function Header() {
  const [greeting, setGreeting] = useState('');

  // Set appropriate greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
   
  }, []);


  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-8 bg-gradient-to-r from-indigo-900/30 to-indigo-800/20 backdrop-blur-sm rounded-xl mb-8">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
          <span>{greeting},</span>
          <span className="text-teal-400 ml-2">User</span>
        </h1>
        <p className="text-indigo-200 font-light">Let's create something amazing today</p>
      </div>
    </header>
  );
}

export default Header;
