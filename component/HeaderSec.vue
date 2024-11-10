<script setup lang="ts">
</script>

<template>
  <header class="header-section">
    <div class="container">
      <div class="logo">
        <a href="/">
          <span>Adnan Madi</span>
        </a>
      </div>
      <div class="title"></div>
      <nav class="menu">
        <ul class="menu-links">
          <li>
            <router-link to="/home" id="">Home</router-link>
          </li>
          <li>
            <router-link to="/about" id="about-sec">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Projects</router-link>
          </li>
        </ul>
      </nav>
      <button class="contact-btn">Contact me</button>
    </div>
  </header>
</template>

<style scoped>
.header-section {
  background-color: #eeeeee;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.logo a {
  font-size: 1.5rem;
  font-weight: normal;
  color: var(--main-color);
  text-decoration: none;
}

.title h2 {
  font-size: 1.5rem;
  color: var(--main-color);
  text-transform: uppercase;
  text-align: center;
}

.menu {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: var(--main-color);
}

.menu-links {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-links li {
  margin-right: 1.2rem;
}

.menu-links li:last-child {
  margin-right: 0;
}

.menu-links li:hover {
  color: var(--main-hovor-color);
  transition: .3s ease-in-out;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .title h2 {
    display: none;
  }

  .menu-links {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
}

.contact-btn {
  font-size: 1.2rem;
  border: none;
  outline: none;
  padding: .5rem 1rem;
  background-color: var(--main-color);
  color: var(--main-font-color);
  border-radius: 0.5rem;
}

.contact-btn:hover {
  background-color: var(--main-hovor-color);
  color: var(--font-hovor-color);
  transition: .3s ease-in-out;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .title h2 {
    font-size: 1.2rem;
  }

  .menu-links {
    text-align: start;
  }
}
</style>
