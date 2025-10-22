import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect x="20" y="15" width="15" height="15" fill="#6DABA8" rx="1" />
          <rect x="40" y="15" width="15" height="15" fill="#6DABA8" rx="1" />
          <rect x="60" y="15" width="15" height="15" fill="#6DABA8" rx="1" />
          <rect x="20" y="35" width="15" height="15" fill="#6DABA8" rx="1" />
          <rect x="40" y="35" width="15" height="15" fill="#6DABA8" rx="1" />
          <rect x="60" y="35" width="15" height="15" fill="#6DABA8" rx="1" />
          <rect x="20" y="55" width="15" height="15" fill="#6DABA8" rx="1" />
          <rect x="40" y="55" width="15" height="15" fill="#6DABA8" rx="1" />
          <rect x="60" y="55" width="15" height="15" fill="#6DABA8" rx="1" />
        </svg>
      ),
      title: "Pose de carrelage",
      description: "Carrelage contemporain et classique"
    },
    {
      icon: (
        <svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="35" rx="15" ry="20" fill="#6DABA8" transform="rotate(-25 50 35)" />
          <rect x="35" y="55" width="30" height="6" fill="#5A9693" rx="3" />
        </svg>
      ),
      title: "Restauration",
      description: "Travaux de réparation de carrelage"
    },
    {
      icon: (
        <svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect x="55" y="20" width="22" height="10" fill="#6DABA8" rx="1" />
          <rect x="45" y="35" width="18" height="10" fill="#6DABA8" rx="1" />
          <rect x="68" y="35" width="18" height="10" fill="#6DABA8" rx="1" />
          <rect x="38" y="50" width="15" height="10" fill="#6DABA8" rx="1" />
          <rect x="58" y="50" width="15" height="10" fill="#6DABA8" rx="1" />
          <rect x="78" y="50" width="10" height="10" fill="#6DABA8" rx="1" />
        </svg>
      ),
      title: "Rénovation",
      description: "Remise à neuf de carrelage abîmé"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-24">
          Nos services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {service.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}