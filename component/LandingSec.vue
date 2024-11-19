<script setup lang="ts">
import { ref } from 'vue';
import CVPopup from "~/component/CVPopup.vue";

const showPopup = ref(false);
</script>

<template>
  <section class="landing-sec" id="landing-sec">
    <div class="container">
      <div class="text-content">
        <h1 class="name slide-up">Adnan Madi</h1>
        <p class="title fade-in">Web Developer</p>
        <p class="description fade-in">
          I am a Front-end developer, and mostly I am passionate about web coding. I am an expert in web programming
          and the development world.
        </p>
        <button @click="showPopup = true" class="cta-button fade-in" id="cvButton">To Review my CV
          <span>
            <UIcon
                class="icon"
                name="maki-arrow"
            />
          </span>
        </button>
        <CVPopup v-model:show="showPopup"></CVPopup>
      </div>
      <div class="image-content">
        <img src="/images/adnan%20photo%203%20.jpg" alt="Adnan Madi" class="profile-image image-fade"/>
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
  background-image: linear-gradient(-225deg, rgba(7, 25, 82, 1)0%, #074173 51%, #074173 100%);
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
  color: var(--font-hovor-color);
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
  color: var(--font-hovor-color);
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
}

.description {
  font-size: 1rem;
  margin: 1rem 0 2rem 0;
  line-height: 1.5;
  opacity: 0;
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
  background-color: var(--main-hovor-color);
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
  max-width: 400px;
}

.profile-image {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeIn 2s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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
    color: var(--main-font-color);
  }
}
</style>
