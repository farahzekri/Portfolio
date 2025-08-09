import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-500  to-amber-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto animate-on-scroll">
          {/* Main content with photo on left and cards on right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Profile image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-72 h-[450px] sm:w-80 sm:h-[500px] lg:w-96 lg:h-[550px] rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/images/zekrifarah.png"
                  alt="Mohamed Jirac Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>


            {/* Experience, Education, and Skills Cards */}
            <div className="grid gap-6">
              {/* Expérience */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 animate-on-scroll">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-800  mb-2">Expérience</h3>
                  <p className="text-amber-400 font-semibold mb-2"> Plus de 5 ans</p>

                  <p className="text-gray-400 text-sm">Projets pratiques et immersion professionnelle</p>
                </div>
              </div>

              {/* Formation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30 animate-on-scroll">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-800 mb-2">Formation</h3>
                  <p className="text-amber-400 font-semibold mb-2">Licence en Électronique, Électrotechnique et Automatique</p>
                  <p className="text-gray-300 text-sm mb-2">Faculté des Sciences de Tunis</p>
                  <p className="text-amber-400 font-semibold mb-2 mt-4">Cycle d’ingénieur en Informatique</p>
                  <p className="text-gray-300 text-sm mb-2">Spécialité développement web – ESPRIT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description text */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Ayant récemment terminé mon cycle d’ingénieur en informatique, je suis à la recherche
              d’une opportunité professionnelle qui me permettra de mettre en pratique mes compétences,
              d’élargir mon expérience et de relever de nouveaux défis.
              Curieux, rigoureux et passionné par le développement web et les nouvelles technologies,
              je suis motivé à contribuer à des projets concrets et à évoluer au sein d’une équipe
              dynamique. Mon objectif est de continuer à apprendre, à innover et à créer des solutions
              utiles et performantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;