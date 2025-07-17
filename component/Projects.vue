<script setup lang="ts">
import {ref, computed} from 'vue';

const projects = [
  {
    title: "Frontend Projects",
    items: [
      {
        title: "AIU Hostel Management System",
        description: "Frontend Developer",
        location: "Albukhary International University",
        image: "./images/AIU_Hostel_Management_System.png",
        descriptions: [
          "Developed and implemented a Hostel Management System, streamlining room allocation, maintenance requests, and billing, leading to a 50% reduction in manual administrative tasks.",
          "Optimized user interfaces for staff and residents, resulting in a 30% increase in user satisfaction and a 25% faster response time for issue resolution."
        ],
        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://www.aiuhms.pro/home"
          }
        ]
      },
      {
        title: "IESCO Scholarship Application",
        description: "Frontend Developer",
        location: "The International Educational Scientific and Cultural Organization",
        image: "./images/IESCO_Scholarship_Application.png",
        descriptions: [
          "Developed a Scholarship Registration System that streamlined application processes, reducing submission time by 40% and decreasing application processing by 30%.",
          "Designed and implemented user-friendly interfaces, resulting in a 25% increase in successful applicant registrations and improved the overall user experience for submitting documents."
        ],
        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://application.iesco.my"
          }
        ]
      },
      {
        title: "MyChild Website",
        description: "Frontend Developer",
        location: "Side Project",
        image: "./images/MyChild_Website.png",
        descriptions: [
          "Streamlined content management by enabling publishing of articles, sharing of stories, and showcasing organizational activities, improving visibility and engagement.",
          "Implemented multi-language support (Malay & English).",
          "Developed a seamless donation system with Stripe integration and manual payment options, increasing fundraising efficiency."
        ],
        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://sideprojectngo.github.io/FrontEnd/home"
          },
          {
            buttonText: "GitHub Repository",
            buttonLink: "https://github.com/SideProjectNGO/FrontEnd.git"
          }
        ]
      }
    ]
  },
  {
    title: "Backend Projects",
    items: [
      {
        title: "Al Awda Mosque Website",
        description: "Full Stack Developer",
        location: "Side Project",
        image: "./images/Masjid_Awda_Website.png.png",
        descriptions: [
          "Built the official website for Al Awda Mosque in Gaza, Rafah from scratch, focusing on responsive design, digital engagement, and community involvement.",
          "Integrated dynamic prayer times, multi-language support (Malay & English), and a video gallery with YouTube integration.",
          "Implemented an admin dashboard using Django for announcements, event management, and content updates with secure authentication.",
          "Developed a venue rental request system with filtering, PDF generation by booking status (Pending, In Progress, Completed, Rejected), and improved communication flow."
        ],
        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://masjid-albukhary.github.io/masjid-frontend/"
          },
          {
            buttonText: "Frontend GitHub",
            buttonLink: "https://github.com/masjid-albukhary/masjid-frontend.git"
          },
          {
            buttonText: "Backend GitHub",
            buttonLink: "https://github.com/masjid-albukhary/masjid-backend.git"
          }
        ]
      }
    ]
  },
  {
    title: "Figma Projects",
    items: [
      {
        title: "Education Foundation system",
        description: "Figma Project",
        location: "Side Project",
        image: "/images/EDUCATION%20FOUNADTION%20.png",
        descriptions: [
          "Here’s what the system includes",
          "Secure student dashboards (profile updates, financial records)",
          "Project and course browsing + qualification-based applications",
          "Admin controls to add/manage projects and accept students",
          "Clean, accessible interfaces for real student needs",
        ],
        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://www.figma.com/design/i0mDibQ5WTUyLj8yQ6LFfo/education-Foundation?node-id=0-1&t=pnTVP2WdnFcr6fWs-1"
          }
        ]
      },
    ],
  },
  {
    title: "WordPress Projects",
    items: [
      {
        title: "Masjid Albukhary KL Website",
        description: "WordPress Developer",
        location: "commerce dot com _ CDC",
        image: "/images/masjid_albukhary_kl_WP.png",
        descriptions: [
          "Developed the official website for Masjid Albukhary KL using WordPress, focusing on responsive design and community engagement.",
          "Built essential pages, including Home, About, Contact Us, Services, Facilities, and Gallery, with multi-language support.",
          "Integrated multimedia content through a Gallery page with YouTube video support."
        ],
        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://masjidalbukharykl.com/"
          }
        ]
      },
    ],
  },
];

const currentCategoryIndex = ref(0);
const currentProjectIndex = ref(0);
const isAnimating = ref(false);
const animationDirection = ref('right');

const changeCategory = (direction: number) => {
  if (isAnimating.value) return;

  isAnimating.value = true;
  animationDirection.value = direction > 0 ? 'right' : 'left';

  setTimeout(() => {
    if (direction > 0) {
      currentCategoryIndex.value = (currentCategoryIndex.value + 1) % projects.length;
    } else {
      currentCategoryIndex.value = (currentCategoryIndex.value - 1 + projects.length) % projects.length;
    }
    currentProjectIndex.value = 0;
    isAnimating.value = false;
  }, 300);
};

const changeProject = (direction: number) => {
  if (isAnimating.value) return;

  isAnimating.value = true;
  animationDirection.value = direction > 0 ? 'right' : 'left';

  setTimeout(() => {
    const currentProjects = projects[currentCategoryIndex.value].items;

    if (direction > 0) {
      if (currentProjectIndex.value === currentProjects.length - 1) {
        changeCategory(1);
      } else {
        currentProjectIndex.value++;
      }
    } else {
      if (currentProjectIndex.value === 0) {
        changeCategory(-1);
        currentProjectIndex.value = projects[currentCategoryIndex.value].items.length - 1;
      } else {
        currentProjectIndex.value--;
      }
    }
    isAnimating.value = false;
  }, 300);
};

