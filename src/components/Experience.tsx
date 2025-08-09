import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [animateSkills, setAnimateSkills] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the section comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Trigger skill animation when skills tab is opened
  useEffect(() => {
    if (activeTab === 'skills') {
      setAnimateSkills(true);
      const timer = setTimeout(() => setAnimateSkills(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  // Reset animations when tab changes (optional - for re-triggering animations)
  useEffect(() => {
    if (isVisible) {
      // Small delay to allow tab content to render
      const timer = setTimeout(() => {
        // Force re-animation on tab change if needed
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab, isVisible]);

  // Updated skills without years
  const skills = {
    "💻 Programmation ": [
      { name: "Arduino" },

      { name: "VHDL" },
      { name: "DSP" },
      { name: "Assembleur" },
      { name: "C" },
      { name: "Java" },
      { name: "Python" },
      { name: ".NET (C#)" },
      { name: "Typescript" },
      { name: "Javascript" }
    ],
    "🛠️ Frameworks et Bibliothèques": [
      { name: "Spring Boot" },
      { name: "Angular" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Laravel" },
      { name: "Django" },
      { name: "FastAPI" },
      { name: " Tailwind CSS" },
      { name: " Bootstrap" }
    ],
    "📊 Bases de données": [
      { name: "MySQL" },
      { name: "SQL" },
      { name: "PL/SQL" },
      { name: "MongoDB" },
      { name: "No-SQL" },

    ],
    "🚀 Outils CI/CD": [
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "Jenkins" },
      { name: "Vagrant" },
      { name: "SonarQube" },
      { name: "Git" },
      { name: "GitLab" },
      { name: "Nexus" },
      { name: "WSL" },
      { name: "Portainer" }
    ]
  };






  // Enhanced experiences with more details
  const experiences = [
    {
      id: 1,
      title: "Stage PFE-Plateforme e-tourisme B2B/B2C",
      organization: "Digital group performance",
      period: "Janvier 2025 - Juin 2025",
      location: "Tunis",
      description: "Conception et développement d’une application web permettant aux clients de réserver en ligne et aux prestataires (hôtels/agences) de publier leurs offres, avec intégration du paiement en ligne, de notifications, d’un système de recommandation intelligent et d’un chatbot IA propulsé par Groq. Mise en place d’un algorithme de machine learning pour analyser la compétitivité des prix des hôtels, ainsi que l’intégration d’APIs externes telles que Google Auth, Cloudinary, MapTiler, KConnect, API météo, Booking et Calendarific. Déploiement de l’infrastructure DevOps incluant la conteneurisation (Docker, Docker Compose), la CI/CD et le suivi/monitoring des logs.",
      skills: ["React", "Node.js", "FastAPI", "MongoDB", "Python", "Scikit-learn", "Docker", "CI/CD"],

    },
    {
      id: 2,
      title: "Stage D'ingénieur-Synchronisation de calendriers",
      organization: "HopeHorizon",
      period: " Juin 2024 - Août 2024",
      location: "Ariana Tunis",
      description: "Lors de ce stage, j’ai travaillé sur la mise en place d’une fonctionnalité de synchronisation des rendez-vous de l’application avec Google Calendar et Apple Calendar. J’ai développé, avec React, une interface incluant un calendrier interactif permettant aux utilisateurs de visualiser leurs rendez-vous, ainsi que deux boutons dédiés à la synchronisation avec Google et Apple. Du côté technique, j’ai intégré les API Google et Apple en implémentant le mécanisme d’authentification OAuth, puis en gérant les flux de synchronisation afin que chaque ajout, modification ou suppression de rendez-vous dans l’application soit automatiquement répercuté dans les calendriers externes. Ce travail a nécessité la gestion des permissions utilisateurs, la communication sécurisée avec les services tiers et l’optimisation du processus pour garantir une expérience fluide et fiable.",
      skills: ["FastAPI", "React.js", "MongoDB", "OAuth"],

    },
    {
      id: 3,
      title: "Stage D'ingénieur-Application de gestion pédagogique",
      organization: "HorizonFormation",
      period: "Juin 2024 - Septembre 2024",
      location: "à distance",
      description: "J’ai développé une application full-stack pour un centre de formation, permettant la gestion complète des classes, des cours, des enseignants et des salles. Les responsables peuvent créer et organiser les emplois du temps via un calendrier interactif, en planifiant chaque séance selon l’horaire, la salle et le formateur. La plateforme intègre un système d’authentification sécurisée avec Axios et jetons, ainsi qu’un contrôle d’accès basé sur les rôles (RBAC) pour gérer les droits des utilisateurs.",
      skills: ["React Js", "Node.js", "MongoDB"],

    },
    {
      id: 4,
      title: "Stage D'immersion-Virtualisation avec Docker",
      organization: "TEAMWILL",
      period: "Juillet 2023 - Août 2023",
      location: "Lac1 Tunis",
      description: "J’ai suivi une formation sur la virtualisation, la conteneurisation et le déploiement d’applications, me permettant d’acquérir des compétences pratiques sur Docker et Docker Compose. Dans ce cadre, j’ai créé des images personnalisées, configuré des conteneurs et déployé une application complète en environnement isolé, tout en maîtrisant les étapes clés du cycle de déploiement.",
      skills: ["Docker", " Docker Compose", "Linux"],

    },
    {
      id: 5,
      title: "Stage PFE- Réalisation d'un banc d'essai électronique",
      organization: "PARENIN",
      period: "Février 2022 - Juin 2022",
      location: "Sijoumi Tunis",
      description: "J’ai réalisé l’étude et le montage d’un banc d’essai basé sur une carte Arduino afin de simuler et analyser le fonctionnement d’un moteur Caterpillar C13. Le système permet de détecter et d’indiquer différents états de fonctionnement ou de panne grâce à des capteurs, des interrupteurs, des voyants lumineux et un afficheur pour les codes d’erreur. Ce banc d’essai reproduit plusieurs scénarios, tels que la variation de température ou les anomalies des injecteurs, afin de comprendre et diagnostiquer le comportement de la machine.",
      skills: ["Arduino IDE (C/C++)", " HTML", "Électronique analogique et numérique",],

    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issued: "May 2025",
      expires: "May 2028",
      credentialId: "",
      credentialUrl: "https://www.credly.com/badges/0d35804c-95a1-4ede-bdac-ef862769e680/linked_in_profile",
      skills: ["Cloud Architecture", "AWS Services", "System Design"]
    },
    {
      title: "Intermediate Technical Interview Prep",
      issuer: "CodePath",
      issued: "May 2025",
      credentialId: "117383",
      credentialUrl: "https://drive.google.com/file/d/1xPW9wi33O_o9Q-Zgmt2dO4D6au6x4RQJ/view?usp=share_link",
      skills: ["Python", "Collaborative Problem Solving", "Analytical Skills", "Data Structures and Algorithms"]
    },
    {
      title: "Python Certificate",
      issuer: "HackerRank",
      issued: "Oct 2024",
      credentialId: "",
      credentialUrl: "https://www.hackerrank.com/certificates/iframe/fa583e2abe8d",
      skills: ["Problem Solving", "Python"]
    }
  ];

  const leadership = [
    {
      title: "National Member",
      organization: "National Society of Black Engineers (NSBE)",
      period: "Jan 2024 - Present",
      description: "Active member of the largest student-managed organization focused on increasing the number of culturally responsible Black engineers. Participate in professional development workshops, networking events, and community outreach programs."
    },
    {
      title: "Tech Prep Fellow",
      organization: "Management Leadership for Tomorrow (MLT)",
      period: "Jan 2025 - Present",
      description: "Selected for MLT's competitive tech preparation program designed to prepare high-achieving underrepresented students for careers in technology. Engaging in technical skill development, career coaching, and networking with industry professionals."
    },
    {
      title: "National Member",
      organization: "ColorStack",
      period: "Aug 2024 - Present",
      description: "Member of the largest community of Black and Latinx Computer Science students and professionals. Participate in mentorship programs, technical workshops, and career development initiatives focused on increasing diversity in tech."
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* Animated Title */}
        <h2 className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-500  to-amber-500  bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          Expérience et compétences
        </h2>

        {/* Animated Tab Navigation */}
        <div className={`flex flex-wrap justify-center mb-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2 max-w-4xl mx-auto border border-amber-400/20 gap-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
        >
          {[
            { key: 'experience', label: 'Expérience', icon: '💼' },
            { key: 'skills', label: 'compétences', icon: '🛠️' },
            { key: 'certifications', label: ' Certifications', icon: '🏆' },
            { key: 'leadership', label: 'Leadership', icon: '👥' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-lg md:rounded-full transition-all duration-500 text-center ${activeTab === tab.key
                  ? 'bg-gradient-to-r from-amber-600 to-amber-600 text-white shadow-lg scale-105'
                  : 'bg-transparent text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:space-x-1">
                <span className="text-xs sm:text-sm md:text-base">{tab.icon}</span>
                <span className="font-medium text-xs sm:text-xs md:text-sm leading-tight">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Experience Tab with Popup Animations */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {/* Timeline Container */}
              <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-amber-500 rounded-full"></div>

                {/* Timeline Items */}
                <div className="space-y-8">
                  {experiences.map((exp, index) => {
                    const isExpanded = selectedExperience === exp.id;

                    return (
                      <div
                        key={exp.id}
                        className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                          }`}
                        style={{ transitionDelay: `${500 + index * 200}ms` }}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-gray-900 z-10 transition-all duration-300 hover:scale-125"></div>

                        {/* Timeline Card */}
                        <div
                          className={`ml-20 bg-gray-800/50 backdrop-blur-sm rounded-xl border cursor-pointer transition-all duration-300 ${isExpanded
                              ? 'border-amber-400 shadow-xl shadow-amber-400/20 scale-105'
                              : 'border-amber-400/30 hover:border-amber-400 hover:scale-102'
                            }`}
                          style={{
                            transformOrigin: 'left center',
                            zIndex: isExpanded ? 10 : 1,
                          }}
                          onClick={() => setSelectedExperience(isExpanded ? null : exp.id)}
                        >
                          <div className="p-6">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex-1">
                                <h3 className="text-xl font-bold text-amber-900 mb-2">{exp.title}</h3>
                                <p className="text-amber-400 font-medium mb-1">{exp.organization}</p>
                                <div className="flex items-center text-gray-700 text-sm">
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  {exp.period}
                                  <span className="mx-2">•</span>
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  {exp.location}
                                </div>
                              </div>

                              {/* Expand Button */}
                              <div
                                className={`ml-4 p-2 rounded-full bg-teal-600/20 hover:bg-teal-600/30 transition-all duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'
                                  }`}
                              >
                                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                            {/* Expanded Content */}
                            {isExpanded && (
                              <div className="space-y-6 pt-4 border-t border-amber-700/50 animate-slideDown">


                                {/* Technologies Used */}
                                <div>
                                  <h4 className="text-amber-400 font-semibold mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Technologies utilisées
                                  </h4>
                                  <div className="flex flex-wrap gap-3">
                                    {exp.skills.map((skill, skillIndex) => (
                                      <span
                                        key={skillIndex}
                                        className="bg-gradient-to-r from-amber-600 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab with Staggered Animations */}
          {activeTab === 'skills' && (
            <>



              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div
                    key={category}
                    className={`bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-teal-400/30 hover:border-teal-400 transition-all duration-700 ${isVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-16 scale-95'
                      }`}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">{category}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillList.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={` text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}




          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-teal-400/30 hover:border-teal-400 transition-all duration-700 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-teal-400 mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">
                    Issued {cert.issued}
                    {cert.expires && ` • Expires ${cert.expires}`}
                    {cert.credentialId && ` • ID: ${cert.credentialId}`}
                  </p>
                  <div className="mb-4">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Show Credential
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Leadership Tab */}
          {activeTab === 'leadership' && (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {leadership.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-teal-400/30 hover:border-teal-400 transition-all duration-700 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-teal-400 mb-1">{item.organization}</p>
                  <p className="text-gray-400 text-sm mb-3">{item.period}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CSS for additional animations */}
      <style>
        {`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown { 
            animation: slideDown 0.3s ease-out; 
          }
          
          .scale-102 {
            transform: scale(1.02) !important;
          }
          
          .scale-100 {
            transform: scale(1.00) !important;
          }
          
          /* Ensure smooth transitions only for intended elements */
          .transition-all {
            transition-property: transform, border-color, box-shadow, opacity;
          }
          
          /* Prevent layout shifts */
          .relative {
            contain: layout style;
          }
        `}
      </style>
    </section>
  );
};

export default Experience;