<template>
  <div class="projects-container">
    <h1 class="section-title">My Projects</h1>
    <div class="projects-grid">
      <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
          @mouseover="hoverIndex = index"
          @mouseleave="hoverIndex = null"
      >
        <div class="image-wrapper">
          <img
              :src="project.image"
              :alt="project.title"
              class="project-image"
              :class="{ 'animate-image': hoverIndex === index }"
          />
        </div>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <a :href="project.link" class="project-link" target="_blank" rel="noopener">View Project</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my work and skills.',
    image: '/images/web-dev.avif',
    link: 'https://example.com/portfolio'
  },
  {
    title: 'E-Commerce App',
    description: 'An online store built with Vue and Nuxt.',
    image: '/images/web-dev.avif',
    link: 'https://example.com/ecommerce'
  },
  {
    title: 'Blog Platform',
    description: 'A blogging platform with markdown support.',
    image: '/images/web-dev.avif',
    link: 'https://example.com/blog'
  }
];

const hoverIndex = ref(null);
</script>

<style scoped>
/* Container Styles */
.projects-container {
  padding: 40px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

/* Grid Styles */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Card Styles */
.project-card {
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Image Wrapper for Animation */
.image-wrapper {
  overflow: hidden;
  border-bottom: 1px solid #eaeaea;
}
.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
}
.project-card:hover .project-image {
  transform: scale(1.1);
  filter: brightness(1.2);
}

/* Animated Class (Optional, Added Dynamically) */
.animate-image {
  animation: float 2s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Title and Description */
.project-title {
  font-size: 1.5rem;
  margin: 12px 0;
  color: #007bff;
}
.project-description {
  font-size: 1rem;
  color: #666;
  padding: 0 12px;
  margin-bottom: 20px;
}

/* Link Styles */
.project-link {
  text-decoration: none;
  color: #fff;
  background: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.project-link:hover {
  background: #0056b3;
}
</style>
