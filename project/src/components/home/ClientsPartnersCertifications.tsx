import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCube,
  Navigation,
  Pagination,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type LogoGridProps = {
  images: string[];
};

const LogoGrid: React.FC<LogoGridProps> = ({ images }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
    {images.map((src, idx) => (
      <div key={idx} className="flex justify-center items-center">
        <img
          src={src}
          alt={`logo-${idx}`}
          className="h-20 object-contain transition duration-300 hover:grayscale-0" // Removed grayscale by default, only applies hover effect
        />
      </div>
    ))}
  </div>
);

const ClientsPartnersCertifications: React.FC = () => {
  const logos = {
    clients: [
      '/images/tata.jpeg',
      '/images/tenova.jpeg',
      '/images/thermax.jpeg',
      '/images/titan.jpeg',
      '/images/volvo.jpeg',
      '/images/veolia.jpeg',
    ],
    partners: [
      '/images/siemen.jpeg',
      '/images/lapp.jpeg',
      '/images/omron.jpeg',
      '/images/pocontact.jpeg',
      '/images/omron.jpeg',
      '/images/cognex.jpeg',
    ],
    certifications: [
      '/images/g&brating.jpeg',
      '/images/ul.jpeg',
      '/images/ce.jpeg',
      '/images/solutionpartner.jpeg',
      '/images/sm.jpeg',
    ],
  };

  const sections = [
    {
      title: 'Clients',
      description:
        'We deliver advanced & tailored automation solutions to respected companies across the world.',
      images: logos.clients,
    },
    {
      title: 'Partners',
      description:
        'We partner with leading global companies to build sophisticated automation solutions.',
      images: logos.partners,
    },
    {
      title: 'Certifications',
      description:
        'Our solutions comply with stringent quality & industry standards set by international certification bodies.',
      images: logos.certifications,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Swiper
        modules={[EffectCube, Navigation, Pagination]}
        effect="cube"
        grabCursor
        loop
        navigation
        pagination={{ clickable: true }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        style={
          {
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
          } as React.CSSProperties
        }
        className="max-w-4xl mx-auto"
      >
        {sections.map((section, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <LogoGrid images={section.images} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ClientsPartnersCertifications;
