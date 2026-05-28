<script setup lang="ts">
import {ref, computed} from 'vue';

const projects = [
  {
    title: "Frontend Projects",
    items: [
      {
        title: "IKA EDU Platform",
        description: "Product Manager & Frontend Developer",
        location: "Freelance Project",
        image: "/images/IKA_EDU.png",

        descriptions: [
          "Digitized a fully manual training academy from the ground up — IKA had no website, no digital system, and managed all programs, certificates, and client communication manually before this project.",
          "Developed a public training catalog with dynamic filtering across 20+ specialized fields, replacing phone and email inquiries and giving IKA their first-ever online presence, improving program accessibility by 60%.",
          "Built a multi-role management dashboard (Admin & Account Manager) to handle programs, trainers, locations, and registrations, reducing manual administrative workload by 50%.",
          "Implemented a digital certificate issuance and real-time verification system, eliminating paper-based management and reducing manual verification effort by 70%.",
          "Developed an automated PDF quotation generator, replacing manually prepared proposals and reducing proposal preparation time by 80%.",
          "Designed a contracted programs module for custom organizational training requests, streamlining client onboarding from manual communication to a structured digital workflow.",
          "Integrated secure cloud file storage via DigitalOcean Spaces for certificates, program materials, and media, eliminating local file management overhead.",
          "Delivered a production-grade platform using React, TypeScript, Tailwind CSS, and Framer Motion, with end-to-end test coverage via Playwright, deployed on Vercel.",
        ],

        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://ika-edu.com/"
          }
        ]
      },
      {
        title: "IESCO Scholarship Application",
        description: "Frontend Developer",
        location: "International Educational Scientific and Cultural Organization (IESCO)",
        image: "/images/IESCO_Scholarship_Application.png",

        descriptions: [
          "Designed and developed responsive scholarship application interfaces to streamline registration workflows and improve accessibility across devices.",
          "Optimized application submission processes, reducing user completion time by approximately 40% and decreasing processing workload by 30%.",
          "Implemented intuitive form layouts and validation-aware UI interactions that increased successful applicant submissions by 25%."
        ],

        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://application.iesco.my"
          }
        ]
      },
      {
        title: "AIU Hostel Management System",
        description: "Frontend Developer",
        location: "Albukhary International University",
        image: "/images/AIU_Hostel_Management_System.png",

        descriptions: [
          "Developed responsive dashboard and management interfaces supporting room allocation, billing workflow, and maintenance request handling.",
          "Reduced manual administrative operations by 50% through interface automation and optimized data presentation.",
          "Improved resident and staff system usability, contributing to a 30% increase in operational satisfaction metrics."
        ],

        links: [
          {
            buttonText: "Live Demo",
            buttonLink: "https://www.aiuhms.pro/home"
          }
        ]
      }
    ]
  },
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

const currentProjectIndex = ref(0);

const currentProject = computed(() => {
  const category = currentCategory.value;

  if (!category?.items?.length) return null;

  return category.items[currentProjectIndex.value] ?? category.items[0];
});

function nextProject() {
  if (!currentCategory.value?.items) return;

  currentProjectIndex.value =
      (currentProjectIndex.value + 1) %
      currentCategory.value.items.length;
}

function previousProject() {
  if (!currentCategory.value?.items) return;

  currentProjectIndex.value =
      (currentProjectIndex.value - 1 +
          currentCategory.value.items.length) %
      currentCategory.value.items.length;
}

const currentCategoryIndex = ref(0);
const currentCategory = computed(() => projects[currentCategoryIndex.value]);

function selectCategory(index: number) {
  currentCategoryIndex.value = index;
  currentProjectIndex.value = 0;
}
</script>

