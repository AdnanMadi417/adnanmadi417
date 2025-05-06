<script setup lang="ts">

const projects = [
  {
    title: "Masjid Website",
    description: "Full Stack Developer",
    location: "Side Project",
    image: "./images/Masjid_Albukhary_KL_Website.png",
    descriptions: [
      "Built the official website for Masjid Albukhary KL from scratch, focusing on responsive design, digital engagement, and community service.",
      "Integrated dynamic prayer times, multi-language support (English & Malay), and video gallery with YouTube integration.",
      "Implemented admin dashboard using Django for announcements, event management, and content updates with secure authentication.",
      "Developed venue rental request system with filtering, PDF generation by booking status (Pending, In Progress, Completed, Rejected), and improved communication flow.",
    ],
    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://masjid-albukhary.github.io/masjid-frontend/",
      }
    ]
  },
  {
    title: "AIU Hostel Management System",
    description: "Frontend Developer",
    location: "Albukhary International University",
    image: "./images/AIU_Hostel_Management_System.png",
    descriptions: [
      "Developed and implemented a Hostel Management System, streamlining room allocation, maintenance requests, and billing, leading to a 50% reduction in manual administrative tasks.",
      "Optimized user interfaces for staff and residents, resulting in a 30% increase in user satisfaction and a 25% faster response time for issue resolution.",
    ],
    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://aiu-fyp.github.io/fyp-frontend2/home/",
      },
      // {
      //   buttonText: "Github Link",
      //   buttonLink: "https://example.com/education-journey",
      // }
    ]
  },
  {
    title: "IESCO Scholarship Application",
    description: "Frontend Developer",
    location: "The International Educational Scientific and Cultural Organization",
    image: "./images/IESCO_Scholarship_Application.png",
    descriptions: [
      "Developed a Scholarship Registration System that streamlined application processes, reducing submission time by 40% and decreasing application processing by 30%.",
      "Designed and implemented user-friendly interfaces, resulting in a 25% increase in successful applicant registrations and improved the overall user experience for submitting documents.",
    ],
    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://application.iesco.my",
      },
      // {
      //   buttonText: "Github Link",
      //   buttonLink: "https://github.com/AdnanMadi417/iesco-frontend",
      // }
    ]
  },
  {
    title: "MyChild Website",
    description: "Frontend Developer",
    image: "./images/MyChild_Website.png",
    location: "Side Project",
    descriptions: [
      "Streamlined content management by enabling publishing of articles, sharing of stories, and showcasing organizational activities, improving visibility and engagement. Implemented multi-language support (Malay & English).",
      "Developed a seamless donation system with Stripe integration and manual payment options, increasing fundraising efficiency."
    ],
    links: [
      {
        buttonText: "Live Demo",
        buttonLink: "https://sideprojectngo.github.io/FrontEnd/home",
      },
      // {
      //   buttonText: "Github Link",
      //   buttonLink: "https://github.com/AdnanMadi417/FrontEnd.git",
      // }
    ]
  },
]
</script>

<template>
  <section class="project-section">
    <h2>Relevant Projects</h2>
    <div class="project-grid" v-for="(project, index) in projects" :key="project.title">
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
  color: var(--main-hovor-color);
  font-weight: bold;
  border-bottom: 2px solid var(--main-hovor-color);
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
  color: var(--main-hovor-color);
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
  background-color: var(--main-hovor-color);
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