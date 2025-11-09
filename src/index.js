window.onload = () => {
  action("basic");
};

const data = {
  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Zambia Centre for Accountancy Studies University",
      location: "Lusaka, ZM",
      start_date: "August 2025",
      end_date: "Present",
    },
    {
      degree: "Bachelor's Degree in Aeronautical Engineering",
      institution: "Copperbelt University",
      location: "Kitwe, ZM",
      start_date: "July 2015",
      end_date: "June 2021",
    },
    {
      degree: "General Certificate in Secondary Education",
      institution: "St Paul's Secondary",
      location: "Kabwe, ZM",
      start_date: "January 2008",
      end_date: "October 2013",
    },
  ],

  work_history: [
    {
      company: "ProBase Limited",
      location: "Lusaka, ZM",
      position: "Software Developer",
      start_date: "April 2024",
      end_date: "Present",
      responsibilities: [
        "Designed and developed responsive front-end applications using React, Angular, and Flutter, ensuring cross-browser compatibility and mobile responsiveness.",
        "Implemented OAuth2 and JWT-based authentication for API access and user sessions.",
        "Coordinated system maintenance and support, providing timely resolutions to issues and ensuring continuous service availability.",
        "Architected and implemented scalable backend services using Node.js (Express) and Golang, integrating third-party fintech APIs (payment gateways, KYC, and card issuance). Designed RESTful and event-driven microservices to ensure high availability and low-latency transaction processing.",
        "Designed optimized data schemas and query logic across PostgreSQL, MongoDB, and Redis to handle high-frequency financial data efficiently and securely.",
        "Conducted testing, debugging, and code reviews to ensure system reliability and compliance with best practices.",
        "Collaborated with DevOps to containerize services using Docker and orchestrate deployment with Kubernetes.",
        "Provided technical guidance and training to team members, fostering collaboration and knowledge sharing.",
      ],
      key_projects: [
        {
          name: "ProBase Wallet – Real Time Fintech Platform",
          description:
            "Designed and led backend architecture using Node.js and Go for secure, real-time financial transactions. Integrated with external APIs (UBA, MasterCard) to support account creation, card issuance, and wire transfers. Implemented asynchronous event handling for transaction reliability and audit trails.",
        },
        {
          name: "KYC Gateway",
          description:
            "Built full-stack KYC verification service with Node.js backend and React frontend. Integrated with AML/KYC providers and implemented data validation and encryption for compliance.",
        },
        {
          name: "ProBase MasterCard Integration",
          description:
            "Integrated third-party provider for MasterCard APIs for card issuance, transaction tracking, and user onboarding, ensuring PCI DSS compliance and data protection.",
        },
      ],
    },
    {
      company: "Self Employed",
      location: "Kitwe, ZM",
      position: "Full Stack Software Developer",
      start_date: "January 2022",
      end_date: "April 2024",
      responsibilities: [
        "Designed and developed custom websites and back-end applications following industry best practices, ensuring both functionality and user-friendly interfaces.",
        "Built scalable and optimized databases to support high-traffic applications, focusing on data integrity, performance, and security.",
        "Integrated SEO strategies and implemented responsive front-end designs to enhance website visibility, accessibility, and user engagement.",
        "Provided ongoing maintenance, feature updates, and client support, while troubleshooting and resolving issues to ensure reliable system performance.",
      ],
    },
  ],

  skills: {
    hard_skills: [
      {
        category: "Front-end Development",
        skills: [
          {
            name: "Angular",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          },
          {
            name: "React",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Flutter",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
          },
          {
            name: "JavaScript",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          },
          {
            name: "HTML",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          },
          {
            name: "CSS",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          },
        ],
      },
      {
        category: "Back-end Development",
        skills: [
          {
            name: "Python",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          },
          {
            name: "TypeScript",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          },
          {
            name: "Node.js",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "Go",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
          },
          {
            name: "Java",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          },
        ],
      },
      {
        category: "Architecture & Design",
        skills: [
          {
            name: "System Architecture",
            image: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
          },
          {
            name: "Design Patterns",
            image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
          },
          {
            name: "Microservices",
            image: "https://cdn-icons-png.flaticon.com/512/1048/1048947.png",
          },
          {
            name: "REST APIs",
            image: "https://cdn-icons-png.flaticon.com/512/3069/3069171.png",
          },
          {
            name: "GraphQL",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          },
        ],
      },
      {
        category: "Databases",
        skills: [
          {
            name: "PostgreSQL",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          },
          {
            name: "SQL",
            image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
          },
          {
            name: "MongoDB",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          },
          {
            name: "Redis",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
          },
        ],
      },
      {
        category: "UI/UX & Tools",
        skills: [
          {
            name: "Figma",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          },
          {
            name: "Git",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          },
          {
            name: "Test-Driven Development",
            image: "https://cdn-icons-png.flaticon.com/512/2721/2721200.png",
          },
          {
            name: "Docker",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          },
          {
            name: "Kubernetes",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          },
          {
            name: "Grafana",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
          },
          {
            name: "Prometheus",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
          },
          {
            name: "Kafka",
            image:
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
          },
          {
            name: "RabbitMQ",
            image: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png",
          },
          {
            name: "WebSocket",
            image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
          },
          {
            name: "MS Office",
            image: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
          },
        ],
      },
    ],
    soft_skills: [
      "Attention to detail",
      "Good communicator with exceptional interpersonal skills",
      "Quick learner",
      "Creative and innovative",
      "Proactive and self-motivated",
      "Collaborative team player",
      "Project management",
    ],
  },

  hobbies: [
    { name: "Football", icon: "fa-futbol" },
    { name: "Reading", icon: "fa-book" },
    { name: "Gaming", icon: "fa-gamepad" },
    { name: "Music", icon: "fa-music" },
    { name: "Traveling", icon: "fa-plane" },
    { name: "Coding", icon: "fa-code" },
  ],
};

