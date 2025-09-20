<script setup lang="ts">
import {ref, computed, nextTick, onMounted} from 'vue';

const projects = [
  {
    title: "Full Stack",
    items: [
      {
        title: "Investment Management System",
        description: "Full Stack Developer",
        location: "COMMERCE DOT COM",
        image: "./images/Investment_Management_System.png",
        descriptions: [
          "Developed and implemented an Investment Management System to track member investments, share transactions, and registration payments, reducing manual administrative tasks by 60%.",
          "Designed interactive dashboards displaying total transactions, account balances, share allocations, registration payments, member statuses, expected profits, and investment completion.",
          "Created member-specific sub-dashboards for personalized financial tracking.",
        ],
        links: [{buttonText: "Live Demo", buttonLink: ""}]
      }
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
          "Streamlined room allocation, maintenance requests, and billing, reducing manual tasks by 50%.",
          "Optimized user interfaces for staff and residents, increasing satisfaction by 30%."
        ],
        links: [{buttonText: "Live Demo", buttonLink: "https://www.aiuhms.pro/home"}]
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
          "Built official website for Al Awda Mosque focusing on responsive design and community engagement.",
          "Integrated dynamic prayer times, multi-language support, and video gallery."
        ],
        links: [
          {buttonText: "Live Demo", buttonLink: "https://masjid-albukhary.github.io/masjid-frontend/"},
          {buttonText: "Frontend GitHub", buttonLink: "https://github.com/masjid-albukhary/masjid-frontend.git"},
          {buttonText: "Backend GitHub", buttonLink: "https://github.com/masjid-albukhary/masjid-backend.git"}
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
        descriptions: ["Secure student dashboards, project/course browsing, admin controls, clean interfaces."],
        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://www.figma.com/design/i0mDibQ5WTUyLj8yQ6LFfo/education-Foundation?node-id=0-1&t=pnTVP2WdnFcr6fWs-1"
          }
        ]
      }
    ]
  }
];

const currentCategoryIndex = ref(0);
const currentCategory = computed(() => projects[currentCategoryIndex.value]);
const indicatorStyle = ref({left: '0px', width: '0px'});

function selectCategory(index: number) {
  currentCategoryIndex.value = index;
  nextTick(updateIndicator);
}

function updateIndicator() {
  const tabs = document.querySelectorAll('.tab');
  const activeTab = tabs[currentCategoryIndex.value] as HTMLElement;
  if (activeTab) {
    indicatorStyle.value = {left: activeTab.offsetLeft + 'px', width: activeTab.offsetWidth + 'px'};
  }
}

onMounted(() => {
  updateIndicator();
  window.addEventListener('resize', updateIndicator);
});
</script>

<template>
  <section class="projects-section">
    <h2 class="section-title">Featured Projects</h2>
    <p class="section-subtitle">A selection of my recent work in frontend, backend, and full-stack development.</p>
    <div class="segmented-tabs">
      <div class="tabs-wrapper">
        <div
            v-for="(category, index) in projects"
            :key="index"
            class="tab"
            :class="{ active: index === currentCategoryIndex }"
            @click="selectCategory(index)"
        >
          {{ category.title }}
        </div>
        <div class="indicator" :style="indicatorStyle"></div>
      </div>
    </div>
    <div class="projects-grid">
      <div v-for="(project, index) in currentCategory.items" :key="index" class="project-card">
        <img :src="project.image" :alt="project.title" class="project-image"/>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-location">{{ project.location }} | {{ project.description }}</p>
        <ul class="project-descriptions">
          <li v-for="(desc, i) in project.descriptions" :key="i">{{ desc }}</li>
        </ul>
        <div class="project-links">
          <a v-for="(link, i) in project.links" :key="i" :href="link.buttonLink" target="_blank" class="project-link">
            {{ link.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: auto;
}

.section-title {
  text-align: center;
  font-size: var(--font-size-h1);
  font-weight: 700;
  margin: 0;
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--font-light-color);
  text-align: center;
  margin-top: -.75rem;
  margin-bottom: 2rem;
}

.segmented-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  overflow-x: auto;
}

.tabs-wrapper {
  position: relative;
  display: flex;
  gap: 1rem;
  background-color: var(--card-bg-color);
  padding: 0.5rem;
  border-radius: 999px;
  min-width: max-content;
}

.tab {
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  color: var(--font-light-color);
  z-index: 1;
  border-radius: 999px;
  text-align: center;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.tab.active {
  color: white;
  font-weight: 500;
  background-color: var(--accent-color);
}

.indicator {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 999px;
  transition: left 0.3s ease, width 0.3s ease;
  z-index: 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--card-bg-color);
  border-radius: 15px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-location {
  font-size: 0.95rem;
  color: var(--font-light-color);
  margin-bottom: 1rem;
}

.project-descriptions {
  list-style: disc;
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.project-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-link {
  padding: 0.5rem 1rem;
  background-color: var(--accent-color);
  color: white;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  background-color: var(--accent-hover-color);
}

@media (max-width: 768px) {
  .projects-section {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: var(--font-size-xl);
  }
  .section-subtitle {
    font-size: var(--font-size-md);
    margin-top: -0.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }
}
</style>
