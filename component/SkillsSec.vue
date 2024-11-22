<script setup lang="ts">

import {computed, ref} from "vue";

const skills = [
  {
    title: "HTML",
    experienceLevel: "Advanced",
    description: "Proficient in creating semantic and accessible HTML structures.",
    icon: "mdi:language-html5"
  },
  {
    title: "CSS",
    experienceLevel: "Advanced",
    description: "Experienced in styling web pages with modern CSS techniques.",
    icon: "mdi:language-css3"
  },
  {
    title: "SASS",
    experienceLevel: "Intermediate",
    description: "Proficient in using SASS for modular and maintainable stylesheets.",
    icon: "mdi:sass"
  },
  {
    title: "Bootstrap",
    experienceLevel: "Intermediate",
    description: "Experienced in utilizing Bootstrap for responsive design and layout.",
    icon: "simple-icons:bootstrap"
  },
  {
    title: "JavaScript",
    experienceLevel: "Advanced",
    description: "Experienced in JavaScript for dynamic functionality and interactivity.",
    icon: "mdi:language-javascript"
  },
  {
    title: "Java",
    experienceLevel: "Intermediate",
    description: "Knowledgeable in Java for building applications with object-oriented principles.",
    icon: "mdi:language-java"
  },
  {
    title: "Vue.js",
    experienceLevel: "Advanced",
    description: "Skilled in building interactive and efficient UIs with Vue.js.",
    icon: "mdi:vuejs"
  },
  {
    title: "Nuxt.js",
    experienceLevel: "Intermediate",
    description: "Experienced in using Nuxt.js for server-side rendering and optimized performance.",
    icon: "simple-icons:nuxtdotjs"
  },
  {
    title: "API",
    experienceLevel: "Intermediate",
    description: "Skilled in working with RESTful APIs, handling requests, and integrating third-party services.",
    icon: "mdi:api"
  },
];

const currentIndex = ref(0);
const itemsPerPage = 4;

const visibleSkills = computed(() =>
    skills.slice(currentIndex.value, currentIndex.value + itemsPerPage)
);

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage) % skills.length;
}

function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage + skills.length) % skills.length;
}

</script>

<template>
  <div class="skills-sec" id="skills-sec">
    <h1>TECHNICAL SKILLS</h1>
    <div class="container">

      <div class="card" v-for="skill in visibleSkills" :key="skill.title">
        <div class="card-header">
        <span>
            <UIcon
                :name="skill.icon"
            />
          </span>
          <div class="box">
            <h2> {{ skill.title }}</h2>
            <p>{{ skill.experienceLevel }}</p>
          </div>
        </div>
        <div class="card-content">
          <p>{{ skill.description }}</p>
        </div>
        <div class="card-footer">

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

.skills-sec {
  padding: 5rem 1rem;
  margin: auto;
  background-color: var(--font-hovor-color);
}

.skills-sec > h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--main-color);
}

.container {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: 0 1rem;
}

.card {
  flex: 1 1 250px;
  display: block;
  max-width: 250px;
  padding: 2rem 1rem;
  border: 2px solid var(--main-color);
  box-shadow: rgba(99, 99, 99, 0.5) 0 2px 8px 0;
  border-radius: 2rem 0;
  min-height: 15rem;
}

@media (max-width: 1200px) {
  .card {
    margin-bottom: 1rem;
  }
}

.card-header {
  display: flex;
  justify-content: space-around;
  color: var(--main-color);
}

.box {
  align-items: center;
  font-size: 1rem;
  margin: .5rem 0;
}

.card-header span {
  font-size: 3rem;
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

.card-content {
  height: 50px;
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