let current = "basic";

var action = (event) => {
  current = event;

  document.querySelectorAll("button").forEach((i) => {
    i.classList.remove("active");

    if (i.classList.contains(current)) {
      i.classList.add("active");
    }
  });

  const mainSection = document.getElementById("main");

  switch (current) {
    case "edu":
      mainSection.innerHTML = `
        <h2 class="section-title">Education</h2>
        ${data.education
          .map(
            (edu) => `
          <div class="edu-item">
            <h3>${edu.degree}</h3>
            <h4>${edu.institution}</h4>
            <div class="date-location">
              ${edu.start_date} - ${edu.end_date} | ${edu.location}
            </div>
          </div>
        `
          )
          .join("")}
      `;
      break;

    case "history":
      mainSection.innerHTML = `
        <h2 class="section-title">Work History</h2>
        ${data.work_history
          .map(
            (job) => `
          <div class="work-item">
            <h3>${job.position}</h3>
            <h4>${job.company}</h4>
            <div class="date-location">
              ${job.start_date} - ${job.end_date} | ${job.location}
            </div>
            <ul>
              ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
            </ul>
            ${
              job.key_projects
                ? `
              <div class="key-projects">
                <h4>Key Projects:</h4>
                ${job.key_projects
                  .map(
                    (project) => `
                  <div class="project-item">
                    <h5>${project.name}</h5>
                    <p>${project.description}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            `
                : ""
            }
          </div>
        `
          )
          .join("")}
      `;

      break;

    case "skills":
      mainSection.innerHTML = `
        <h2 class="section-title">Skills</h2>
        <div class="skills-container">
          <div>
            <h3 style="margin-top: 0; color: rgba(82, 81, 81, 0.8);">Technical Skills</h3>
            ${data.skills.hard_skills
              .map(
                (category) => `
              <div class="skill-category">
                <h3>${category.category}</h3>
                <div class="skill-grid">
                  ${category.skills
                    .map(
                      (skill) => `
                    <div class="skill-item">
                      <img src="${skill.image}" alt="${skill.name}" />
                      <span>${skill.name}</span>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            `
              )
              .join("")}
          </div>
          <div>
            <h3 style="color: rgba(82, 81, 81, 0.8);">Soft Skills</h3>
            <ul class="soft-skills-list">
              ${data.skills.soft_skills
                .map((skill) => `<li>${skill}</li>`)
                .join("")}
            </ul>
          </div>
        </div>
      `;
      break;

    case "hobbies":
      mainSection.innerHTML = `
        <h2 class="section-title">Hobbies & Interests</h2>
        <div class="hobbies-grid">
          ${data.hobbies
            .map(
              (hobby) => `
            <div class="hobby-item">
              <i class="fa-solid ${hobby.icon}"></i>
              <p style="margin: 0; font-weight: 500;">${hobby.name}</p>
            </div>
          `
            )
            .join("")}
        </div>
      `;
      break;

    case "basic":
    default:
      mainSection.innerHTML = `
      <h2 class="section-title">Career Objective</h2>
        <p>
          I am a passionate Software Developer specializing in building scalable, fault-tolerant, and secure backend systems using Node.js, Go, and modern architectural patterns. I leverage microservices, event-driven designs, and containerized deployments to deliver high-performance, resilient solutions that meet business and user demands. With a deep commitment to clean code, automation, and continuous improvement, I aim to contribute to innovative fintech products that prioritize reliability, efficiency, and technical excellence.
        </p>
      `;
  }
};
