import { useParams, Link, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import ImageCarousel from '../components/ImageCarousel';
import ContactForm from '../components/ContactForm';
import PropertyCard from '../components/PropertyCard';
import { Bed, Bath, Maximize, MapPin, CheckCircle, ArrowLeft, Mail, Phone, Share2, Heart, Building, Layers, Compass } from 'lucide-react';
import { useState } from 'react';

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);
  const [isLiked, setIsLiked] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🏠</div>
          <h2 className="text-2xl font-bold text-navy-800 mb-3">Property Not Found</h2>
          <Link to="/listings" className="text-brand-500 hover:text-brand-600 font-semibold">
            ← Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number, type: string) => {
    if (type === 'rent') return `₹${price.toLocaleString('en-IN')}`;
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    return `₹${(price / 100000).toFixed(2)} L`;
  };

  const similarProperties = (() => {
    const sameArea = properties.filter(p => p.id !== property.id && p.area_name === property.area_name);
    if (sameArea.length >= 3) return sameArea.slice(0, 3);
    const sameType = properties.filter(p => p.id !== property.id && p.type === property.type && p.area_name !== property.area_name);
    return [...sameArea, ...sameType].slice(0, 3);
  })();

  const specs = [
    { icon: Bed, label: 'Bedrooms', value: property.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
    { icon: Maximize, label: 'Area', value: `${property.area} sqft` },
    ...(property.floor ? [{ icon: Layers, label: 'Floor', value: property.floor }] : []),
    { icon: Building, label: 'Furnished', value: property.furnished === 'fully' ? 'Fully' : property.furnished === 'semi' ? 'Semi' : 'No' },
    ...(property.facing ? [{ icon: Compass, label: 'Facing', value: property.facing }] : []),
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Back + Actions */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-neutral-600 hover:text-navy-900 transition-colors text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-500 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
            <button onClick={() => setIsLiked(!isLiked)}
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors">
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-neutral-500'}`} />
            </button>
          </div>
        </div>

        {/* Photo Gallery */}
        <ImageCarousel images={property.images} title={property.title} />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-card p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                  property.type === 'rent' ? 'bg-brand-500' : 'bg-navy-900'
                }`}>
                  For {property.type === 'rent' ? 'Rent' : 'Sale'}
                </span>
                {property.furnished === 'fully' && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700">Fully Furnished</span>
                )}
                {property.availability === 'Immediate' && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">Ready to Move</span>
                )}
              </div>

              <h1 className="text-2xl lg:text-3xl font-display font-bold text-navy-900 mb-2 tracking-wide">{property.title}</h1>
              <div className="flex items-center text-neutral-500 mb-4">
                <MapPin className="h-4 w-4 mr-1.5 text-brand-500" />
                <span className="text-sm">{property.location}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-neutral-100">
                <div>
                  <span className="text-3xl font-bold text-navy-900">
                    {formatPrice(property.price, property.type)}
                  </span>
                  {property.type === 'rent' && <span className="text-neutral-500 text-sm">/month</span>}
                </div>
                {property.type === 'rent' && (
                  <div className="text-sm text-neutral-500">
                    Deposit: <span className="font-semibold text-navy-800">{property.deposit}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Key Specs */}
            <div className="bg-white rounded-2xl shadow-card p-6 lg:p-8">
              <h2 className="text-lg font-display font-bold text-navy-900 mb-5 tracking-wide">Property Details</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-xl">
                    <spec.icon className="h-5 w-5 text-brand-500 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-neutral-500">{spec.label}</div>
                      <div className="text-sm font-semibold text-navy-900">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {property.highlights.length > 0 && (
              <div className="bg-white rounded-2xl shadow-card p-6 lg:p-8">
                <h2 className="text-lg font-display font-bold text-navy-900 mb-4 tracking-wide">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2.5">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-card p-6 lg:p-8">
              <h2 className="text-lg font-display font-bold text-navy-900 mb-4 tracking-wide">About This Property</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl shadow-card p-6 lg:p-8">
              <h2 className="text-lg font-display font-bold text-navy-900 mb-5 tracking-wide">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2.5 text-sm text-neutral-700">
                    <CheckCircle className="h-4 w-4 text-brand-500 flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="lg:sticky lg:top-24">
              <ContactForm propertyTitle={property.title} contactEmail={property.contactEmail} />

              <div className="bg-white rounded-2xl shadow-card p-6 mt-6">
                <h3 className="text-lg font-display font-bold text-navy-900 mb-4 tracking-wide">Contact Directly</h3>
                <div className="space-y-4">
                  <a href={`mailto:${property.contactEmail}`}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                    <Mail className="h-5 w-5 text-brand-500" />
                    <div>
                      <div className="text-xs text-neutral-500">Email</div>
                      <div className="text-sm font-medium text-navy-800">{property.contactEmail}</div>
                    </div>
                  </a>
                  <a href="tel:+919876543210"
                    className="flex items-center space-x-3 p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors">
                    <Phone className="h-5 w-5 text-brand-500" />
                    <div>
                      <div className="text-xs text-neutral-500">Phone</div>
                      <div className="text-sm font-medium text-navy-800">+91 98765 43210</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-display font-bold text-navy-900 mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similarProperties.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
