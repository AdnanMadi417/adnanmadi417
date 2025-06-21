<script setup lang="ts">
interface Item {
  id: number
  paragraph: string
}

const items = ref<Item[]>([
  {
    id: 1,
    paragraph: "I’m a Software Engineer with a strong foundation in frontend development (Vue.js, Nuxt.js) and backend integration using Python and Django. I specialize in building responsive user interfaces, secure admin panels, and real-time features that streamline workflows and enhance user experience."
  },
  {
    id: 2,
    paragraph: "During my studies at Albukhary International University, I led the development of systems such as the Hostel Management System, which significantly reduced manual administrative work and improved operational efficiency. I also contributed to projects that streamlined workflows, integrated automated notifications, and enhanced reporting capabilities."
  },
  {
    id: 3,
    paragraph: "I am passionate about delivering high-quality digital solutions through clean, maintainable code. With a strong foundation in software engineering and a continuous drive to learn, I aim to build technologies that solve real-world problems and align with organizational goals."
  }
]);

</script>

<template>
  <section class="about-sec" id="about">
    <h2>About Me</h2>
    <div class="main-container">
      <div class="content">
        <p v-for="item in items" :key="item.id" class="content-item">
          {{ item.paragraph }}
        </p>
      </div>
      <div class="image-content">
        <img src="/images/adnan%20photo%203%20.jpg" alt="web developer" class="image-item"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

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
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.about-sec {
  width: 100%;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-sec h2 {
  font-size: 2.5rem;
  text-align: center;
  color: var(--main-color);
  margin-bottom: 2rem;
  animation: fadeIn 1s ease forwards;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  gap: 2rem;
}

.content {
  max-width: 600px;
}

.content-item {
  text-align: justify;
  line-height: 1.75rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: slideUp 1.5s ease forwards;
}

.content-item:nth-child(1) {
  animation-delay: 0.3s;
}

.content-item:nth-child(2) {
  animation-delay: 0.6s;
}

.content-item:nth-child(3) {
  animation-delay: 0.9s;
}

.image-content {
  text-align: center;
  animation: fadeInLeft 1.5s ease forwards;
  opacity: 0;
}

.image-content img {
  width: 100%;
  max-width: 300px;
  max-height: 350px;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 768px) {
  .main-container {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }

  .content, .image-content {
    flex: 1;
  }

  .content {
    padding-right: 2rem;
  }
}
</style>