<template>
  <section class="projects-section" id="projects">

    <div class="header-container" data-aos="fade-up">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">A selection of work I've built and shipped</p>
    </div>

    <div class="segmented-tabs" data-aos="fade-up" data-aos-delay="100">
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
      </div>
    </div>

    <div class="modern-card" v-if="currentProject" data-aos="fade-up" data-aos-delay="200">

      <div class="project-media">
        <img :src="currentProject.image" :alt="currentProject.title" class="project-media-image"/>
        <div class="media-overlay"></div>
        <div class="featured-badge">
          <span class="badge-dot"></span>
          Featured Project
        </div>
      </div>

      <div class="project-body">

        <div class="project-header">
          <h3 class="project-title">{{ currentProject.title }}</h3>
          <div class="project-meta">
            <span>{{ currentProject.location }}</span>
            <span class="separator">•</span>
            <span>{{ currentProject.description }}</span>
          </div>
        </div>

        <ul class="project-description-list">
          <li v-for="(desc, i) in currentProject.descriptions" :key="i">{{ desc }}</li>
        </ul>

        <div class="project-footer">
          <div class="project-links">
            <template v-for="(link, i) in currentProject.links" :key="i">
              <a v-if="link.buttonLink" :href="link.buttonLink" target="_blank" class="project-link">
                {{ link.buttonText }}
              </a>
            </template>
          </div>

          <div class="project-nav">
            <button @click="previousProject" :disabled="currentCategory.items.length <= 1">
              <UIcon name="mdi:arrow-left" class="icon"/>
              Previous
            </button>
            <span class="project-count">{{ currentProjectIndex + 1 }} / {{ currentCategory.items.length }}</span>
            <button @click="nextProject" :disabled="currentCategory.items.length <= 1">
              Next
              <UIcon name="mdi:arrow-right" class="icon"/>
            </button>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>
.projects-section {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: auto;
}

/* ── Header ── */
.header-container {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: var(--font-size-h1);
  font-weight: 700;
  color: var(--font-color);
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem;
}

.section-subtitle {
  font-size: var(--font-size-base);
  color: var(--font-light-color);
}

/* ── Category tabs ── */
.segmented-tabs {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding-bottom: 0.25rem;
  margin-bottom: 2.5rem;
}

.tabs-wrapper {
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid var(--card-bg-color);
  padding-bottom: 0;
}

.tab {
  position: relative;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--font-size-base);
  color: var(--font-light-color);
  transition: color 0.25s ease;
  white-space: nowrap;
}

.tab:hover { color: var(--accent-color); }
.tab.active { color: var(--accent-color); }

.tab::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.tab.active::after { transform: scaleX(1); }

/* ── Project card ── */
.modern-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  height: 460px;
  background: var(--body-bg-color);
  border: 1px solid var(--card-bg-color);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}

.project-media {
  position: relative;
  overflow: hidden;
}

.project-media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) brightness(0.92);
  transform: scale(1.04);
  transition: all 0.8s cubic-bezier(.25,.8,.25,1);
}

.project-media:hover .project-media-image {
  transform: scale(1);
  filter: saturate(1) brightness(1);
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%);
}

.featured-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background: rgba(0,0,0,0.55);
  color: white;
  border-radius: 999px;
  backdrop-filter: blur(8px);
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-color);
  animation: pulse 2.5s infinite;
}

@keyframes pulse {
  50% { opacity: 0.4; transform: scale(0.7); }
}

/* ── Project body ── */
.project-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem 2rem 2rem 0;
  height: 100%;
  overflow: hidden;
}

.project-title {
  font-size: clamp(1.3rem, 2vw, 1.7rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--font-color);
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--font-light-color);
}

.separator { opacity: 0.4; }

.project-description-list {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding-left: 1rem;
  overflow-y: auto;
  max-height: 220px;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: var(--accent-color) transparent;
}

.project-description-list li {
  font-size: var(--font-size-sm);
  line-height: 1.65;
  color: var(--secondary-color);
}

/* ── Footer row: link + nav ── */
.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.2rem;
  border-top: 1px solid var(--card-bg-color);
  margin-top: auto;
}

.project-link {
  display: inline-block;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  background: var(--accent-color);
  color: white;
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--accent-hover-color);
  transform: translateY(-2px);
}

.project-nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.project-count {
  font-size: var(--font-size-sm);
  color: var(--font-light-color);
  min-width: 36px;
  text-align: center;
}

.project-nav button {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem 0.8rem;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  border-radius: 999px;
  background: transparent;
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.25s ease;
}

.project-nav button:hover:not(:disabled) {
  background: var(--accent-color);
  color: white;
}

.project-nav button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .modern-card {
    grid-template-columns: 1fr;
    height: auto;
  }
  .project-media {
    min-height: 220px;
  }
  .project-body {
    padding: 1.5rem;
    height: auto;
  }
}

@media (max-width: 600px) {
  .projects-section { padding: 3rem 1rem; }
  .project-description-list { max-height: 180px; }
  .project-footer { flex-direction: column; align-items: flex-start; }
}
</style>