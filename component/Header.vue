<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLinksVisible = ref(false);

function toggleLinksVisibility() {
  isLinksVisible.value = !isLinksVisible.value;
}
const links = [
  { link: "landing", label: "Home" },
  { link: "about", label: "About" },
  { link: "education", label: "Education" },
  { link: "skills", label: "Skills" },
  { link: "projects", label: "Projects" },
  { link: "certificate", label: "Certificates" },
];


const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 1024;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 1024;
  });
});
</script>

<template>
  <header class="header-section">
    <div class="container">
      <div class="logo">
        <a href="https://adnanmadi-417.vercel.app/">
          <img
              src="/images/adnanmadi417_logo.png"
              alt="logo"
              class="logo-container"
          />
        </a>
      </div>

      <nav class="menu" v-if="!isMobile">
        <ul class="menu-links">
          <li v-for="link in links" :key="link.link">
            <a :href="`#${link.link}`">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="contact-btn-box" v-if="!isMobile">
        <a
            class="contact-btn"
            href="https://wa.me/+601170064361"
            target="_blank"
        >
          Contact
        </a>
      </div>

      <button
          class="bar-btn"
          @click="toggleLinksVisibility"
          v-if="isMobile"
          aria-label="Toggle menu"
      >
        <UIcon name="uil-bars" />
      </button>
    </div>

    <Transition name="fade">
      <nav v-if="isMobile && isLinksVisible" class="mobile-menu">
        <ul>
          <li v-for="link in links" :key="link.link">
            <a :href="`#${link.link}`">{{ link.label }}</a>
          </li>
          <li>
            <a
                class="contact-btn mobile-contact"
                href="https://wa.me/+601170064361"
                target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.header-section {
  background: var(--body-bg-color);
  padding: 0.7rem 2rem;
  border-bottom: 1px solid var(--card-bg-color);
  position: sticky;
  top: 0;
  z-index: 50;
  height: 70px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

.logo-container {
  height: 50px;
  width: auto;
}

.menu-links {
  display: flex;
  gap: 2rem;
}

.menu-links li a {
  font-size: var(--font-size-md);
  color: var(--font-color);
  text-decoration: none;
  transition: var(--transition);
}

.menu-links li a:hover {
  color: var(--font-light-color);
}

.contact-btn {
  font-size: var(--font-size-md);
  padding: 0.4rem 1.2rem;
  border-radius: 9999px;
  background-color: var(--accent-color);
  color: white;
  text-decoration: none;
  transition: var(--transition);
}

.contact-btn:hover {
  background-color: var(--accent-hover-color);
}

.bar-btn {
  background: none;
  border: none;
  font-size: 1.6rem;
  color: var(--font-color);
  cursor: pointer;
}

.mobile-menu {
  background: var(--body-bg-color);
  border-top: 1px solid var(--card-bg-color);
  padding: 1rem 2rem;
}

.mobile-menu ul {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.mobile-menu li {
  border-bottom: 1px solid var(--card-bg-color);
  padding-bottom: 0.5rem;
}

.mobile-menu li:last-child {
  border-bottom: none;
}

.mobile-menu a {
  color: var(--font-color);
  font-size: var(--font-size-md);
  text-decoration: none;
}

.mobile-contact {
  background: none;
  color: var(--accent-color);
  padding: 0;
}

.mobile-contact:hover {
  text-decoration: underline;
  background: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
