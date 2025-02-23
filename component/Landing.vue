<script setup lang="ts">
import { ref } from 'vue';
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
          <!-- Add your description here -->
        </p>
        <button @click="showPopup = true" class="cta-button fade-in" id="cvButton">To Review my CV
          <span>
            <UIcon class="icon" name="maki-arrow" />
          </span>
        </button>
        <CVPopup v-model:show="showPopup"></CVPopup>
      </div>
      <div class="image-content">
        <div class="image-wrapper">
          <img src="/images/adndn%20bg%20(2).png" alt="Adnan Madi" class="profile-image image-fade" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.landing-sec {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background: var(--background);
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: auto 5rem;
  padding: 5rem;
  max-width: 1200px;
  width: 100%;
  color: var(--main-color);
  z-index: 1001;
}

.text-content {
  max-width: 600px;
}

.name {
  font-size: 5rem;
  font-weight: bold;
  margin: 0;
  opacity: 0;
  animation: slideUp 1.2s ease forwards;
}

.title {
  font-size: 3rem;
  margin: 0.5rem 0;
  color: var(--main-color);
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
}

.description {
  font-size: 1rem;
  margin: 1rem 0 2rem 0;
  line-height: 1.5;
  opacity: 0;
  min-width: 600px;
  animation: fadeIn 1.8s ease forwards;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: var(--main-color);
  color: var(--font-hovor-color);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s ease;
}

.cta-button:hover {
  background: linear-gradient(45deg, var(--main-color), var(--main-hovor-color));
  transform: scale(1.05);
}

.icon {
  padding: 0.5rem;
}

.image-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 500px;
  align-content: center;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: auto;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 80%;
  margin: auto;
  background: linear-gradient(45deg, var(--main-color), var(--main-hovor-color));
  border-radius: 30% 60% 20px 90%;
  z-index: -1;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%);
}

.profile-image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 1200px) {
  .container {
    flex-direction: column;
    margin: 5rem 0;
    padding: 1rem;
    gap: 3rem;
  }

  .name {
    font-size: 3rem;
  }

  .title {
    font-size: 2rem;
  }

  .description {
    width: 100%;
    min-width: 100%;
  }

  .image-wrapper::before {
    top: 50px;
    left: 30px;
    width: 80%;
    height: 70%;
  }
}
</style>