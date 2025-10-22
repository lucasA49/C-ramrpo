import React from "react";

// === Tes SVG EXACTS (maquette) ===
const IconTools = ({ className = "h-8 w-8" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="#008080"
  >
    <path d="M22.7 19.3c.4-.4.4-1 0-1.4l-2.4-2.4c-.4-.4-1-.4-1.4 0l-2.8 2.8c-.4.4-.4 1 0 1.4l2.4 2.4c.4.4 1 .4 1.4 0l2.8-2.8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 15.6l-2.8-2.8c-.4-.4-1-.4-1.4 0l-2.4 2.4c-.4.4-.4 1 0 1.4l2.8 2.8c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1 0-1.4zm6.6-6.6l-2.8-2.8c-.4-.4-1-.4-1.4 0l-2.4 2.4c-.4.4-.4 1 0 1.4l2.8 2.8c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1 0-1.4z" />
  </svg>
);

const IconThumb = ({ className = "h-8 w-8" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="#008080"
  >
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
  </svg>
);

const IconClock = ({ className = "h-8 w-8" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="#008080"
  >
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm.5 13H11V7h1.5v8z" />
  </svg>
);

const IconStar = ({ className = "h-8 w-8" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="#008080"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function Garantie() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-gray-800">
      {/* Image de fond */}
      <img
        src="./garantiebg.png"
        alt="Arrière-plan des garanties"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* Contenu — padding vertical réduit */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-6 md:py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Nos Garanties & Engagements
        </h2>

        {/* Cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <IconTools className="h-8 w-8 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Certifié RGE & Décennale</h3>
            <p className="text-sm text-gray-600">
              Nous sommes certifiés RGE et couverts par une garantie décennale.
            </p>
          </div>

          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <IconThumb className="h-8 w-8 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Travaux de qualité</h3>
            <p className="text-sm text-gray-600">
              Nous réalisons vos travaux avec sérieux et dans les règles de l’art.
            </p>
          </div>

          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <IconClock className="h-8 w-8 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Respect des délais</h3>
            <p className="text-sm text-gray-600">
              Nous nous engageons à respecter systématiquement les délais annoncés.
            </p>
          </div>

          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <IconStar className="h-8 w-8 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Satisfaction client</h3>
            <p className="text-sm text-gray-600">
              Nous mettons tout en œuvre pour assurer votre satisfaction.
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-block bg-[#3CB6A3] text-white font-semibold px-6 py-3 rounded-xl shadow hover:brightness-95 transition"
        >
          Demander un devis
        </a>
      </div>
    </section>
  );
}
