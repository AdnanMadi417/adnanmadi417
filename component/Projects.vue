<script setup lang="ts">
import {ref, computed} from 'vue';

const projects = [
  {
    title: "Frontend Projects",
    items: [
      {
        title: "IKA EDU Platform",
        description: "Frontend Developer & Product Manager",
        location: "Freelance Project",
        image: "/images/IKA_EDU.png",

        descriptions: [
          "Developed and implemented an educational platform using Next.js and React, improving program accessibility and user engagement by 40%.",
          "Designed and built training program interfaces with filtering and detailed course views, reducing user search time by 35%.",
          "Created personal and business registration systems, increasing successful registrations by 30%.",
          "Implemented a certification verification feature, improving trust and reducing manual verification effort by 50%."
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
    </div>

    <div class="tab-content">

      <div class="tab-pane info-card space-y-4" data-aos="fade-right">

        <div class="info-img-container">
          <div class="info-img-main-container"></div>

          <img
              src="/images/adnan%20photo%203%20.jpg"
              alt="Developer"
              class="profile-avatar"
          />
        </div>

        <h4 class="info-title">Adnan Madi</h4>

        <div class="info-list">
          <p class="info-item flex items-center gap-3">
            <UIcon name="mdi:account-check" class="icon"/>
            <span>Available for Freelance </span>
          </p>

          <p class="info-item flex items-center gap-3">
            <UIcon name="mdi:code-tags" class="icon"/>
            <span>Front End Developer</span>
          </p>

          <p class="info-item flex items-center gap-3">
            <UIcon name="mdi:map-marker" class="icon"/>
            <span>Kuala Lumpur, Malaysia</span>
          </p>
        </div>

        <a
            class="contact-btn mobile-contact"
            href="https://wa.me/+601170064361"
            target="_blank"
        >
          Contact Me
        </a>

      </div>

      <div class="projects-grid" data-aos="fade-left">

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
          </div>
        </div>

        <div class="project-card modern-card" v-if="currentProject">

          <div class="project-media">

            <img
                :src="currentProject.image"
                :alt="currentProject.title"
                class="project-media-image"
            />

            <div class="media-overlay"></div>

            <div class="featured-badge">
              <span class="badge-dot"></span>
              Featured Project
            </div>

          </div>

          <div class="project-body">

            <div class="project-header">
              <h3 class="project-title">
                {{ currentProject.title }}
              </h3>

              <div class="project-meta">
        <span class="location">
          {{ currentProject.location }}
        </span>

                <span class="separator">•</span>

                <span class="role">
          {{ currentProject.description }}
        </span>
              </div>
            </div>

            <ul class="project-description-list">
              <li v-for="(desc, i) in currentProject.descriptions" :key="i">
                {{ desc }}
              </li>
            </ul>

            <div class="project-links">
              <template v-for="(link, i) in currentProject.links" :key="i">
                <a
                    v-if="link.buttonLink"
                    :href="link.buttonLink"
                    target="_blank"
                    class="project-link"
                >
                  {{ link.buttonText }}
                </a>
              </template>
            </div>

          </div>

        </div>

        <div class="project-nav">

          <button @click="previousProject" :disabled="currentCategory.items.length <= 1">
            <UIcon name="mdi:arrow-left" class="icon"/>
            Previous
          </button>

          <span class="project-count">
            {{ currentProjectIndex + 1 }} / {{ currentCategory.items.length }}
          </span>

          <button @click="nextProject" :disabled="currentCategory.items.length <= 1">
            Next
            <UIcon name="mdi:arrow-right" class="icon"/>
          </button>

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
}

.header-container {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: var(--font-size-h1);
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--font-color);
  letter-spacing: -0.02em;
  justify-content: start;
  text-align: start;
}

.tab-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 2rem;
}

@media (max-width: 800px) {
  .tab-content {
    grid-template-columns: 1fr;
  }
}

.segmented-tabs {
  display: flex;
  justify-content: start;
  padding: 0.5rem 0;
  width: 100%;
  overflow-x: auto;
}

.tabs-wrapper {
  position: relative;
  gap: 0.5rem;
  padding: 0.4rem;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  width: max-content;
}

.tab {
  position: relative;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--font-size-base);
  color: var(--font-light-color);
  z-index: 2;
  border-radius: 999px;
  text-align: center;
  transition: var(--transition);
  white-space: nowrap;
  flex-shrink: 0;
}

.tab:hover {
  color: var(--accent-color);
}

.tab.active {
  color: var(--accent-color);
}

.tab::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 3px;
  border-radius: 12px;
  background: var(--accent-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}

.tab.active::after {
  transform: scaleX(1);
}

.info-card {
  padding: 1.6rem;

  background: linear-gradient(
      145deg,
      rgba(255,255,255,0.9),
      rgba(248,248,248,0.8)
  );

  border: 1px solid rgba(0,0,0,0.04);
  border-radius: 18px;

  backdrop-filter: blur(12px);

  transition:
      transform 0.35s ease,
      box-shadow 0.35s ease;
}

.info-img-container {
  position: relative;
  margin-bottom: 2.5rem;
  text-align: center;
}

.info-img-main-container {
  width: 100%;
  height: 80px;
  background: var(--accent-color, #2E4E43);
  border-radius: 14px;
}

.profile-avatar {
  width: 80px;
  height: 80px;

  object-fit: cover;

  border-radius: 50%;
  border: 3px solid #ffffff;

  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  background: white;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  transition: transform 0.35s ease;
}

.profile-avatar {
  transform: translateX(-50%) scale(1.05);
}

.info-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--font-color, #2E4E43);
  text-align: center;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.info-item {
  padding: 0.125rem 0.25rem;
  border-radius: 12px;
  transition: background 0.25s ease;
  cursor: default;
}

.info-item .icon {
  width: 18px;
  height: 18px;
  color: var(--accent-color, #2E4E43);
  flex-shrink: 0;
}

.contact-btn {
  display: inline-block;
  width: 100%;
  text-align: center;

  margin-top: 1.2rem;
  padding: 0.65rem 1.2rem;

  background-color: var(--accent-color, #2E4E43);
  color: white;

  border-radius: 999px;

  font-weight: 600;
  text-decoration: none;

  transition: all 0.3s ease;
}

.contact-btn:hover {
  background-color: var(--accent-hover-color, #1f3b31);
  transform: translateY(-2px);
}

.projects-grid {
  display: grid;
  gap: 2.5rem;
  padding: 0 2rem;
}

.modern-card {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 2.5rem;
  transition: all 0.35s ease;
}

.project-media {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  aspect-ratio: 16/10;
}

.project-media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: saturate(0.9) brightness(0.9);
  transform: scale(1.05);

  transition: all 0.8s cubic-bezier(.25,.8,.25,1);
}

.project-media:hover .project-media-image {
  transform: scale(1);
  filter: saturate(1) brightness(1);
}

.media-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
      to top,
      rgba(0,0,0,0.75),
      rgba(0,0,0,0.15),
      transparent
  );
}

.featured-badge {
  position: absolute;
  top: 16px;
  left: 16px;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 6px 12px;

  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  background: rgba(0,0,0,0.65);
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
  50% {
    opacity: 0.4;
    transform: scale(0.7);
  }
}

.project-body {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.project-title {
  font-size: clamp(1.35rem, 2vw, 1.8rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  font-size: 0.9rem;
  color: var(--font-light-color);
}

.project-description-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  padding-left: 1rem;
}

.project-description-list li {
  line-height: 1.6;
  color: var(--secondary-color);
}


.project-links {
  margin-top: auto;
}

.project-link {
  display: inline-block;

  padding: 0.75rem 1.5rem;

  border-radius: 999px;

  background: var(--accent-color);
  color: white;

  font-weight: 600;
  text-decoration: none;

  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--accent-hover-color);
  transform: translateY(-2px);
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.7);
  }
}

.project-nav {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eaeaea;
}

.project-count {
  font-size: var(--font-size-sm);
  color: var(--font-light-color);
  min-width: 40px;
  text-align: center;
}

.project-nav button {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.4rem 0.6rem;

  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  border-radius: 999px;

  background: transparent;

  transition: all 0.25s ease;
}

.project-nav button:hover:not(:disabled) {
  outline: 2px solid rgba(46, 78, 67, 0.25);
  outline-offset: 2px;
}

.project-nav button:disabled {
  opacity: 0.35;
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