import { NavLink } from "react-router-dom";
import heroImage from "/heroimg.png"; // remplace par ton image de fond

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden pt-28 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Texte */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Expert en <span className="text-teal-600">Carrelage</span> & Rénovation
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Avec plus de 10 ans d’expérience, Céram Pro met son savoir-faire au service 
            de vos projets pour des finitions impeccables et durables.
          </p>
          <NavLink
            to="/contact"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105"
          >
            Demander un devis gratuit
          </NavLink>
        </div>

        {/* Image */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <img
            src={heroImage}
            alt="Pose de carrelage professionnelle"
            className="rounded-2xl  w-full object-cover"
          />
        </div>
      </div>

      {/* Dégradé décoratif */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-gray-100 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
