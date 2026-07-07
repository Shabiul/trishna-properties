import { Link } from 'react-router-dom';

interface LocationCardProps {
  name: string;
  count: number;
  image: string;
}

export default function LocationCard({ name, count, image }: LocationCardProps) {
  return (
    <Link
      to={`/listings?location=${encodeURIComponent(name)}`}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-sm text-white/80">{count} {count === 1 ? 'property' : 'properties'}</p>
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-sm font-medium text-navy-900">
          Explore →
        </span>
      </div>
    </Link>
  );
}
