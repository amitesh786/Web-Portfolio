import React from "react";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden ">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"Poker Planning tool for task weight calculation ♠️"}
          image={"/project/img1.png"}
          about={
            "This web app allows teams to collaboratively estimate the difficulty of tasks using the poker planning technique. By selecting values on a visual scale (like Fibonacci numbers), team members can easily assign weights to tasks and reach a consensus on task complexity quickly and efficiently."
          }
          demo={"https://poker-planning-web.onrender.com/"}
          code={"https://github.com/amitesh786/Poker-Planning"}
        />
        <ProjectCard
          name={"MovieApp: discover and explore movies with ease 🎬"}
          image={"/project/img2.png"}
          about={
            "MovieApp is a mobile application built with React Native and TypeScript, offering an intuitive interface to browse, search, and explore movies. Users can view detailed information such as ratings, release dates, and descriptions of movies, making it easy to stay up-to-date with the latest in film entertainment. The app provides a smooth and responsive experience on both iOS and Android devices."
          }
          demo={"https://github.com/amitesh786/MovieApp/blob/main/screenshots/iOS_16.mov"}
          mobile={"https://github.com/amitesh786/MovieApp/blob/main/screenshots/Android_Pixel8.mov"}
          code={"https://github.com/amitesh786/MovieApp"}
        />
        <ProjectCard
          name={"SeminarApp: manage and organize seminars effortlessly 🏛️"}
          image={"/project/img3.png"}
          about={
            "SeminarApp is a modern web application built with Vue 3 and Vite, designed to help users organize and manage seminars seamlessly. It features event scheduling, attendee registration, and real-time updates. The app is containerized using Docker, making deployment fast, scalable, and efficient across various environments."
          }
          demo={"https://github.com/amitesh786/vue3-seminar-docker/tree/main/layouts"}
          code={"https://github.com/amitesh786/vue3-seminar-docker"}
        />
        <ProjectCard
          name={"WebApp: scalable vue.js & node.js application 📦"}
          image={"/project/img4.png"}
          about={
            "This web application, built with Vue.js (Frontend) and Node.js (Backend), provides a seamless user experience with efficient server-side operations. The app ensures smooth deployment and scalability using Docker, with easy-to-manage container services and minimal setup requirements."
          }
          demo={"https://github.com/amitesh786/nodejs-gmail-sendmail/tree/main/layouts"}
          code={"https://github.com/amitesh786/nodejs-gmail-sendmail"}
        />
        <ProjectCard
          name={"Image-to-PDF Converter 📄"}
          image={"/project/img5.png"}
          about={
            "A simple web application that allows users to upload images (JPG, JPEG, PNG) and convert them into a PDF document with ease. Built using JavaScript and HTML, this lightweight tool provides a seamless way to generate PDFs from images directly in the browser—no additional software required!"
          }
          code={"https://github.com/amitesh786/ConvertPDF"}
        />
      </div>
    </div>
  );
}

export default Project;
