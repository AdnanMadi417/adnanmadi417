<script setup lang="ts">

const wpProjects = [
  {
    title: "Masjid masjid Albukhary kl Website",
    description: "WordPress Developer",
    location: "commerce dot com _ CDC",
    image: "/images/masjid_albukhary_kl_WP.png",
    descriptions: [
      "Developed the official website for Masjid Albukhary KL using WordPress, focusing on responsive design and community engagement.",
      "Built essential pages, including Home, About, Contact Us, Services, Facilities, and Gallery, with multi-language support.",
      "Integrated multimedia content through a Gallery page with YouTube video support.",
    ],
    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://masjidalbukharykl.com/",
      }
    ]
  },
]
</script>

<template>
  <section class="project-section" id="wpProjects">
    <h2>Relevant WordPress Projects</h2>
    <div class="project-grid" v-for="(project, index) in wpProjects" :key="project.title">
      <template v-if="index % 2 === 0">
        <div class="text-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-location">
            <UIcon
                name="mdi-users"
                class="icon"
            />
            {{ project.location }}
            | {{ project.description }}
          </p>
          <ul class="project-description">
            <li v-for="(desc, i) in project.descriptions" :key="i">{{ desc }}</li>
          </ul>
          <div class="project-links">
            <a v-for="(link, i) in project.links" :key="i" :href="link.buttonLink" target="_blank" class="project-link">
              {{ link.buttonText }}
            </a>
          </div>
        </div>
        <div class="image-content">
          <img
              :src="project.image"
              :alt="project.title"
              class="image"
              loading="lazy"
          />
        </div>
      </template>
      <template v-else>
        <div class="image-content">
          <img
              :src="project.image"
              :alt="project.title"
              class="image"
              loading="lazy"
          />
        </div>
        <div class="text-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-location">

            <UIcon
                name="mdi-users"
                class="icon"
            />

            {{ project.location }}
            | {{ project.description }}
          </p>
          <ul class="project-description">
            <li v-for="(desc, i) in project.descriptions" :key="i">{{ desc }}</li>
          </ul>
          <div class="project-links">
            <a v-for="(link, i) in project.links" :key="i" :href="link.buttonLink" target="_blank" class="project-link">
              {{ link.buttonText }}
            </a>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 5rem auto;
  max-width: 1200px;
  padding: 0 1rem;
  display: block;
  height: 100%;
}

section h2 {
  font-size: 2rem;
  color: var(--main-color);
  margin-bottom: 2rem;
  text-align: center;
}

.project-grid {
  width: 100%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-title {
  text-align: start;
  font-size: 1.8rem;
  color: var(----secondary-color);
  font-weight: bold;
  border-bottom: 2px solid var(----secondary-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.project-location {
  color: var(--main-color);
  margin-bottom: .5rem;

  .icon {
    color: var(--main-color);
    margin-right: .2rem;
  }
}

.project-description {
  text-align: justify;
  font-size: 1rem;
  line-height: 1.6;
  color: var(----secondary-color);
  margin-bottom: 1.5rem;
}

.project-description li {
  margin-bottom: 0.5rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-link {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background-color: var(--main-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: var(----secondary-color);
}

.image-content {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-content img {
  width: 100%;
  max-width: 500px;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-content img:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .project-grid {
    gap: 2rem;
    width: 100%;
  }

  .image-content img {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
  }

  .project-section {
    margin: 3rem auto;
  }

  .image-content img {
    max-width: 100%;
  }

  .project-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .project-section {
    margin: 2rem auto;
    padding: 0 0.5rem;
  }

  .image-content img {
    max-width: 100%;
  }

  .project-description {
    font-size: 1rem;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .project-links {
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-link {
    width: 100%;
    text-align: center;
  }
}
</style>