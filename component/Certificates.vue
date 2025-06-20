<script setup lang="ts">
import {computed, ref} from 'vue';

const certificates = [
  {
    icon: "mdi:web",
    title: "Front-End Development",
    date: "2024",
    description: "An introductory course on front-end development concepts, focusing on building responsive and interactive web applications.",
    from: "Corsesara"
  },
  {
    icon: "mdi:language-javascript",
    title: "JavaScript Programming",
    date: "2023",
    description: "An in-depth course on JavaScript, covering syntax, core concepts, and best practices for creating dynamic web pages.",
    from: "Corsesara"
  },
  {
    icon: "mdi:language-html5",
    title: "HTML Programming",
    date: "2023",
    description: "This course covers HTML fundamentals, enabling students to structure web content effectively and create accessible web pages.",
    from: "Corsesara"
  },
  {
    icon: "mdi:code-braces",
    title: "Programming Fundamentals",
    date: "2022",
    description: "An introductory course to core programming concepts, algorithms, and problem-solving skills applicable across various languages.",
    from: "Corsesara"
  },
];

const currentIndex = ref(0);
const itemsPerPage = 4;

const visibleCertificates = computed(() =>
    certificates.slice(currentIndex.value, currentIndex.value + itemsPerPage)
);

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage) % certificates.length;
}

function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage + certificates.length) % certificates.length;
}
</script>

<template>
  <div class="certificate" id="certificate">
    <h1>Certifications</h1>
    <div class="container">
      <div class="card fade-in" v-for="certificate in visibleCertificates" :key="certificate.title">
        <h2>
          <span>
            <UIcon :name="certificate.icon"/>
          </span>
          {{ certificate.title }}
        </h2>
        <h4>{{ certificate.date }}</h4>
        <p>{{ certificate.description }}</p>
      </div>
    </div>
    <div class="certificate-control-buttons">
      <button @click="prevPage">
        <UIcon
            name="mdi-arrow-left-circle"
        />
      </button>
      <button @click="nextPage">
        <UIcon
            name="mdi-arrow-right-circle"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.certificate {
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.certificate h1 {
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: bold;
  margin-bottom: 4rem;
  color: var(--main-color);
  animation: fadeIn 1s ease-out forwards;
}

.container {
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem 2rem;
}

.container .card {
  flex: 1 1 250px;
  max-width: 250px;
  padding: 1rem;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  border-radius: 1rem 0;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards, slideInFromLeft 0.5s ease-out forwards;
}

.card:nth-child(even) {
  animation: fadeIn 1s ease-out forwards, slideInFromRight 0.5s ease-out forwards;
}

.card h2 {
  font-size: 1rem;
  margin: 1rem 0;
}

.card p {
  text-align: justify;
  margin: 0.5rem 0;
}

.certificate-control-buttons {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.certificate-control-buttons button {
  padding: 0 1rem;
  margin: 0 2rem;
  font-size: 2rem;
  color: var(--main-color);
  border-radius: .5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
}

.certificate-control-buttons button:hover {
  transform: scale(1.1);
  color: var(--main-color);
}

</style>