const currentCategory = computed(() => projects[currentCategoryIndex.value]);

const currentProject = computed(() => currentCategory.value.items[currentProjectIndex.value]);

const hasMultipleProjects = computed(() => currentCategory.value.items.length > 1);

</script>

<template>
  <section class="project-section" id="projects">

    <div class="project-section-container">
      <div class="carousel-controls top-controls">
        <h2>{{ currentCategory.title }}</h2>
      </div>

      <div class="carousel-indicators">
        <div
            v-for="(category, index) in projects"
            :key="category.title"
            :class="['indicator', { active: index === currentCategoryIndex }]"
            @click="currentCategoryIndex = index; currentProjectIndex = 0;"
        ></div>
      </div>

      <div class="project-carousel">
        <div class="project-grid" :class="[animationDirection, { animating: isAnimating }]">
          <div class="text-content">
            <h3 class="project-title">{{ currentProject.title }}</h3>
            <p class="project-location">
              <UIcon
                  name="mdi-users"
                  class="icon"
              />
              {{ currentProject.location }}
              | {{ currentProject.description }}
            </p>
            <ul class="project-description">
              <li v-for="(desc, i) in currentProject.descriptions" :key="i">{{ desc }}</li>
            </ul>
            <div class="project-links">
              <a
                  v-for="(link, i) in currentProject.links"
                  :key="i"
                  :href="link.buttonLink"
                  target="_blank"
                  class="project-link"
              >
                {{ link.buttonText }}
              </a>
            </div>
          </div>
          <div class="image-content">
            <img
                :src="currentProject.image"
                :alt="currentProject.title"
                class="image"
                loading="lazy"
            />
          </div>
        </div>

        <div v-if="hasMultipleProjects" class="project-navigation">
          <button @click="changeProject(-1)" class="nav-button prev">
            <UIcon name="mdi-arrow-left-circle" class="icon"/>
          </button>
          <div class="project-indicators">
          <span
              v-for="(_, index) in currentCategory.items"
              :key="index"
              :class="['project-dot', { active: index === currentProjectIndex }]"
              @click="currentProjectIndex = index"
          ></span>
          </div>
          <button @click="changeProject(1)" class="nav-button next">
            <UIcon name="mdi-arrow-right-circle" class="icon"/>
          </button>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
section {
  margin: 5rem auto;
  padding: 2rem;
  display: block;
  height: 100%;
  position: relative;
  overflow: hidden;
}

section .project-section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.top-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.carousel-button {
  background-color: var(--font-hovor-color);
  color: var(--main-color);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.carousel-button:hover {
  background-color: var(--font-hovor-color);
  transform: scale(1.1);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: var(--font-hovor-color);
  transform: scale(1.2);
}

.indicator:hover {
  transform: scale(1.2);
}

section h2 {
  font-size: 2rem;
  color: var(--main-color);
  text-align: center;
  margin: 0;
  transition: color 0.3s ease;
}

.project-grid {
  width: 100%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;
  transition: all 0.3s ease;
  min-height: 350px;
}

.project-grid.animating.right {
  animation: slideOutLeft 0.3s ease forwards;
}

.project-grid:not(.animating).right {
  animation: slideInRight 0.3s ease forwards;
}

.project-grid.animating.left {
  animation: slideOutRight 0.3s ease forwards;
}

.project-grid:not(.animating).left {
  animation: slideInLeft 0.3s ease forwards;
}

@keyframes slideInRight {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutLeft {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-30px);
    opacity: 0;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(30px);
    opacity: 0;
  }
}

.project-title {
  font-size: 1.5rem;
  background: var(--font-hovor-color);
  color: var(--main-color);
  text-align: center;
  font-weight: normal;
  padding-bottom: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  margin: .5rem;
}

.project-location {
  color: var(--main-color);
  margin-bottom: .5rem;
  transition: all 0.3s ease;
}

.project-location .icon {
  color: var(--main-color);
  margin-right: .2rem;
  transition: all 0.3s ease;
}

.project-description {
  text-align: justify;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--main-color);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.project-description li {
  list-style: none;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;
}

.project-description li::before {
  content: "•";
  color: var(--main-color);
  font-weight: bold;
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-link {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background-color: var(--font-hovor-color);
  color: var(--main-color);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  transform-origin: center;
}

.project-link:hover {
  background-color: var(--font-hovor-color);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.image-content {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.image-content img {
  width: 100%;
  max-width: 500px;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
}

.image-content img:hover {
  transform: scale(1.05) rotateY(5deg) rotateX(5deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-navigation {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}

.nav-button {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin: 0.5rem;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--main-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center;
}

.nav-button:hover {
  color: var(--main-color);
  transform: scale(1.05);
}

.project-indicators {
  display: flex;
  gap: 0.5rem;
}

.project-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-dot:hover {
  transform: scale(1.2);
}

.project-dot.active {
  background-color: var(--main-color);
  transform: scale(1.2);
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

  .project-navigation {
    flex-direction: column;
    gap: 1rem;
  }

  .project-indicators {
    order: -1;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .project-section {
    margin: 2rem auto;
    padding: 1rem;
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

  section h2 {
    font-size: 1.5rem;
  }

  .carousel-button {
    width: 32px;
    height: 32px;
  }
}
</style>