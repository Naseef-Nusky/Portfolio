import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, project4,project5, project6
 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ECommerce App with Admin Panel"
          des=" A scalable e-commerce platform that provides a seamless shopping experience with secure transactions and
                comprehensive user management"
          src={projectOne}
        />
        <ProjectsCard
          title="Customer and Employee Management System (CEM)"
          des=" Developed a comprehensive Customer and Employee Management System (CEM) with key functionalities, including
                employee management, product management, payment processing, customer management, supplier management,
                invoice handling, and report generation."
          src={projectTwo}
        />
        <ProjectsCard
          title="Supermarket Management System"
          des="Designed and implemented a Supermarket Management System with a Spring Boot backend, enabling efficient
              customer registration, seamless item purchasing, inventory management, order processing, and real-time order
              tracking. Focused on delivering a user-friendly and scalable system with enhanced functionalities."
          src={projectThree}
        />
        <ProjectsCard
          title="Gift Card Management System "
          des=" Developed a website and admin portal for managing gift cards, payments, and user accounts using Angular,
 Node.js, and MongoDB. Integrated payment processing and card tracking functionalities."
          src={project4}
        />
        <ProjectsCard
          title="Gym Management System"
          des=" Developed features for user, member, payment, and attendance management using Angular for frontend, with
 Node.js, MongoDB, and MySQL for backend integration. Focused on frontend development, UI integration, and
 Agile sprint-based delivery."
          src={project5}
        />
        <ProjectsCard
          title="RecipeTracker-MERN"
          des="RecipeTracker-MERN is a web app built with MongoDB, Express.js, React, and Node.js. It helps users add, manage, and track their favorite recipes in one place. Users can create, edit, and share recipes easily. Simple, organized, and perfect for food lovers!"
          src={project6}
        />
      </div>
    </section>
  );
}
export default Projects