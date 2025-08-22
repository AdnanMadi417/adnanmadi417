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
.certificate {
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.certificate h1 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  margin-bottom: 3rem;
  color: var(--secondary-color);
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: -0.02em;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(1rem, 2vw, 2rem);
}

.card {
  background: var(--body-bg-color);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  flex: 1 1 250px;
  max-width: 280px;
  min-width: 220px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.card h2 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-color);
}

.card h4 {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--font-light-color);
  margin-bottom: 1rem;
}

.card p {
  font-size: 0.95rem;
  color: var(--secondary-color);
  line-height: 1.5;
}

.certificate-control-buttons {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;
}

.certificate-control-buttons button {
  background: var(--body-bg-color);
  border: 1px solid #d2d2d7;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--secondary-color);
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
}

.certificate-control-buttons button:hover {
  background: var(--section-bg-color);
  transform: translateY(-2px);
}

.certificate-control-buttons button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.6s ease forwards;
}

</style>