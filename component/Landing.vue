<script setup lang="ts">
import {ref, onMounted} from 'vue';
import CVPopup from "~/component/CVPopup.vue";

const showPopup = ref(false);
const isMobile = ref(false);
const isScrolled = ref(false);

onMounted(() => {
  const checkMobileSize = () => {
    isMobile.value = window.innerWidth <= 1200;
  };

  checkMobileSize();
  window.addEventListener('resize', checkMobileSize);

  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 50;
  });
});
</script>

<template>
  <section class="landing-sec" id="landing">
    <div class="hero-background">
      <div class="mesh-gradient"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="landing-container">
      <div class="content-wrapper">

        <h1 class="hero-title stagger-fade">
          <span class="line">Transforming ideas into secure and scalable</span>
          <span class="line highlight">digital experiences</span>
        </h1>

        <p class="hero-subtitle stagger-fade delay-2">
          Hi, I'm <strong>Adnan Madi</strong>, a Software Engineer specializing in building
          user-friendly, efficient websites that solve real problems.
        </p>

        <div class="cta-group stagger-fade delay-3">
          <button @click="showPopup = true" class="btn-primary">
            Discover My Work
            <span class="btn-shine"></span>
          </button>
        </div>
      </div>

      <div class="visual-side">
        <div class="device-mockup">
          <div class="screen">
            <div class="screen-content">
              <div class="code-line"></div>
              <div class="code-line short"></div>
              <div class="code-line medium"></div>
              <div class="code-line"></div>
              <div class="code-line short"></div>
            </div>
          </div>
        </div>

        <div class="floating-elements">
          <div class="element element-1">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="url(#grad1)"/>
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" style="stop-color:var(--accent-color);stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#667eea;stop-opacity:1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="element element-2">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="url(#grad2)"/>
              <defs>
                <linearGradient id="grad2" x1="0" y1="0" x2="50" y2="50">
                  <stop offset="0%" style="stop-color:#1C352D;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:var(--accent-color);stop-opacity:1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="element element-3">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M17.5 0L35 17.5L17.5 35L0 17.5L17.5 0Z" fill="url(#grad3)"/>
              <defs>
                <linearGradient id="grad3" x1="0" y1="0" x2="35" y2="35">
                  <stop offset="0%" style="stop-color:var(--accent-color);stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#1C352D;stop-opacity:1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <CVPopup v-model:show="showPopup"></CVPopup>
  </section>
</template>

