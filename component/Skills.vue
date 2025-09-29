<script setup lang="ts">
import {computed, ref, onMounted, onUnmounted} from "vue";

const skills = [
  {title: "HTML", icon: "mdi:language-html5", color: "#E44D26"},
  {title: "CSS", icon: "mdi:language-css3", color: "#264DE4"},
  {title: "SASS", icon: "mdi:sass", color: "#CC6699"},
  {title: "Bootstrap", icon: "simple-icons:bootstrap", color: "#7952B3"},
  {title: "JavaScript", icon: "mdi:language-javascript", color: "#F7DF1E"},
  {title: "Vue.js", icon: "mdi:vuejs", color: "#4FC08D"},
  {title: "Nuxt.js", icon: "simple-icons:nuxtdotjs", color: "#00DC82"},
  {title: "Next.js", icon: "simple-icons:nextdotjs", color: "#000000"},
  {title: "API", icon: "mdi:api", color: "#0096FF"},
  {title: "Django", icon: "simple-icons:django", color: "#092E20"},
  {title: "WordPress", icon: "simple-icons:wordpress", color: "#21759B"},
  {title: "Figma", icon: "simple-icons:figma", color: "#F24E1E"},
];

const currentIndex = ref(0);
const itemsPerPage = ref(4);

function updateItemsPerPage() {
  if (window.innerWidth < 576) itemsPerPage.value = 1;
  else if (window.innerWidth < 768) itemsPerPage.value = 2;
  else if (window.innerWidth < 992) itemsPerPage.value = 4;
  else itemsPerPage.value = 5;

  // Prevent index overflow
  if (currentIndex.value > skills.length - itemsPerPage.value) {
    currentIndex.value = 0;
  }
}

onMounted(() => {
  updateItemsPerPage();
  window.addEventListener("resize", updateItemsPerPage);

  // Auto-rotate every 4 seconds
  const interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + itemsPerPage.value) % skills.length;
  }, 4000);

  onUnmounted(() => {
    window.removeEventListener("resize", updateItemsPerPage);
    clearInterval(interval);
  });
});

const visibleSkills = computed(() =>
    skills.slice(currentIndex.value, currentIndex.value + itemsPerPage.value)
);
</script>

<template>
  <div class="skills-section" id="skills">
    <h1 class="title">Technical Skills</h1>

    <div class="container">
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
    </div>
  </div>
</template>


<style scoped>
.skills-section {
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: var(--font-size-h1);
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--secondary-color);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", Helvetica, Arial, sans-serif;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.skills-carousel {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(1rem, 2vw, 2rem);
  margin-bottom: 2rem;
  min-height: 220px;
}

.skill-card {
  background: var(--body-bg-color);
  border: 1px solid #e5e5e7;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  max-width: 240px;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.skill-icon {
  font-size: 3.2rem;
  margin-bottom: 1rem;
  color: var(--skill-color, var(--secondary-color));
  transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.15);
}

.skill-title {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--secondary-color);
  margin-top: 0.5rem;
  letter-spacing: -0.015em;
}

</style>