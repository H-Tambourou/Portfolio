import img1 from "./assets/hospital1.png";
import img2 from "./assets/map1.png";
import img3 from "./assets/social1.png";
import img4 from "./assets/visio1.png";
import img5 from "./assets/weather1.png"

export const projects = [
    {
      title: 'Hospital Management',
      description: "A full-stack application for a hospital to help manage patients efficiently.",
      image: img1,
      tags: ['MongoDB', 'Redux', 'React', 'Node'],
      source: 'https://github.com/H-Tambourou/Hospital-Management',
      live: 'https://htopus.dev/',
      id: 0,
    },
    {
        title: 'Aid Map',
        description: "A website that uses geolocation to mark places in the world that need humanitarian aid.",
        image: img2,
        tags: ['React', 'JavaScript'],
        source: 'https://github.com/H-Tambourou/Aid-Map',
        id: 1,
      },
      {
        title: 'Social Media App',
        description:"A full-stack social media application built for a future Mars colony.",
        image: img3,
        tags: ['MongoDB', 'Express', 'React', 'Node'],
        source: 'https://github.com/H-Tambourou/Social-Media-App',
        id: 2,
      },
      {
        title: 'Visio',
        description: "A React built landing page for a french photographer to display his work to the world and attract possible clients.",
          image: img4,
          tags: ['React', 'Javascript'],
        source: 'https://github.com/H-Tambourou/Visio',
        id: 3,
      },
      {
        title: 'Weather App',
        description: "A website that uses a weather api to display weather based on a user's current location.",
        image: img5,
        tags: ['Javascript'],
        source: 'https://github.com/H-Tambourou/Weather',
        id: 4,
      }, 
];
