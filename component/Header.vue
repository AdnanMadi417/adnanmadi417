<script setup lang="ts">
import {onMounted, ref} from 'vue';

const isLinksVisible = ref(false);

function toggleLinksVisibility() {
  isLinksVisible.value = !isLinksVisible.value;
  console.log("Links visibility toggled:", isLinksVisible.value);
}

const links = [
  {
    link: "landing",
    label: "Home",
  },
  {
    link: "about",
    label: "About",
  },
  {
    link: "education",
    label: "Education",
  },
  {
    link: "projects",
    label: "Projects",
  },
  {
    link: "skills",
    label: "Skills",
  },
  {
    link: "certificate",
    label: "Certificates",
  },

]

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
          <a href="https://adnanmadi-417.vercel.app/">
            <span>Adnan Madi</span>
          </a>
          <button @click="toggleLinksVisibility" class="bar-btn" v-if="isMobile">
            <UIcon
                name="uil-bars"
            />
          </button>
        </div>
      </div>

      <Transition>
        <nav class="menu" v-if="isLinksVisible || !isMobile">
          <ul class="menu-links">
            <li v-for="link in links" :key="link.link" class="menu-item">
              <a :href="`#${link.link}`">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

      </Transition>
      <div>
        <a class="contact-btn" href="https://wa.me/+601170064361" target="_blank">Contact me</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-section {
  background-color: var(--main-font-color);
  max-width: 1000px;
  margin: 0 auto;
  border-radius:  1rem;
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
  color: var(--main-color);
}

.logo a {
  font-size: 1.5rem;
  margin: 0;
}

.menu-links {
  display: inline-flex;
}

.menu-links li a {
  font-size: 1.2rem;
  margin: 0 .5rem;
}

.menu-links li a:hover {
  color: var(--main-hovor-color);
  transition: .3s ease-in-out;
}

.contact-btn {
  font-size: 1.2rem;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  background-color: var(--main-color);
  color: var(--main-font-color);
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.contact-btn:hover {
  background: linear-gradient(45deg, var(--main-color), var(--main-hovor-color));
  color: var(--font-hovor-color);
  transition: background-color 0.3s ease-in-out;
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
