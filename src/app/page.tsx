'use client';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@/components/ui/input';
import { getPosterInfo } from '@/lib/omdb';
import PosterCard from '@/components/PosterCard';

interface PosterDetailsProps {
  Title: string | undefined;
  Year: string | undefined;
  imdbID: string | undefined;
  type: string | undefined;
  Poster: string | undefined;
}

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [posterDetails, setPosterDetails] =
    useState<Array<PosterDetailsProps>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posterInfo = await getPosterInfo(searchInput);
        // Use the posterInfo object here
        setPosterDetails(posterInfo);
        console.log(posterInfo); // Access title, posterUrl, etc.
      } catch (error) {
        // Handle error appropriately
        console.error('Error fetching poster info:', error);
      }
    };

    fetchData();
  }, [searchInput]);

  const handleInput = useDebouncedCallback((value: string) => {
    setSearchInput(value);
  }, 300);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-dark-body text-og-body">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold">Find Your Poster!</h2>
        <div>
          <Input
            placeholder="Post Name..."
            className="bg-dark-bg/50"
            onChange={(e) => handleInput(e.target.value)}
          />
          <p className="text-xs mt-1">
            Poster will appear automatically after you type...
          </p>
        </div>
      </div>
      <div>
        <PosterCard searchResults={posterDetails} />
      </div>
    </main>
  );
}
