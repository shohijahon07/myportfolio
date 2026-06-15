import image1 from "/public/projects-image/mr.jpg" ;
import image2 from "/public/projects-image/taxipicture.png";
import image3 from "/public/projects-image/photo_2025-06-14_06-16-50.jpg";
import image4 from "/public/projects-image/press.jpg";
import image5 from "/public/projects-image/test.jpg";
import image6 from "/public/projects-image/snippet.jpg";
import image7 from "/public/projects-image/study.jpg";
import image8 from "/public/projects-image/resume.jpg";
import image9 from "/public/projects-image/zapchast.jpg";
import image10 from "/public/projects-image/lms.jpg";
import image11 from "/public/projects-image/ecommece.jpg";
import image12 from "/public/projects-image/messanger.jpg";
import image13 from "/public/projects-image/image.jpg";
import image14 from "/public/projects-image/olx.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Miraraboliymadrasasi ",
    description:
      "This project delivers a fully modernized and secure official website for Miraraboli Madrasa, developed pro bono (free of charge) as a community service. It provides the madrasa with a reliable digital presence and an intuitive Admin Panel that allows staff to easily manage daily prayer times and update site content without technical assistance Key Highlights Dynamic Admin Panel for updating prayer times and publishing new content. Robust NGINX deployment with a valid HTTPS SSL certificate ensuring secure and stable access.End-to-end configuration and deployment handled entirely by the developer. This website offers the madrasa a scalable, professional, and maintenance-friendly platform, supporting its mission to share knowledge and serve its community online.",
    tools: ["HTML5",  "CSS3" , "ReactJS", "Postgresql", "Java", "Spring-Boot" , "Spring-Security" , "JWT" , "React Router" ,"NGINX" ],
    role: "Full-Stack developer",
    code: "",
    demo: "https://miraraboliy.uz/",
    image: image1,
  },
  {
    id: 2,
    name: "interregional taxi (StartUp Project)",
    description:
      "Role: Full-stack (React/Spring Boot) | Time: 3mo🚀 Results:0.3s load (React/WebP) | 0 breaches (JWT/Spring Sec) | #1 Google ↗120% traffic Cost hack:5VPS(Docker)vs.AWS50 MVP in 6 wks → 4mo zero maintenance 💡 Pitch: Need speed + security + #1 Google? Let’s clone this success! 🔑 SEO, Docker, JWT",
    tools: [
      "React",
      "ReduxSaga",
      "Java",
      "Spring-Boot",
      "Spring-Security",
      "Telegram Bot (Longpooling)",
    ],
    role: "FullStack Developer ",
    code: "https://github.com/shohijahon07/Intercity_Taxi_Project.git",
    demo: "https://shohijahon-dev.uz/",
    image: image2,
  },
  {
    id: 3,
    name: "BodyBalance (StartUp Project)",
    description:
      "This is my own startup project, designed and developed entirely by me.The application analyzes a person’s physical measurements to determine whether they are overweight or not.Key Highlights Built from concept to deployment by a single founder–developer.Accepts user data (such as height and weight) and instantly provides a weight-status evaluation.Includes a Telegram bot interface for quick and user-friendly access.Deployed and maintained independently, ensuring scalability and reliability.This project demonstrates my ability to transform an idea into a working product, covering all stages from ideation and design to coding and deployment." ,
      
      
  
    tools: ["Telegram_bot (Longpooling)"],
    role: "Startup Founder & Developer",
    code: "https://github.com/shohijahon07/BodyBalance.git",
    demo: "https://t.me/SemizlikTest_bot",
    image: image3,
  }

];
