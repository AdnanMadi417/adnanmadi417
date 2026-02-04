<script setup lang="ts">
import { ref } from 'vue'

interface Item {
  id: number
  paragraph: string
}

const aboutItems = ref<Item[]>([
  {
    id: 1,
    paragraph: "I'm a Software Engineer with a strong foundation in frontend development (Vue.js, Nuxt.js) and backend integration using Python and Django. I specialize in building responsive user interfaces, secure admin panels, and real-time features that streamline workflows and enhance user experience."
  },
  {
    id: 2,
    paragraph: "During my studies at Albukhary International University, I led the development of systems such as the Hostel Management System, which significantly reduced manual administrative work and improved operational efficiency. I also contributed to projects that streamlined workflows, integrated automated notifications, and enhanced reporting capabilities."
  },
  {
    id: 3,
    paragraph: "I am passionate about delivering high-quality digital solutions through clean, maintainable code. With a strong foundation in software engineering and a continuous drive to learn, I aim to build technologies that solve real-world problems and align with organizational goals."
  }
])
</script>

<template>
  <section class="journey-section" id="about">

    <div class="edu-block">
      <div class="left-panel">
        <div class="tag">Education</div>
        <h1 class="big-title">Academic<br>Journey</h1>
        <div class="decorative-line"></div>
      </div>

      <div class="right-panel">
        <div class="img-frame">
          <img src="/images/aiu-scholarship-poster.jpeg" alt="AIU" />
          <div class="img-overlay"></div>
        </div>

        <div class="info-box">
          <div class="top-row block">
            <h2 class="uni-name">Albukhary International University</h2>
            <span class="year-pill">2022–2025</span>
          </div>
          <h3 class="program">Bachelor of Computer Science (Honours)</h3>
          <p class="details">
            My studies at AIU's School of Computing and Informatics (SCI) equipped me with a strong technical foundation,
            emphasizing problem solving, leadership, and community impact. This prepared me to design innovative and sustainable digital solutions.
          </p>
        </div>
      </div>
    </div>

    <div class="about-block">
      <div class="left-panel">
        <div class="img-frame portrait">
          <img src="/images/adnan%20photo%203%20.jpg" alt="Developer" />
          <div class="img-overlay"></div>
        </div>
      </div>

      <div class="right-panel">
        <h1 class="big-title">About<br>Me</h1>
        <div class="decorative-line"></div>

        <div class="story-grid">
          <div v-for="item in aboutItems" :key="item.id" class="story-card">
            <div class="card-number">{{ String(item.id).padStart(2, '0') }}</div>
            <p class="story-text">{{ item.paragraph }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>

.journey-section {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  overflow: hidden;
}

.edu-block {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  background: linear-gradient(135deg, #2E4E43FF 0%, #1C352DFF 100%);
  position: relative;
}

.edu-block::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
}

.about-block {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
}

.left-panel {
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 2;
}

.edu-block .left-panel {
  background: transparent;
}

.about-block .left-panel {
  background: #f8f9fa;
}

.right-panel {
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  position: relative;
  z-index: 2;
}

.edu-block .right-panel {
  background: #ffffff;
}

.tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 0.6rem 1.5rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  backdrop-filter: blur(10px);
}

.about-block .tag {
  background: var(--main-color);
  color: #ffffff;
}

.big-title {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 0.95;
  margin: 0 0 1.5rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.about-block .big-title {
  color: #1a1a2e;
}

.decorative-line {
  width: 120px;
  height: 6px;
  background: #ffffff;
  border-radius: 3px;
  margin-bottom: 2rem;
}

.about-block .decorative-line {
  background: #2E4E43FF;
}

.img-frame {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transform: rotate(-2deg);
  transition: transform 0.5s ease;
}

.img-frame:hover {
  transform: rotate(0deg) scale(1.02);
}

.img-frame.portrait {
  max-width: 400px;
  aspect-ratio: 3/4;
}

.img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
  pointer-events: none;
}

.info-box {
  background: #f8f9fa;
  padding: 2.5rem;
  border-left: 5px solid #2E4E43FF;
}

.top-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.uni-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.3;
}

.year-pill {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--main-color);
  background: #ffffff;
  padding: 0.5rem;
  border-radius: 50px;
  width: fit-content;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.program {
  font-size: 1.125rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0 0 1.25rem;
}

.details {
  font-size: 1rem;
  line-height: 1.75;
  color: #2d3748;
  margin: 0;
}

.story-grid {
  display: grid;
  gap: 2rem;
}

.story-card {
  position: relative;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 0;
  border-left: 4px solid #2E4E43FF;
  transition: all 0.3s ease;
}

.story-card:hover {
  transform: translateX(8px);
  box-shadow: -8px 8px 0 #2E4E43FF;
}

.card-number {
  position: absolute;
  top: -1rem;
  left: 1.5rem;
  font-size: 3rem;
  font-weight: 900;
  color: var(--main-color);
  opacity: 0.15;
  line-height: 1;
}

.story-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #2d3748;
  margin: 0;
  position: relative;
  z-index: 1;
}

@media (min-width: 1024px) {
  .edu-block,
  .about-block {
    grid-template-columns: 1fr 1fr;
  }

  .left-panel,
  .right-panel {
    padding: 6rem 4rem;
  }

  .top-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.left-panel,
.right-panel {
  animation: slideIn 1s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>