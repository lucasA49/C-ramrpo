import { NavLink } from "react-router-dom";
// Remplace ce chemin par ton image (webp/jpg) optimisée ~1200x900
import artisanImg from "/artisanimg.png";

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      className="relative bg-white"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Texte */}
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              Depuis 2022
              <span className="inline-block h-1 w-1 rounded-full bg-teal-600" />
              CÉRAM PRO
            </p>

            <h2
              id="about-title"
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
            >
              À propos de <span className="text-teal-600">Céram Pro</span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Céram Pro, votre expert en <strong>carrelage</strong> et{" "}
              <strong>rénovation</strong> depuis 2022. Nous allions savoir-faire
              et passion pour offrir des résultats durables et esthétiques, du
              conseil jusqu’aux finitions.
            </p>

            {/* Points clés (optionnels mais rassurants) */}
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                Pose, restauration et rénovation de carrelage sur mesure.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                Accompagnement de A à Z : conseils matériaux & finitions.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-teal-600" />
                Respect des délais et propreté de chantier.
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-white font-medium shadow-md transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
              >
                Demander un devis
              </NavLink>
              <NavLink
                to="/a-propos"
                className="inline-flex items-center justify-center rounded-full border border-teal-200 text-teal-700 px-6 py-3 font-medium hover:bg-teal-50 transition"
              >
                En savoir plus
              </NavLink>
            </div>
          </div>

          {/* Visuel */}
          <div className="relative">
            {/* Image responsive avec légère carte */}
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100">
              <img
                src={artisanImg}
                alt="Artisan posant du carrelage - Céram Pro"
                className="w-full h-72 md:h-[420px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Petit accent décoratif */}
            <div className="hidden md:block absolute -z-10 -top-6 -right-6 h-28 w-28 rounded-2xl bg-teal-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
