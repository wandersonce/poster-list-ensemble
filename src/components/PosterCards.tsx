import PosterItem from './PosterItem';

interface SearchResultsProps {
  searchResults: PosterDetailsProps[] | undefined;
}

interface PosterDetailsProps {
  Title: string | undefined;
  Year: string | undefined;
  imdbID: string | undefined;
  type: string | undefined;
  Poster: string | undefined;
}

export default function PosterCards({ searchResults }: SearchResultsProps) {
  return (
    <div className="flex flex-wrap justify-between items-top w-full mt-8 gap-4">
      {searchResults?.map((result) => (
        <PosterItem
          key={result.imdbID}
          title={result.Title}
          year={result.Year}
          poster={result.Poster}
        />
      ))}
    </div>
  );
}