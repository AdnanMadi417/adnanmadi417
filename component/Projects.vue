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
        description: "Backend Developer",
        location: "Side Project",
        image: "./images/masjid_website.png",
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
        image: "/images/education-foundation.png",
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
  <section class="projects-section" id="projects">
    <div class="header-container">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">A selection of my recent work in frontend, backend, and full-stack development.</p>
    </div>

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
      <div
          v-for="(project, index) in currentCategory.items"
          :key="index"
          class="project-card"
      >
        <div class="project-image-container">
          <img :src="project.image" :alt="project.title" class="project-image"/>
          <div class="image-overlay"></div>
          <div class="featured-badge">Featured</div>
        </div>

        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-meta">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span class="location">{{ project.location }}</span>
              <span class="separator">•</span>
              <span class="role">{{ project.description }}</span>
            </div>
          </div>

          <ul class="project-descriptions">
            <li v-for="(desc, i) in project.descriptions" :key="i">
              <svg class="bullet-icon" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span>{{ desc }}</span>
            </li>
          </ul>

          <div class="project-links">
            <a
                v-for="(link, i) in project.links"
                :key="i"
                :href="link.buttonLink"
                target="_blank"
                class="project-link"
            >
              <span>{{ link.buttonText }}</span>
              <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: auto;
  background-color: var(--section-bg-color);
}

.header-container {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInUp 0.6s ease-out;
}

.section-title {
  font-size: var(--font-size-h1);
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--font-color);
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--font-light-color);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.segmented-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  overflow-x: auto;
  padding: 0.5rem 0;
}

.tabs-wrapper {
  position: relative;
  display: inline-flex;
  gap: 0.5rem;
  background-color: var(--card-bg-color);
  padding: 0.5rem;
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.tab {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--font-size-base);
  color: var(--font-light-color);
  z-index: 2;
  border-radius: 999px;
  text-align: center;
  transition: var(--transition);
  white-space: nowrap;
  position: relative;
}

.tab:hover {
  color: var(--font-color);
}

.tab.active {
  color: white;
}

.indicator {
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  background-color: var(--accent-color);
  border-radius: 999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.projects-grid {
  display: grid;
  gap: 2.5rem;
  animation: fadeIn 0.6s ease-out 0.2s both;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  background-color: var(--body-bg-color);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-color), var(--accent-hover-color));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.project-image-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--card-bg-color);
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
  transition: opacity 0.3s ease;
}


.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--accent-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(46, 78, 67, 0.3);
  transform: translateY(-8px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin: 0;
  color: var(--font-color);
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-sm);
  color: var(--font-light-color);
  flex-wrap: wrap;
}

.icon {
  width: 16px;
  height: 16px;
  color: var(--accent-color);
  flex-shrink: 0;
}

.location {
  font-weight: 600;
  color: var(--font-color);
}

.separator {
  opacity: 0.5;
}

.role {
  color: var(--font-light-color);
}

.project-descriptions {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-descriptions li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--secondary-color);
  line-height: 1.6;
  font-size: var(--font-size-base);
  transition: color 0.2s ease;
}

.project-card:hover .project-descriptions li {
  color: var(--font-color);
}

.bullet-icon {
  width: 6px;
  height: 6px;
  min-width: 6px;
  margin-top: 0.5rem;
  color: var(--accent-color);
}

.project-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  background-color: var(--accent-color);
  color: white;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: var(--transition);
  box-shadow: 0 2px 8px rgba(46, 78, 67, 0.2);
  position: relative;
  overflow: hidden;
}

.project-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--accent-hover-color);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.project-link:hover::before {
  transform: translateY(0);
}

.project-link span,
.project-link .link-icon {
  position: relative;
  z-index: 1;
}

.project-link:active {
  transform: translateY(0);
}

.link-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.project-link:hover .link-icon {
  transform: translate(2px, -2px);
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .project-card {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-image-container {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: var(--font-size-xl);
  }

  .section-subtitle {
    font-size: var(--font-size-md);
  }

  .header-container {
    margin-bottom: 2rem;
  }

  .segmented-tabs {
    margin-bottom: 2rem;
  }

  .tabs-wrapper {
    gap: 0.25rem;
    padding: 0.4rem;
  }

  .tab {
    padding: 0.6rem 1rem;
    font-size: var(--font-size-sm);
  }

  .projects-grid {
    gap: 2rem;
  }

  .project-card {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .project-title {
    font-size: var(--font-size-lg);
  }

  .project-links {
    gap: 0.5rem;
  }

  .project-link {
    padding: 0.6rem 1.1rem;
  }
}
</style>