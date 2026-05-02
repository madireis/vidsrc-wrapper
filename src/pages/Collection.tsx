import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tmdbService, Movie } from '../services/tmdb';
import { MovieCard, MovieSkeleton } from '../components/MovieCard';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function Collection() {
  const { id } = useParams<{ id: string }>();
  const [collection, setCollection] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCollection() {
      if (!id) return;
      setLoading(true);
      try {
        const data = await tmdbService.getCollectionDetails(parseInt(id));
        // Sort parts by release date
        if (data.parts) {
          data.parts.sort((a: any, b: any) => {
            const dateA = new Date(a.release_date || '9999-12-31').getTime();
            const dateB = new Date(b.release_date || '9999-12-31').getTime();
            return dateA - dateB;
          });
        }
        setCollection(data);
      } catch (error) {
        console.error('Error fetching collection:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCollection();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-brand-primary" />
    </div>
  );

  if (!collection) return <div className="text-center py-20 text-gray-400 text-6xl">Collection not found</div>;

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] -m-4 md:-m-8 overflow-hidden">
        <img
          src={tmdbService.getImageUrl(collection.backdrop_path, 'original')}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/80 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link
              to={-1 as any}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group mb-2"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Back</span>
            </Link>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight leading-tight text-white drop-shadow-2xl">
              {collection.name}
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-3xl drop-shadow-lg line-clamp-3 md:line-clamp-none">
              {collection.overview}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="px-4 md:px-8 mt-8">
        <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Movies ({collection.parts?.length || 0})</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {collection.parts?.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} variant="portrait" />
          ))}
        </div>
      </div>
    </div>
  );
}
