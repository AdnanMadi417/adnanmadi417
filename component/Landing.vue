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
    <div class="landing-container">
      <div class="text-content">
        <p class="title fade-in">Hi, I am Adnan Madi a Software Engineer</p>
        <p class="description fade-in">
          Building user-friendly, efficient websites that solve real problems.
        </p>
        <div class="buttons">
          <button @click="showPopup = true" class="cta-button fade-in" id="cvButton">
            Discover my CV
          </button>
        </div>
        <CVPopup v-model:show="showPopup"></CVPopup>
      </div>
      <div class="landing-image-container slide-up">
        <img src="../public/images/landing_pic_1.png" alt="landing_pic">
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
  background: var(--body-bg-color);
  padding: 2rem 1rem;
}

.landing-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 3rem;
}

.text-content {
  flex: 1;
  text-align: left;
}

.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  color: var(--main-color);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.description {
  font-size: clamp(1rem, 2.2vw, 1.3rem);
  color: var(--font-light-color);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.cta-button {
  padding: 0.9rem 1.8rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button:first-child {
  background-color: var(--accent-color);
  color: #fff;
}

.cta-button:first-child:hover {
  background-color: var(--accent-hover-color);
}

.cta-button:last-child {
  background-color: transparent;
  border: 1px solid #d2d2d7;
  color: var(--main-color);
}

.cta-button:last-child:hover {
  background-color: var(--button-hover-bg);
}

.landing-image-container img {
  width: 100%;
  max-width: 500px;
  object-fit: contain;
  border-radius: 1rem;
  transition: transform 0.6s ease;
}

.landing-image-container img:hover {
  transform: scale(1.03);
}

/* Mobile */
@media (max-width: 900px) {
  .landing-container {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }

  .text-content {
    text-align: center;
  }

  .buttons {
    justify-content: center;
    flex-wrap: wrap;
  }
}

</style>
