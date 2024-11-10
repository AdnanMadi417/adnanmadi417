<script setup lang="ts">

const skills = [
  {
    title: "Front-End Development",
    experienceLevel: "Advanced",
    description: "Skilled in building user-friendly and responsive web interfaces.",
    icon: "mdi:web"
  },
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
  }
];

</script>

<template>
  <div class="skills-sec">
    <h1>TECHNICAL SKILLS</h1>
    <div class="container">
      <div class="card" v-for="skill in skills" :key="skill.title">
        <div class="card-body">
          <span>
          <UIcon
              class="icon"
              :name="skill.icon"
          />
        </span>
          <h2>{{ skill.title }}</h2>
          <h3>{{ skill.experienceLevel }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.skills-sec > h1 {
  text-align: center;
  margin: 2rem 0;
  font-size: 3rem;
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

.container .card {
  flex: 1 1 250px;
  width: 100%;
  max-width: 250px;
  padding: 1.5rem;
  margin: 1rem 0;
  transition: trasform .3s;
  background-color: var(--main-color);
  color: var(--main-font-color);
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
}

.container .card .icon {
  font-size: 3rem;
  margin: 0 auto;
  color: var(--main-font-color);
}

.card h2 {
  font-size: 1.2rem;
  margin: 1rem 0;
}
</style>