<style scoped>
.landing-sec {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem 1rem;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.mesh-gradient {
  position: absolute;
  inset: 0;
  background:
      radial-gradient(circle at 20% 50%, rgba(46, 78, 67, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(46, 78, 67, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 40% 90%, rgba(28, 53, 45, 0.06) 0%, transparent 50%);
  animation: meshMove 20s ease-in-out infinite;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
      linear-gradient(rgba(46, 78, 67, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(46, 78, 67, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
}

.landing-container {
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;
  position: relative;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5.5vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--main-color);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.hero-title .line {
  display: block;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease-out forwards;
}

.hero-title .line:nth-child(1) {
  animation-delay: 0.1s;
}

.hero-title .line:nth-child(2) {
  animation-delay: 0.2s;
}

.hero-title .line:nth-child(3) {
  animation-delay: 0.3s;
}

.hero-title .highlight {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover-color) 50%, #1a3d33 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: slideUp 0.8s ease-out forwards, gradientShift 3s ease infinite;
  animation-delay: 0.3s, 0.5s;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: var(--font-light-color);
  max-width: 540px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.5s forwards;
}

.hero-subtitle strong {
  color: var(--main-color);
  font-weight: 600;
}

.cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.7s forwards;
}

.btn-primary{
  padding: 1rem 2rem;
  border-radius: 999px;
  font-weight: normal;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover-color) 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.btn-primary:hover .btn-shine {
  left: 100%;
}

.visual-side {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.device-mockup {
  width: 380px;
  height: 480px;
  background: linear-gradient(145deg, rgba(46, 78, 67, 0.12) 0%, rgba(46, 78, 67, 0.06) 100%);
  border-radius: 30px;
  padding: 20px;
  box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.15),
      inset 0 1px 1px rgba(46, 78, 67, 0.1);
  border: 1px solid rgba(46, 78, 67, 0.15);
  position: relative;
  animation: float 6s ease-in-out infinite;
}

.screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, var(--card-bg-color) 0%, var(--section-bg-color) 100%);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.screen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(180deg, rgba(46, 78, 67, 0.05) 0%, transparent 100%);
}

.screen-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: fadeIn 1s ease-out 1s forwards;
  opacity: 0;
}

.code-line {
  height: 12px;
  background: linear-gradient(90deg, var(--accent-color) 0%, var(--accent-hover-color) 100%);
  border-radius: 6px;
  width: 100%;
  animation: typing 2s ease-in-out infinite;
}

.code-line.short {
  width: 60%;
}

.code-line.medium {
  width: 80%;
}

.code-line:nth-child(2) {
  animation-delay: 0.3s;
}

.code-line:nth-child(3) {
  animation-delay: 0.6s;
}

.code-line:nth-child(4) {
  animation-delay: 0.9s;
}

.code-line:nth-child(5) {
  animation-delay: 1.2s;
}

.floating-elements {
  position: absolute;
  inset: 0;
}

.element {
  position: absolute;
  animation: float 8s ease-in-out infinite;
}

.element-1 {
  top: 10%;
  left: -5%;
  animation-delay: 0s;
}

.element-2 {
  top: 60%;
  right: -8%;
  animation-delay: 1s;
}

.element-3 {
  bottom: 15%;
  left: 5%;
  animation-delay: 2s;
}

@keyframes meshMove {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes typing {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@media (max-width: 1200px) {
  .landing-container {
    max-width: 1000px;
    gap: 3rem;
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  .device-mockup {
    width: 340px;
    height: 440px;
  }
}

@media (max-width: 1024px) {
  .landing-sec {
    padding: 4rem 1.5rem;
  }

  .landing-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
  }

  .content-wrapper {
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .hero-title {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  .hero-subtitle {
    max-width: 100%;
  }

  .cta-group {
    justify-content: center;
  }

  .visual-side {
    height: 500px;
    order: -1;
  }

  .device-mockup {
    width: 320px;
    height: 420px;
  }

  .element-1 {
    left: 5%;
  }

  .element-2 {
    right: 5%;
  }
}

@media (max-width: 768px) {
  .landing-sec {
    padding: 3rem 1rem;
    min-height: auto;
  }

  .landing-container {
    gap: 3rem;
  }

  .hero-title {
    font-size: clamp(1.75rem, 7vw, 2.5rem);
  }

  .hero-subtitle {
    font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  }

  .btn-primary {
    padding: 0.9rem 1.5rem;
    font-size: 0.95rem;
  }

  .visual-side {
    height: 450px;
  }

  .device-mockup {
    width: 300px;
    height: 400px;
    padding: 18px;
  }

  .screen {
    padding: 1.5rem;
  }

  .floating-elements {
    display: none;
  }
}

@media (max-width: 640px) {
  .landing-sec {
    padding: 2rem 1rem;
  }

  .landing-container {
    gap: 2.5rem;
  }

  .hero-title {
    font-size: clamp(1.5rem, 8vw, 2rem);
    gap: 0.1rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .cta-group {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }

  .visual-side {
    height: 350px;
  }

  .device-mockup {
    width: 260px;
    height: 340px;
    padding: 15px;
  }

  .screen {
    padding: 1.2rem;
  }

  .code-line {
    height: 10px;
  }

  .grid-overlay {
    background-size: 30px 30px;
  }
}

@media (max-width: 480px) {
  .landing-sec {
    padding: 1.5rem 0.75rem;
  }

  .landing-container {
    gap: 2rem;
  }

  .hero-title {
    font-size: clamp(1.4rem, 9vw, 1.75rem);
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .btn-primary {
    padding: 0.85rem;
    font-size: 0.9rem;
  }

  .visual-side {
    height: 300px;
  }

  .device-mockup {
    width: 240px;
    height: 310px;
    padding: 12px;
  }

  .screen {
    padding: 1rem;
  }

  .code-line {
    height: 8px;
  }

  .screen-content {
    gap: 0.75rem;
  }
}

@media (max-width: 360px) {
  .landing-sec {
    padding: 1rem 0.5rem;
  }

  .hero-title {
    font-size: 1.3rem;
  }

  .hero-subtitle {
    font-size: 0.85rem;
  }

  .btn-primary {
    padding: 0.75rem;
    font-size: 0.85rem;
  }

  .visual-side {
    height: 280px;
  }

  .device-mockup {
    width: 220px;
    height: 290px;
    padding: 10px;
  }
}
</style>