<script setup lang="ts">
import {ref} from 'vue';
import CVPopup from "~/component/CVPopup.vue";

const showPopup = ref(false);
</script>

<template>
  <section class="landing-sec" id="landing">
    <div class="container">
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
.landing-sec {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  scroll-behavior: smooth;
  background-image: url("../public/images/LANDING-BG.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.container {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  color: var(--main-color);
  z-index: 1001;
}

.text-content {
  max-width: 600px;
  width: 100%;
  text-align: center;
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
  font-size: clamp(0.875rem, 3vw, 1rem);
  margin: 1rem 0 2rem 0;
  line-height: 1.5;
  opacity: 0;
  animation: fadeIn 1.8s ease forwards;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  background-color: var(--main-color);
  color: var(--font-hovor-color);
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: clamp(0.875rem, 2vw, 1rem);
  transition: background-color 0.3s, transform 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  border: none;
}

.cta-button:hover {
  background: linear-gradient(45deg, var(--main-color), var(--main-hovor-color));
  transform: scale(1.05);
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
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 767px) {
  .landing-sec {
    min-height: 80vh;
  }

  .container {
    padding: 0 0.5rem;
  }

  .cta-button {
    width: 100%;
  }
}
</style>
