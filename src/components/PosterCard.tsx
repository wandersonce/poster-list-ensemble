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

export default function PosterCard({ searchResults }: SearchResultsProps) {
  return (
    <div>
      {searchResults?.map((result) => (
        <div key={result.imdbID}>{result.Title}</div>
      ))}
    </div>
  );
}
