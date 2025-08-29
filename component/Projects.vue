<script setup lang="ts">
import {ref, computed} from 'vue';

const projects = [
  {
    title: "Full Stack ",
    items: [
      {
        title: "Investment Management System",
        description: "Full Stack Developer",
        location: "COMMERCE DOT COM",
        image: "./images/Investment_Management_System.png",
        descriptions: [
          "Developed and implemented an Investment Management System to track member investments, share transactions, and registration payments, reducing manual administrative tasks by 60%." ,
          "Designed interactive dashboards displaying total transactions, account balances, share allocations registration payments, member statuses (active/inactive), expected profits, and investment completion." ,
          "Created member-specific sub-dashboards for personalized financial tracking, showing account balances, profit earned, total deposits, and total withdrawals." ,
          "Implemented real-time transaction tracking with automated notifications to enhance communication and operational efficiency." ,
          "Enabled PDF invoice generation for comprehensive investment summaries." ,
          "Improved data accuracy, transparency, and accessibility, streamlining investment management for administrators and members."
        ],
        links: [
          {
            buttonText: "Live Demo",
            buttonLink: ""
          }
        ]
      },
    ]
  },
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

      <div class="top-controls">
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
            <p class="project-location">{{ currentProject.location }} | {{ currentProject.description }}</p>
            <ul class="project-description">
              <li v-for="(desc, i) in currentProject.descriptions" :key="i">{{ desc }}</li>
            </ul>
            <div class="project-links">
              <template v-for="(link, i) in currentProject.links" :key="i" class="buttons">
                <a
                    :href="link.buttonLink"
                    target="_blank"
                    class="project-link-primary"
                >
                  {{ link.buttonText }}
                </a>
              </template>
            </div>
          </div>
          <div class="image-content">
            <img :src="currentProject.image" :alt="currentProject.title" class="image" loading="lazy"/>
          </div>
        </div>

        <div v-if="hasMultipleProjects" class="project-navigation">

          <span @click="changeProject(-1)" class="nav-button prev">
            <UIcon name="mdi-chevron-left" class="nav-icon"/>
          </span>

          <div class="project-indicators">
            <span
                v-for="(_, index) in currentCategory.items"
                :key="index"
                :class="['project-dot', { active: index === currentProjectIndex }]"
                @click="currentProjectIndex = index"
            ></span>
          </div>

          <span @click="changeProject(1)" class="nav-button next">
          <UIcon name="mdi-chevron-right" class="nav-icon"/>
          </span>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.project-section {
  padding: 6rem 2rem;
  background-color: var(--body-bg-color);
  display: flex;
  justify-content: center;
}

.project-section-container {
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.project-section h2 {
  font-weight: 400;
  font-size: 2.4rem;
  text-align: center;
  color: var(--main-color);
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.project-title {
  font-size: 1.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--main-color);
}

.project-location {
  font-size: 1rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  align-items: center;
  transition: all 0.3s ease;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-description {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--main-color);
}

.project-description li::before {
  content: "•";
  color: var(--accent-color);
  font-weight: bold;
  margin-right: 0.5rem;
}

.project-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  background-color: var(--card-bg-color);
  padding: 10px;
  border-radius: 999px;
  width: fit-content;
}

.project-link-primary {
  color: var(--font-color);
  background-color: transparent;
  text-decoration: none;
  padding: 0.65rem 1.3rem;
  font-weight: 500;
  border-radius: 999px;
  transition: all 0.35s ease;

}

.project-link-primary:hover {
  background-color: var(--secondary-color);
  color: var(--body-bg-color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.project-link-primary {
  color: var(--font-color);
  text-decoration: none;
  padding: 0.65rem 1.3rem;
  font-weight: 500;
  border-radius: 999px;
  transition: all 0.3s ease;
}

.project-link-primary:hover {
  background-color: var(--secondary-color);
  color: var(--body-bg-color);
}

.project-link-primary:first-child {
  background-color: var(--secondary-color);
  color: var(--body-bg-color);
}

.image-content img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.image-content img:hover {
  transform: scale(1.04) translateY(-3px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
}

.indicator {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #d1d1d6;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: var(--accent-color);
  transform: scale(1.4);
}

.nav-button {
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #d1d1d6;
  color: var(--font-color);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  transition: all .2s ease-in-out;
}

.nav-button:hover {
  background-color: var(--card-bg-color);
}

.nav-icon {
  width: 20px;
  height: 20px;
  stroke: var(--main-color);
  transition: stroke 0.3s ease;
}

.nav-button:hover .nav-icon {
  stroke: var(--accent-color);
}

@media (max-width: 768px) {
  .project-section {
    padding: 4rem 1rem;
  }

  .project-title {
    font-size: 1.6rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

</style>