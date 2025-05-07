<script setup lang="ts">
import {ref, onMounted} from 'vue';
import CVPopup from "~/component/CVPopup.vue";

const showPopup = ref(false);
const isLinksVisible = ref(false);

function toggleLinksVisibility() {
  isLinksVisible.value = !isLinksVisible.value;
  console.log("Links visibility toggled:", isLinksVisible.value);
}

const links = [
  {link: "landing", label: "Home"},
  {link: "education", label: "Education"},
  {link: "about", label: "About"},
  {link: "projects", label: "Projects"},
  {link: "wpProjects", label: "WP Projects"},
  {link: "skills", label: "Skills"},
  {link: "certificate", label: "Certificates"},
];

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

  <header class="header-section" :class="{ 'header-scrolled': isScrolled }">
    <div class="header-container">
      <div class="logo-container">
        <div class="logo">
          <a href="https://adnanmadi-417.vercel.app/">
            <span>Adnan Madi</span>
          </a>
        </div>
        <button @click="toggleLinksVisibility" class="menu-toggle" v-if="isMobile" aria-label="Toggle menu">
          <UIcon name="uil-bars"/>
        </button>
      </div>

      <Transition name="menu-fade">
        <nav class="menu" v-if="isLinksVisible || !isMobile">
          <ul class="menu-links">
            <li v-for="link in links" :key="link.link" class="menu-item">
              <a :href="`#${link.link}`" @click="isMobile && (isLinksVisible = false)">{{ link.label }}</a>
            </li>
          </ul>
        </nav>
      </Transition>
    </div>
  </header>

  <section class="landing-sec" id="landing">
    <div class="landing-container">
      <div class="text-content">
        <h1 class="name slide-up">Adnan Madi</h1>
        <p class="title fade-in">Web Developer</p>
        <p class="description fade-in">
          Building user-friendly, efficient websites that solve real problems.
        </p>
        <div class="buttons">
          <button @click="showPopup = true" class="cta-button fade-in" id="cvButton">
            Discover my CV
          </button>
          <a href="#projects" class="cta-button fade-in">
            Discover my Projects
          </a>
        </div>
        <CVPopup v-model:show="showPopup"></CVPopup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.header-section {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 0.5rem;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.header-scrolled {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.3rem 0.5rem;
  background: #fff;
  width: 100%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem;
  color: var(--main-color);
}

.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--main-color);
}

.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  color: var(--main-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.3rem;
}

.menu {
  display: flex;
  align-items: center;
}

.menu-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
  min-width: fit-content !important;
}

.menu-item {
  width: fit-content;
  min-width: 95px;
}

.menu-item a {
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--main-color);
  position: relative;
}

.menu-item a:hover {
  color: var(--main-hovor-color);
  transition: color 0.3s ease-in-out;
}

.menu-item a::after {
  content: '';
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--main-hovor-color);
  transition: width 0.3s ease-in-out;
}

.menu-item a:hover::after {
  width: 100%;
}

.landing-sec {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px);
  padding: 2rem 1rem;
  box-sizing: border-box;
  scroll-behavior: smooth;
  background-image: url("../public/images/LANDING-BG.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.landing-container {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  color: var(--main-color);
}

.text-content {
  max-width: 650px;
  width: 100%;
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
}

.name {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: bold;
  margin: 0;
  opacity: 0;
  animation: slideUp 1.2s ease forwards;
}

.title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin: 0.5rem 0;
  color: var(--main-color);
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
}

.description {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin: 1rem 0 2rem 0;
  line-height: 1.6;
  opacity: 0;
  animation: fadeIn 1.8s ease forwards;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
}

.cta-button {
  padding: 0.8rem 1.5rem;
  background-color: var(--main-color);
  color: var(--font-hovor-color);
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  border: none;
  min-width: 180px;
}

.cta-button:hover {
  background: linear-gradient(45deg, var(--main-color), var(--main-hovor-color));
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.cta-button:active {
  transform: translateY(-1px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1200px) {
  .header-container {
    flex-direction: column;
    align-items: stretch;
  }

  .logo-container {
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .menu-toggle {
    display: block;
  }

  .menu {
    width: 100%;
    margin-top: 1rem;
  }

  .menu-links {
    flex-direction: column;
    width: 100%;
  }

  .menu-item {
    width: 100%;
    border-bottom: 1px solid rgba(var(--main-color-rgb, 0, 0, 0), 0.1);
    padding: 0.3rem 0;
  }

  .menu-item a {
    display: block;
    width: 100%;
  }

  .menu-links .menu-item:last-child {
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 767px) {
  .landing-sec {
    min-height: calc(100vh - 60px);
    padding: 1rem 0.5rem;
  }

  .text-content {
    padding: 1.5rem 1rem;
  }

  .buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-button {
    width: 100%;
    min-width: unset;
  }

  .name {
    margin-bottom: 0.5rem;
  }

  .description {
    margin-bottom: 1.5rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .buttons {
    justify-content: center;
  }

  .cta-button {
    min-width: 160px;
  }
}

@media (min-width: 1024px) {
  .header-container {
    padding: 0.5rem 2rem;
  }
}
</style>