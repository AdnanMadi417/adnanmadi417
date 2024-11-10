<script setup lang="ts">
</script>

<template>
  <section class="landing-section">
    <div class="container">
      <div class="text-content">
        <h1 class="name">Adnan Madi</h1>
        <p class="title">Web Developer</p>
        <p class="description">
          I am a Front-end developer and mostly I am passionate on web coding. I am an expert on web programming
          and the developing world.
        </p>
        <a class="cta-button" target="_blank"
           href="https://drive.google.com/drive/folders/1KPjUYgA2UoKv1pRXHVTwPJIvJZ6b1f00?usp=sharing">To Review my CV
          <span>
            <UIcon
                class="icon"
                name="maki-arrow"
            />
          </span>
        </a>
      </div>
      <div class="image-content">
        <img src="/images/adnan%20photo%203%20.jpg" alt="Adnan Madi" class="profile-image"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.landing-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(130deg, var(--main-hovor-color) 25%, var(--main-color) 75%);
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
  gap: 2rem;
  color: white;
}

.text-content {
  max-width: 600px;
}

.name {
  font-size: 5rem;
  font-weight: bold;
  margin: 0;
}

.title {
  font-size: 3rem;
  margin: 0.5rem 0;
  color: var(--main-font-color);
}

.description {
  font-size: 1rem;
  margin: 1rem 0 2rem 0;
  line-height: 1.5;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: var(--main-color);
  color: var(--main-hovor-color);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: var(--font-hovor-color);
  transition: .4s ease-in-out;
}

.icon {
  padding: 0.5rem;
}

@media (max-width: 1200px) {

  .container {
    flex-direction: column;
    margin: 5rem 0;
    padding: 1rem;
    gap: 5rem;
  }
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
}

@media (min-width: 1200px) {
  .container {
    flex-direction: row;
    text-align: left;
  }

  .text-content {
    text-align: left;
    padding-right: 2rem;
  }
}

@media (max-width: 1200px) {
  .name {
    font-size: 3rem;
  }

  .title {
    font-size: 2rem;
    color: var(--main-font-color);
  }
}

</style>
