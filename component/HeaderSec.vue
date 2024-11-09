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
            <router-link to="/home">
              <span class="icon">
                <UIcon class="icon-link" name="material-symbols-home"/>
              </span>
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <span class="icon">
                <UIcon class="icon-link" name="material-symbols-info"/>
              </span>
              About
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              <span class="icon">
                <UIcon class="icon-link" name="material-symbols-contact-mail"/>
              </span>
              Contact
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header-section {
  background-color: var(--main-font-color);
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
  color: var(--main-color);
}

.menu-links li:last-child {
  margin-right: 0;
}

.icon-link {
  margin-right: 0.5rem;
  color: var(--main-color);
}

.menu-links li:hover,
.menu-links span:hover {
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

@media (min-width: 768px) and (max-width: 1024px) {
  .title h2 {
    font-size: 1.2rem;
  }

  .menu-links {
    text-align: start;
  }
}
</style>
