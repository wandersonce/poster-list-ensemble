'use client';
import { getPosterInfo } from '@/lib/omdb';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posterInfo = await getPosterInfo('avengers');
        // Use the posterInfo object here
        console.log(posterInfo); // Access title, posterUrl, etc.
      } catch (error) {
        // Handle error appropriately
        console.error('Error fetching poster info:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-dark-body text-og-body">
      <div>
        <h2 className="text-3xl font-bold">Find Your Poster!</h2>
      </div>
    </main>
  );
}
