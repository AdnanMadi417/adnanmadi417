<script setup lang="ts">
interface Item {
  id: number
  paragraph: string
}

const items = ref<Item[]>([
  {
    id: 1,
    paragraph: "Welcome to my profile! I'm a Web Developer passionate about building efficient, user-friendly websites and solving real-world problems through technology. With a strong foundation in coding and a drive to continuously improve, I strive to stay updated with the latest trends in the tech industry."
  },
  {
    id: 2,
    paragraph: "My experience at AIU’s School of Computing and Informatics (SCI), combined with completing various web development and programming courses, has equipped me with both technical expertise and a deeper understanding of business needs and consumer trends."
  },
  {
    id: 3,
    paragraph: "Fueled by a passion for innovation and growth, I am committed to delivering high-quality digital solutions that make a positive impact."
  },
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
