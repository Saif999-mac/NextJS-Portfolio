"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Hospital Management System",
    description:
      "A web-based hospital management system designed to streamline hospital operations and improve patient management. It enables efficient management of patient records, doctor information, appointments, and medical details through a centralized platform, helping simplify administrative tasks and enhance healthcare service management.",
    image: "https://images.pexels.com/photos/6010861/pexels-photo-6010861.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saif999-mac",
    previewUrl: "https://hospital-management-system-eta-flame.vercel.app",
  },
  {
    id: 2,
    title: "Jobs Tracking App",
    description:
      "A web-based job tracking platform designed to simplify and streamline the job search process. It allows users to manage job applications, track application statuses, monitor interview schedules, store company details, and organize important deadlines in one place. The platform provides a centralized dashboard to help users stay organized, track their progress, and manage their job search more efficiently.",
    image: "https://images.pexels.com/photos/7114/laptop-mobile.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saif999-mac",
    previewUrl: "https://jobs-tracking-le6o.onrender.com",
  },
  {
    id: 3,
    title: "Comfy Store (E-Commerce)/NextJs",
    description:
      "ComfyStore brings modern, comfortable furniture designed for everyday living. Discover quality craftsmanship, clean designs, and effortless shopping that helps you create a space that feels stylish, cozy, and truly your own.",
    image: "https://images.pexels.com/photos/6312357/pexels-photo-6312357.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saif999-mac",
    previewUrl: "https://next-js-store-fcir.vercel.app/",
  },
  {
    id: 4,
    title: "React Store (E-Commerce)",
    description:
      "ComfyStore brings modern, comfortable furniture designed for everyday living. Discover quality craftsmanship, clean designs, and effortless shopping that helps you create a space that feels stylish, cozy, and truly your own.",
    image: "https://images.pexels.com/photos/6969824/pexels-photo-6969824.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saif999-mac",
    previewUrl: "https://comfy-shops.netlify.app/",
  },
  {
    id: 5,
    title: "MixMaster MockTails",
    description:
      "MixMaster Cocktails is your ultimate destination for discovering creative drinks. Explore classic and modern cocktail recipes, learn mixing techniques, and craft perfect beverages at home with easy instructions, fresh ingredients, and a fun, interactive experience for every occasion.",
    image: "https://images.pexels.com/photos/8679352/pexels-photo-8679352.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saif999-mac",
    previewUrl: "https://mixmaster-mocktail.netlify.app/",
  },
  {
    id: 6,
    title: "Contentful-CMS",
    description:
      "Contentful CMS helps teams create, manage, and deliver content seamlessly across platforms. Build flexible, scalable digital experiences faster with structured content, powerful APIs, and tools designed for modern developers and content creators alike.",
    image:
      "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Saif999-mac",
    previewUrl: "https://contentful-apis.netlify.app/",
  },
  {
    id: 7,
    title: "Images Splash",
    description:
      "Image Splasher lets you explore and discover stunning high-quality images effortlessly. Search, browse, and download beautiful photos for your projects, inspiration, or creative work through a fast, clean, and visually engaging experience powered by a vast image collection.",
    image: "https://images.pexels.com/photos/67473/pexels-photo-67473.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saif999-mac",
    previewUrl: "https://imagessplash.netlify.app/",
  },
  {
    id: 8,
    title: "Backroad Tour",
    description:
      "BackRoad Tours offers unforgettable travel experiences through scenic routes and hidden destinations. Explore nature, culture, and adventure with expertly planned tours designed for curious travelers seeking authentic journeys, memorable moments, and stress-free exploration off the beaten path. 🌍✨",
    image:
      "https://images.pexels.com/photos/19357317/pexels-photo-19357317.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saif999-mac",
    previewUrl: "https://backroads-mac.netlify.app/",
  },
  {
    id: 9,
    title: "Tea Station",
    description:
      "TeaStation is your go-to place for refreshing, handcrafted teas. Discover a variety of flavors made from quality ingredients, brewed to perfection, and served with care to bring comfort, energy, and a calming tea experience to every moment of your day. 🍵",
    image: "https://images.pexels.com/photos/8004558/pexels-photo-8004558.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saif999-mac",
    previewUrl: "https://tea-station-mac.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
