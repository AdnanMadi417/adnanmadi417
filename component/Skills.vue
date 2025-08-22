<script setup lang="ts">
import {computed, ref, onMounted} from "vue";

const skills = [
  {
    title: "HTML",
    icon: "mdi:language-html5",
    color: "#E44D26"
  },
  {
    title: "CSS",
    icon: "mdi:language-css3",
    color: "#264DE4"
  },
  {
    title: "SASS",
    icon: "mdi:sass",
    color: "#CC6699"
  },
  {
    title: "Bootstrap",
    icon: "simple-icons:bootstrap",
    color: "#7952B3"
  },
  {
    title: "JavaScript",
    icon: "mdi:language-javascript",
    color: "#F7DF1E"
  },
  {
    title: "Vue.js",
    icon: "mdi:vuejs",
    color: "#4FC08D"
  },
  {
    title: "Nuxt.js",
    icon: "simple-icons:nuxtdotjs",
    color: "#00DC82"
  },
  {
    title: "API",
    icon: "mdi:api",
    color: "#0096FF"
  },
  {
    title: "Django",
    icon: "simple-icons:django",
    color: "#092E20"
  },
  {
    title: "WordPress",
    icon: "simple-icons:wordpress",
    color: "#21759B"
  },
  {
    title: "Figma",
    icon: "simple-icons:figma",
    color: "#F24E1E"
  }
];

const currentIndex = ref(0);
const itemsPerPage = ref(4);
const isAnimating = ref(false);
const isHovering = ref(false);

onMounted(() => {
  updateItemsPerPage();
  window.addEventListener('resize', updateItemsPerPage);

});

function updateItemsPerPage() {
  if (window.innerWidth < 576) {
    itemsPerPage.value = 1;
  } else if (window.innerWidth < 768) {
    itemsPerPage.value = 2;
  } else if (window.innerWidth < 992) {
    itemsPerPage.value = 3;
  } else {
    itemsPerPage.value = 4;
  }

  // Adjust current index if needed
  if (currentIndex.value > skills.length - itemsPerPage.value) {
    currentIndex.value = Math.max(0, skills.length - itemsPerPage.value);
  }
}

const visibleSkills = computed(() =>
    skills.slice(currentIndex.value, currentIndex.value + itemsPerPage.value)
);

function nextPage() {
  currentIndex.value = (currentIndex.value + itemsPerPage.value) % skills.length;
}
function prevPage() {
  currentIndex.value = (currentIndex.value - itemsPerPage.value + skills.length) % skills.length;
}


function handleMouseEnter() {
  isHovering.value = true;
}
function handleMouseLeave() {
  isHovering.value = false;
}
</script>

<template>
  <div class="skills-section" id="skills">
    <h1 class="title">TECHNICAL SKILLS</h1>

    <div class="container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div class="skills-carousel">
        <transition-group name="skill-card">
          <div
              class="skill-card"
              v-for="(skill, index) in visibleSkills"
              :key="skill.title"
              :style="{ '--delay': `${index * 0.15}s`, '--skill-color': skill.color }"
          >
            <div class="skill-icon">
              <UIcon :name="skill.icon"/>
            </div>
            <div class="skill-title">{{ skill.title }}</div>
            <div class="card-glow"></div>
          </div>
        </transition-group>
      </div>

      <div class="navigation">
        <button class="nav-btn prev-btn" @click="prevPage" :disabled="isAnimating">
          <UIcon name="mdi-arrow-left-circle"/>
        </button>
        <div class="dots">
          <span
              v-for="(_, i) in Math.ceil(skills.length / itemsPerPage)"
              :key="i"
              class="dot"
              :class="{ active: i === Math.floor(currentIndex / itemsPerPage) }"
              @click="currentIndex = i * itemsPerPage"
          ></span>
        </div>
        <button class="nav-btn next-btn" @click="nextPage" :disabled="isAnimating">
          <UIcon name="mdi-arrow-right-circle"/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.skills-section {
  padding: 5rem 1rem;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  margin-bottom: 3rem;
  color: var(--secondary-color);
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.container {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
}

.skills-carousel {
  display: flex;
  justify-content: center;
  gap: clamp(1rem, 2vw, 2rem);
  margin-bottom: 2rem;
  min-height: 200px;
}

.skill-card {
  background: var(--body-bg-color);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  max-width: 220px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--skill-color, var(--secondary-color));
  transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1);
}

.skill-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--secondary-color);
  margin-top: 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

/* Navigation */
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
}

.nav-btn {
  background: var(--body-bg-color);
  border: 1px solid #d2d2d7;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--secondary-color);
  transition: background 0.3s ease, transform 0.3s ease;
}

.nav-btn:hover {
  background: var(--section-bg-color);
  transform: translateY(-2px);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #d2d2d7;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
}

.dot.active {
  background-color: var(--accent-color);
  transform: scale(1.3);
}

</style>