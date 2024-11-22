<script setup lang="ts">
import {computed, ref} from "vue";

const projects = [
  {
    title: "AIU Hostel Management System",
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
    title: "IESCO Scholarship Application",
    description: "Freelancer",
    descriptions: [
      "Developed a Scholarship Registration System that streamlined application processes, reducing submission time by 40% and decreasing application processing by 30%.",
      "Designed and implemented user-friendly interfaces, resulting in a 25% increase in successful applicant registrations and improved the overall user experience for submitting documents.",
    ],
    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://application.iesco.my",
      },
      {
        buttonText: "Github Link ",
        buttonLink: "https://github.com/AdnanMadi417/iesco-frontend",
      }
    ]
  },
  {
    title: "File Management System",
    description: "Front End Developer",
    descriptions: [
      "Developed a File Management System dashboard enabling administrators to efficiently add, delete, update, and view files, improving file accessibility and reducing management time by 20%.",
      "Designed a responsive and user-friendly interface, enhancing usability and boosting task completion rates by 30%, while ensuring secure and organized file storage.",
    ],
    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://serious-iv71dtqjq-adnanmadi417s-projects.vercel.app/",
      },
      {
        buttonText: "Github Link ",
        buttonLink: "https://github.com/AdnanMadi417/file-managment-system.git",
      }
    ]
  },
  {
    title: "E-commerce",
    description: "Front End Developer",
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

const currentIndex = ref(0);
const itemsPerPage = 3;

const visibleProjects = computed(() =>
    projects.slice(currentIndex.value, currentIndex.value + itemsPerPage)
);

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage) % projects.length;
}

function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage + projects.length) % projects.length;
}
</script>

<template>
  <div class="projects-sec" id="projects-sec">
    <h1>Relevant Projects</h1>
    <div class="container">
      <div class="card" v-for="project in visibleProjects" :key="project.title">
        <div class="card-header">
        <span>
            <UIcon
                name="tabler-augmented-reality-2"
            />
          </span>
          <div class="box">
            <h2> {{ project.title }}</h2>
            <h2>{{ project.description }}</h2>
          </div>
        </div>
        <div class="card-content">
          <ul>
            <li v-for="(description, index) in project.descriptions" :key="index">{{ description }}</li>
          </ul>
        </div>
        <div class="card-footer">
          <a v-for="(link, linkIndex) in project.links" :key="linkIndex" :href="link.buttonLink" class="card-button"
             target="_blank">
            {{ link.buttonText }}
          </a>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button @click="prevPage">
        <UIcon
            name="uil-arrow"
        />
      </button>
      <button @click="nextPage">
        <UIcon
            name="uil-arrow"
        />
      </button>
    </div>

  </div>
</template>

<style scoped>
.projects-sec {
  width: 100%;
  padding: 5rem 1rem;
  background-color: var(--main-font-color);
}

.projects-sec h1 {
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 4rem;
  color: var(--main-color);
}


.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem 0;
}

.card {
  flex: 1 1 350px;
  display: block;
  max-width: 370px;
  background-color: var(--font-hovor-color);
  padding: 2rem 1rem;
  box-shadow: rgba(99, 99, 99, 0.5) 0 2px 8px 0;
}


.card-header {
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  color: var(--main-color);
}

.box{
  align-items: center;
  font-size: 1.2rem;
}

.card-header span{
  font-size: 3rem;
}

@media (max-width:1200px ) {
  .card-header {
    font-size: 1rem;
    padding: 0;
    margin:0 ;
  }

  .card-header span{
    font-size: 2rem;
  }

}

.card-content {
  height: 280px;
}

.card-content ul li {
  text-align: justify;
  font-size: 1rem;
  padding: 1rem 0.5rem 0;
}

.card-footer {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.card-footer a {
  padding: .5rem 1rem;
  background-color: var(--main-color);
  border-radius: 1rem;
  color: var(--main-font-color);
}

.card-footer a:hover {
  background-color: var(--main-hovor-color);
  transition: .3s ease-in-out;
}

@media (min-width: 768px) {
  .container {
    justify-content: space-between;
  }
}

@media (max-width: 1200px ) {

  .card-header {
    font-size: 1rem;
    padding: 0;
    margin: 0;
  }

  .card-header span {
    font-size: 2rem;
  }

}


.buttons {
  display: flex;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

.buttons button {
  padding: 0 1rem;
  margin: 0 2rem;
  font-size: 2rem;
  background-color: var(--main-color);
  color: var(--font-hovor-color);
  border-radius: 0 1rem;
  cursor: pointer;
}

button:hover {
  background-color: var(--main-hovor-color);
  color: var(--font-hovor-color);
  transition: .3s ease-in-out;
}
</style>