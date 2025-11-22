// src/content.js

/**
 * Defines the static content for the main welcome section.
 */
export const HEADER_CONTENT = {
  mainTitle: 'Welcome to the Virtual Laboratory',
  description: 'Explore our state-of-the-art virtual labs, designed to provide accessible, hands-on learning experiences for students across all science disciplines.',
  browseButtonText: 'Browse Experiments',
  learnMoreButtonText: 'Learn More',
  availableExperimentsTitle: 'Available Experiments'
};

/**
 * Defines the structure for an experiment subject/category.
 */
export const SUBJECTS = ['All Subjects', 'Metrology', 'Dynamics', 'Fluid'];

/**
 * Defines the structure for a single experiment card.
 * NOTE: Images should be placed in the public folder or imported using bundler features.
 * Here we assume they are accessible via a relative URL (e.g., from the public folder).
 */
const EXPERIMENTS = [
  {
    id: 'exp-1',
    subject: 'Metrology',
    title: 'Profile Projector',
    description: 'Study of Profile Projector and Measurement of Object Dimensions.',
    imagePath: 'images/profileprojector.png', // Assuming you have this image in public/images/
    link: "https://isu-ismail.github.io/profile-projector/#/experiments/profile-projector/Aim"
  },
  {
    id: 'exp-2',
    subject: 'Metrology',
    title: "Micrometer",
    description: 'An outside micrometer is a precision measuring instrument used to measure the external dimensions (such as diameter, thickness, or length) of small objects with high accuracy. ',
    imagePath: 'images/micrometer.png', 
    link: "https://mmmvirtuallab-cloud.github.io/micrometer/index.html"
  },

   {
    id: 'exp-3',
    subject: 'Metrology',
    title: "Surface Roughness 'Using profilometer'",
    description: 'A profilometer is a precision measuring instrument used to measure the surface profile of a material to quantify its roughness. ',
    imagePath: 'images/profile.jpg', 
    link: "  https://mmmvirtuallab-cloud.github.io/surface-roughness"
  },
{
  id: 'exp-4',
    subject: 'Metrology',
    title: "Three Wire Method",
    description: ' The three wire method is a technique used to accurately measure the effective diameter of a screw thread by placing three precision wires of equal diameter into the thread grooves',
    imagePath: 'images/threewire.png', 
    link: "https://mmmvirtuallab-cloud.github.io/Three-Wire-Method/index.html"
  },
  {
  id: 'exp-5', // Ensure this ID is unique in your list
  subject: 'Metrology',
  title: 'Optical Autocollimator',
  description: 'Measure minute angular deviations and verify surface straightness using precision optical principles. Learn to detect geometric errors in flat and tapered workpieces using light reflection.',
  imagePath: 'images/autocollimator.png', // ⚠️ Make sure you add an image with this name to your public/images folder
  link: 'https://mmmvirtuallab-cloud.github.io/autocollimator-lab/' // This matches the basePath you set in next.config.js
},
  
  
  // 
  // {
  //   id: 'exp-4',
  //   subject: 'Physics',
  //   title: 'Projectile Motion',
  //   description: 'Analyze the trajectory of a projectile and understand the effects of launch angle and initial velocity. This simulation provides detailed data analysis.',
  //   imagePath: '/images/invalid_path.jpg', // Intentionally invalid path for testing white background fallback
  //   link: '/experiment/projectile-motion'
  // },
  // {
  //   id: 'exp-5',
  //   subject: 'Chemistry',
  //   title: 'Chemical Reactions',
  //   description: 'Observe and classify different types of chemical reactions, including synthesis and decomposition. Requires careful monitoring of color and temperature changes over time.',
  //   imagePath: '/images/reactions.jpg',
  //   link: '/experiment/chemical-reactions'
  // },
  // {
  //   id: 'exp-6',
  //   subject: 'Biology',
  //   title: 'Photosynthesis Simulation',
  //   description: 'Examine the factors affecting the rate of photosynthesis in aquatic plants, such as light intensity and carbon dioxide concentration, providing data visualization.',
  //   imagePath: '/images/photosynthesis.jpg',
  //   link: '/experiment/photosynthesis'
  // }
];

export default EXPERIMENTS;