import { useState, useEffect } from 'react';

export const useAvatars = () => {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/users?limit=3');
        if (!response.ok) {
          throw new Error('Failed to fetch avatars');
        }
        const data = await response.json();
        const formattedAvatars = data.users.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image
        }));
        setAvatars(formattedAvatars);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(true);
        // Simulate network delay for demo purposes
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchAvatars();
  }, []);

  const updateAvatar = (id, updatedAvatar) => {
    setAvatars(prev => 
      prev.map(avatar => 
        avatar.id === id ? { ...avatar, ...updatedAvatar } : avatar
      )
    );
  };

  return { avatars, loading, error, updateAvatar };
};
