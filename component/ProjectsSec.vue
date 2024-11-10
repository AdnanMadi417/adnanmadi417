<script setup lang="ts">
const projects = [
  {
    title: " AIU | Hostel Management System",
    description: "Final Year Project",
    descriptions: [
      "Developed and implemented a Hostel Management System, streamlining room allocation, maintenance requests, and billing, leading to a 50% reduction in manual administrative tasks.",
      "Optimized user interfaces for staff and residents, resulting in a 30% increase in user satisfaction and a 25% faster response time for issue resolution.",
    ],
    links: [
      {
        buttonText: "Learn more",
        buttonLink: "https://github.com/AdnanMadi417/aiu-hostel-frontend",
      },
      {
        buttonText: "Github Link ",
        buttonLink: "https://example.com/education-journey",
      }
    ]
  },
  {
    title: "IESCO | Web Developer",
    description: "Freelancer",
    descriptions: [
      "Developed a Scholarship Registration System that streamlined application processes, reducing submission time by 40% and decreasing application processing by 30%.",
      "Designed and implemented user-friendly interfaces, resulting in a 25% increase in successful applicant registrations and improved the overall user experience for submitting documents.",
    ],
    links: [
      {
        buttonText: "Apply Now ",
        buttonLink: "https://application.iesco.my",
      },
      {
        buttonText: "Github Link ",
        buttonLink: "https://github.com/AdnanMadi417/iesco-frontend",
      }
    ]
  },
  {
    title: "E-commerce | Front End Developer",
    description: "Experience",
    descriptions: [
      " Developed responsive layouts with modern CSS frameworks, enhancing accessibility and performance across devices, and optimizing the shopping experience.",
      "Designed and implemented user-friendly interfaces,and improved the overall user experience for buying documents.",
    ],
    links: [
      {
        buttonText: "Github Link ",
        buttonLink: "https://github.com/AdnanMadi417/Shop-s-front-end-website-",
      }
    ]
  },
]
</script>

<template>
  <div class="education-sec">
    <h2>Relevant Projects</h2>
    <div class="container">
      <div class="card" v-for="project in projects" :key="project.title">
        <h2>
          <span>
            <UIcon
                name="tabler-augmented-reality-2"
            />
          </span>
          {{ project.title }}
        </h2>
        <h3>{{ project.description }}</h3>
        <ul>
          <li v-for="(description, index) in project.descriptions" :key="index">{{ description }}</li>
        </ul>
        <div class="links">
          <a v-for="(link, linkIndex) in project.links" :key="linkIndex" :href="link.buttonLink" class="card-button"
             target="_blank">
            {{ link.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-sec {
  width: 100%;
  padding: 2rem 1rem;
  background-color: #f9f9f9;
}

.education-sec h2 {
  text-align: center;
  font-size: 2.5rem;
  text-transform: capitalize;
  font-weight: bold;
  margin: 2rem 0;
  color: var(--main-color);
}

@media (max-width: 1200px) {
  .education-sec h2 {
    font-size: 2rem;
    margin: 3rem 0;
  }

}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  flex: 1 1 350px;
  max-width: 350px;
  text-align: center;
  background-color: var(--main-font-color);
  padding: 2rem 1rem;
  box-shadow: rgba(99, 99, 99, 0.5) 0 2px 8px 0;
}

.card h2 {
  font-size: 1.4rem;
  text-align: start;
  margin: .5rem 0;
  font-weight: bold;
  color: var(--main-color);
}

.card h3 {
  font-size: 1.8rem;
  text-align: center;
  margin-top: -1rem;
  color: var(--main-color);
}

.card ul li {
  text-align: justify;
  font-size: 1rem;
  padding: 1rem 0.5rem 0;
}

.links {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.links a {
  padding: .5rem 1rem;
  background-color: var(--main-color);
  border-radius: 1rem;
  color: var(--main-font-color);
}

.links a:hover {
  background-color: var(--main-hovor-color);
  transition: .3s ease-in-out;
}

@media (min-width: 768px) {
  .container {
    justify-content: space-between;
  }
}
</style>