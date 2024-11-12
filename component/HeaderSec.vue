<script setup lang="ts">
import {onMounted, ref} from 'vue';

const isLinksVisible = ref(false);

function toggleLinksVisibility() {
  isLinksVisible.value = !isLinksVisible.value;
  console.log("Links visibility toggled:", isLinksVisible.value);
}

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 1200;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 1200;
  });
});
</script>

<template>
  <header class="header-section">
    <div class="container">

      <div class="container-box">
        <div class="logo">
          <a href="/">
            <span>Adnan Madi</span>
          </a>
          <button @click="toggleLinksVisibility" class="bar-btn" v-if="isMobile">
            <UIcon
                name="uil-bars"
            />
          </button>
        </div>
      </div>

      <nav class="menu" v-if="isLinksVisible || !isMobile">
        <ul class="menu-links">
          <li>
            <router-link to="#landing-sec">Home</router-link>
          </li>
          <li>
            <router-link to="#about-sec">About</router-link>
          </li>
          <li>
            <router-link to="#projects-sec">Projects</router-link>
          </li>
          <li>
            <router-link to="#education-sec">Education</router-link>
          </li>
          <li>
            <router-link to="#skills-sec">Skills</router-link>
          </li>
          <li>
            <router-link to="#certificate-sec">Certificates</router-link>
          </li>
        </ul>
      </nav>
      <div>
        <a class="contact-btn" href="https://wa.me/+601170064361" target="_blank">Contact me</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-section {
  background-color: var(--main-color);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

.container-box > button {
  display: none;
}

.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: .5rem 0;
  color: var(--font-hovor-color);
}

.menu-links {
  display: inline-flex;
}

.menu-links li a {
  font-size: 1.2rem;
  margin: 0 .5rem;
  color: var(--main-font-color);
}

.menu-links li a:hover {
  color: var(--font-hovor-color);
}

.contact-btn {
  font-size: 1.2rem;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  background-color: var(--main-font-color);
  color: var(--main-color);
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.contact-btn:hover {
  background-color: var(--main-hovor-color);
  color: var(--font-hovor-color);
  transition: 0.3s ease-in-out;
}

@media (max-width: 1200px ) {

  .container {
    display: block;
  }

  .contact-btn {
    display: none;
  }

  .container-box div {
    display: flex;
    justify-content: space-between;
  }

  .menu-links {
    display: block;
    margin: 1rem 0;
  }

  .menu-links li {
    margin-left: .5rem;
    border-bottom: 2px solid var(--font-hovor-color);
  }

}

</style>
