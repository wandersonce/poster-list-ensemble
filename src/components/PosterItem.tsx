import Image from 'next/image';

interface PosterProps {
  title: string | undefined;
  year: string | undefined;
  poster: string | undefined;
}

export default function PosterItem({ title, year, poster }: PosterProps) {
  return (
    <div className="flex flex-col basis-full md:basis-1/2 lg:basis-1/4 bg-dark-bg border-2 border-og-body rounded max-w-[240px]">
      <div className="relative h-[340px]">
        {poster && poster !== 'N/A' && title && (
          <Image
            className="border-b-2"
            src={poster}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        )}
        {poster == 'N/A' && (
          <div className="flex justify-center items-center h-full w-full p-4 border-b-2">
            <h2 className="text-xl font-bold">No Poster Available</h2>
          </div>
        )}
      </div>
      <div className="flex flex-col p-3 ">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-sm">{year}</p>
      </div>
    </div>
  );
}
