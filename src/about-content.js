// src/about-content.js

// 1. Content for the automatic image carousel
export const CAROUSEL_SLIDES = [
  {
    id: 'slide1',
    imagePath: '/vl-homepage/images/profileprojector.png', // Use images from your /public/images folder
    topic: 'Profile Projector Simulation',
    description:
      'A hands-on virtual tool for dimensional measurement and analysis.',
    developedBy: 'Dr. Elara Vance, Kwame Nkrumah',
    coordinatedBy: 'Dr. Lena Sharma',
  },
  {
    id: 'slide2',
    imagePath: '/vl-homepage/images/micrometer.png',
    topic: 'Micrometer Simulation',
    description: 'Master precision measurement down to the micrometer level.',
    developedBy: 'Dr. Elara Vance',
    coordinatedBy: 'Dr. Lena Sharma',
  },
  {
    id: 'slide3',
    imagePath: '/vl-homepage/images/profile.jpg',
    topic: 'Surface Roughness Tester',
    description:
      'Analyze and understand material topology with our profilometer simulation.',
    developedBy: 'Kwame Nkrumah',
    coordinatedBy: 'Dr. Lena Sharma',
  },
];

// 2. Content for the "Meet the Team" section
export const TEAM_MEMBERS = [
  {
    id: 't1',
    name: 'Dr. Elara Vance',
    role: 'Lead Simulation Architect',
    qualification: 'Ph.D. in Mechanical Engineering',
    imagePath: 'https://i.pravatar.cc/150?img=1', // Placeholder
  },
  {
    id: 't2',
    name: 'Kwame Nkrumah',
    role: 'Software Development Lead',
    qualification: 'M.Sc. in Computer Science (MIT Alumnus)',
    imagePath: 'https://i.pravatar.cc/150?img=2', // Placeholder
  },
  {
    id: 't3',
    name: 'Dr. Lena Sharma',
    role: 'Educational Content Director',
    qualification: 'Professor, Dept. of Production Technology',
    imagePath: 'https://i.pravatar.cc/150?img=3', // Placeholder
  },
  {
    id: 't4',
    name: 'Arjun Gupta',
    role: 'UI/UX Designer',
    qualification: 'B.Des in Visual Communication',
    imagePath: 'https://i.pravatar.cc/150?img=4', // Placeholder
  },
];