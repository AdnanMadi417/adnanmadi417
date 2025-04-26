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
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.title {
  text-align: center;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--main-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 0.75rem;
  animation: fadeUp 1s ease-out forwards;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--main-color) 0%, var(--main-hovor-color) 100%);
  border-radius: 2px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.skills-carousel {
  display: flex;
  justify-content: center;
  gap: clamp(1rem, 3vw, 2rem);
  margin-bottom: 2rem;
  min-height: 200px;
  perspective: 1000px;
}

.skill-card {
  background: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  max-width: 240px;
  min-width: 180px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: var(--delay);
  transform-origin: center center;
  opacity: 0;
  z-index: 1;
}

.skill-card:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: -1;
}

.skill-card:hover .card-glow {
  opacity: 0.6;
  animation: rotateGlow 10s linear infinite;
}

.skill-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--skill-color, var(--main-color));
  transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.2);
  animation: bounce 1s ease infinite;
}

.skill-title {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-top: 0.5rem;
  color: #333;
  position: relative;
  z-index: 2;
}

.skill-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 70%;
  height: 3px;
  background-color: var(--skill-color, var(--main-color));
  transition: transform 0.3s ease;
  border-radius: 2px;
}

.skill-card:hover .skill-title::after {
  transform: translateX(-50%) scaleX(1);
}

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
}

.nav-btn {
  background: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--main-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.nav-btn:hover {
  transform: translateY(-3px);
  color: var(--main-hovor-color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.nav-btn:active {
  transform: translateY(-1px);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dots {
  display: flex;
  gap: 8px;
  margin: 0 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background-color: var(--main-color);
  transform: scale(1.3);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes rotateGlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Transitions for cards */
.skill-card-enter-active,
.skill-card-leave-active {
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.skill-card-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.9);
}

.skill-card-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.9);
}

/* Responsive styles */
@media (max-width: 1200px) {
  .skills-carousel {
    padding: 0 2rem;
  }
}

@media (max-width: 992px) {
  .skill-card {
    min-width: 160px;
  }
}

@media (max-width: 768px) {
  .skills-section {
    padding: 4rem 1rem;
  }

  .skills-carousel {
    gap: 1rem;
  }

  .skill-card {
    padding: 1.5rem 1rem;
    min-width: 140px;
  }

  .skill-icon {
    font-size: 2.8rem;
  }

  .skill-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .skills-section {
    padding: 3rem 0.75rem;
  }

  .title {
    margin-bottom: 2rem;
  }

  .skills-carousel {
    min-height: 180px;
  }

  .skill-card {
    min-width: 80%;
    max-width: none;
    margin: 0 auto;
  }

  .navigation {
    flex-wrap: wrap;
  }

  .dots {
    order: 1;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}
</style>