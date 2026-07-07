import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import LocationCard from '../components/LocationCard';
import StatsCounter from '../components/StatsCounter';
import { properties, locations } from '../data/properties';

export default function Home() {
  const featuredProperties = properties.slice(0, 6);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/listings?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/listings');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50/50">
      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/properties/murgeshpalya-65k/murgeshpalya-65k-03.jpeg"
            alt="Luxury property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-brand-500/25 border border-brand-500/25 text-brand-300 text-xs font-semibold uppercase tracking-widest rounded-full mb-6 backdrop-blur-md">
              Premium Properties in Bangalore
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6 tracking-wide">
              Find Your
              <br />
              <span className="gradient-text">Perfect Home</span>
            </h1>
            <p className="text-lg text-neutral-300 mb-8 max-w-lg leading-relaxed font-light">
              Discover handpicked luxury homes and premium residential properties in Bangalore's most premium neighborhoods.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="bg-white rounded-2xl shadow-glass p-2 max-w-xl border border-white/10">
              <div className="flex items-center">
                <div className="flex-1 flex items-center px-4 py-2">
                  <Search className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by location or property type..."
                    className="flex-1 bg-transparent outline-none text-navy-900 placeholder-neutral-400 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25 text-sm flex-shrink-0 active:scale-[0.98]"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Quick location pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {['Murgeshpalya', 'CV Raman Nagar', 'GM Palya', 'Kaggadasapura'].map(loc => (
                <Link
                  key={loc}
                  to={`/listings?location=${encodeURIComponent(loc)}`}
                  className="px-3.5 py-1.5 bg-white/10 backdrop-blur-md text-white/90 hover:bg-white/20 hover:text-white text-xs font-semibold rounded-full transition-all border border-white/5"
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─────────────────────────── */}
      <section className="py-10 bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatsCounter end={50} suffix="+" label="Properties Listed" />
            <StatsCounter end={200} suffix="+" label="Happy Families" />
            <StatsCounter end={6} label="Prime Locations" />
            <StatsCounter end={5} suffix="+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* ─── EXPLORE LOCATIONS ─────────────────── */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-3">
              Explore by Location
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Browse properties in Bangalore's most desirable neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <LocationCard key={loc.name} {...loc} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROPERTIES ──────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-2">
                Featured Properties
              </h2>
              <p className="text-neutral-500">Handpicked homes, ready for you to move in</p>
            </div>
            <Link
              to="/listings"
              className="flex items-center space-x-2 text-brand-500 hover:text-brand-600 font-semibold transition-colors group"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-3">
              Why Families Trust Us
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              We go beyond listings — we help you find a home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Shield, title: 'Verified Properties', desc: 'Every property is personally inspected and verified by our team before listing. No surprises, no hidden issues.' },
              { icon: Clock, title: 'Quick Move-In', desc: 'Most properties are available for immediate occupancy. We handle paperwork so you can move in stress-free.' },
              { icon: Star, title: 'Premium Service', desc: 'Dedicated support throughout your rental journey — from property search to move-in day and beyond.' },
            ].map((item) => (
              <div key={item.title} className="group p-6 lg:p-8 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                  <item.icon className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────── */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-navy-900 to-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today. We'll help you find the perfect property that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/listings"
              className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-500/25"
            >
              Browse Properties
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-8 py-3.5 rounded-xl transition-all border border-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
