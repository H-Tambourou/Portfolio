import img1 from "./assets/map1.png";
import img2 from "./assets/social1.png";
import img3 from "./assets/visio1.png";
import img4 from "./assets/weather1.png"

export const projects = [
    {
        title: 'Aid Map',
        description: "A website that uses geolocation to mark places in the world that need humanitarian aid.",
        image: img1,
        tags: ['React', 'JavaScript'],
        source: 'https://github.com/H-Tambourou/Aid-Map',
        id: 0,
      },
      {
        title: 'Social Media App',
        description:"A full-stack social media application built for a future Mars colony.",
        image: img2,
        tags: ['Mongo', 'Express', 'React', 'Node'],
        source: 'https://github.com/H-Tambourou/Social-Media-App',
        id: 1,
      },
      {
        title: 'Visio',
        description: "A React built landing page for a french photographer to display his work to the world and attract possible clients.",
          image: img3,
          tags: ['React', 'Javascript'],
        source: 'https://github.com/H-Tambourou/Visio',
        id: 2,
      },
      {
        title: 'Weather App',
        description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
        image: img4,
        tags: ['Javascript'],
        source: 'https://github.com/H-Tambourou/Weather',
        id: 3,
      }, 
];
