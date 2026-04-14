<script setup lang="ts">
const skills = [
  // Core Frontend
  { title: "HTML", icon: "mdi:language-html5", color: "#E44D26", year: "Core" },
  { title: "CSS", icon: "mdi:language-css3", color: "#264DE4", year: "Core" },
  { title: "JavaScript", icon: "mdi:language-javascript", color: "#F7DF1E", year: "Core" },
  { title: "SASS", icon: "mdi:sass", color: "#CC6699", year: "Styling" },

  // Frontend Frameworks
  { title: "Vue.js", icon: "mdi:vuejs", color: "#4FC08D", year: "Framework" },
  { title: "React", icon: "mdi:react", color: "#61DAFB", year: "Framework" },
  { title: "Nuxt.js", icon: "simple-icons:nuxtdotjs", color: "#00DC82", year: "Meta" },
  { title: "Next.js", icon: "simple-icons:nextdotjs", color: "#000000", year: "Meta" },

  // UI / Design
  { title: "Bootstrap", icon: "simple-icons:bootstrap", color: "#7952B3", year: "Framework" },
  { title: "Figma", icon: "simple-icons:figma", color: "#F24E1E", year: "Design" },

  // Integration / Supporting Tech (Optional but acceptable for frontend profile)
  { title: "API", icon: "mdi:api", color: "#0096FF", year: "Integration" },
  { title: "WordPress", icon: "simple-icons:wordpress", color: "#21B3EB", year: "CMS" },
  { title: "Django", icon: "simple-icons:django", color: "#41B883", year: "Backend" }
];

</script>

<template>
  <section class="skills-section">

    <div class="container">
      <div class="header-container" data-aos="fade-up">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">
          Building modern, responsive, and high-performance frontend interfaces using contemporary web technologies, design systems, and component-based development.
        </p>
      </div>

      <div class="ticker-wrap" data-aos="fade-up" data-aos-delay="150">
        <div class="ticker ticker--fwd">
          <div class="ticker__inner">

            <transition-group name="skill-card">
              <div
                  class="skill-card"
                  v-for="(skill, i) in [...skills, ...skills]"
                  :key="`${skill.title}-${i}`"
                  :style="{  '--c': skill.color, '--skill-color': skill.color }"
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
    </div>

  </section>
</template>

<style scoped>
.skills-section {
  padding: 6rem 1rem;
  overflow: hidden;
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
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--font-light-color);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.ticker-wrap {
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
}

.ticker {
  display: flex;
}

.ticker--fwd .ticker__inner {
  display: flex;
  animation: scroll 40s linear infinite;
  will-change: transform;
  animation-timing-function: linear;
}

.ticker__inner:hover {
  animation-play-state: paused;
}

.skill-card {
  border: 1px solid #e5e5e7;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  margin: 0 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  max-width: 180px;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);

  transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease, filter 0.35s ease;

  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
  animation-delay: calc(var(--i) * 0.08s);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 0.8rem;
  color: var(--skill-color, var(--secondary-color));
  transition: transform 0.35s ease, color 0.35s ease, filter 0.35s ease;
}

.skill-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--secondary-color);
  text-align: center;
  transition: color 0.35s ease;
}

.skill-card:hover .skill-title {
  color: var(--accent-color);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>