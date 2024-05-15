'use client';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@/components/ui/input';
import { getPosterInfo } from '@/lib/omdb';
import PosterCards from '@/components/PosterCards';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //Fetch data after the search input change
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const posterInfo = await getPosterInfo(searchInput);
        setIsLoading(false);

        // Use the posterInfo object here
        setPosterDetails(posterInfo);
      } catch (error) {
        // Handle error appropriately
        console.error('Error fetching poster info:', error);
      }
    };

    fetchData();
  }, [searchInput]);

  //Using Debounce Callback to only trigger the function after user stop type for 300ms
  const handleInput = useDebouncedCallback((value: string) => {
    setSearchInput(value);
  }, 300);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 md:p-10 lg:p-24 bg-dark-body text-og-body">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold">Find Your Poster!</h2>
        <div>
          {/* Search Input */}
          <Input
            placeholder="Post Name..."
            className="bg-dark-bg/50"
            onChange={(e) => handleInput(e.target.value)}
          />
          <p className="text-xs mt-1">
            Posters will appear automatically after you type...
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center md:max-w-screen-md xl:max-w-screen-xl w-full">
        {/* Show Loading state */}
        {isLoading && (
          <div className="text-xl font-bold animate-pulse mt-7">Loading...</div>
        )}

        {/* Load Results if has any */}
        {posterDetails && <PosterCards searchResults={posterDetails} />}

        {/* If is not loading and no results show */}
        {!posterDetails && !isLoading && (
          <div className="mt-5">No Posters to be showed yet.</div>
        )}
      </div>
    </main>
  );
}
