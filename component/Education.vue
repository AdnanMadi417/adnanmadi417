<script setup lang="ts">

</script>

<template>
  <div class="education-sec" id="education">
    <div class="container">
      <div class="box-content">
        <h3>Bachelor of Computer Science</h3>
        <hr class="divider"/>

        <h2>Albukhary International University
          <span>2022-2025</span>
        </h2>
        <p>
          I am currently completing my internship as part of my final semester for the Bachelor of Computer Science
          (Honours) program at Albukhary International University (AIU). Throughout my studies at AIU’s School of
          Computing and Informatics (SCI), I have built a strong technical foundation while embracing AIU’s 5A Core
          Values—Adab, Akhlak, Amanah, Aqidah, and Amalan—which shape ethical and socially responsible graduates. The
          curriculum, focused on problem-solving, leadership, and community impact, has prepared me to apply innovative,
          sustainable digital solutions and to contribute as a compassionate, adaptable professional both locally and
          globally.
        </p>
      </div>
      <div class="image-container">
        <img src="/images/aiu%20pic.jpg" alt="aiu">
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.education-sec {
  padding: 5rem 1rem;
}

.container {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 2rem;
  animation: fadeInUp 1s ease forwards;
}

.box-content h3 {
  font-size: 2rem;
  color: var(--main-color);
  margin-bottom: 1rem;
}

.divider {
  border-bottom: 3px solid var(--main-color);
  margin: 1rem 0;
}

.box-content h2 {
  font-size: 1.15rem;
  color: var(--main-color);
  margin-bottom: 1rem;
}

.box-content p {
  line-height: 1.6;
  color: var(--main-color);
}

.box-content {
  flex: 1 1 55%;
  max-width: 750px;
  text-align: justify;
  line-height: 1.75rem;
  font-size: 1rem;
  padding: 1rem;
  margin: 2rem auto;
  animation: fadeInLeft 1.2s ease forwards;
}

.image-container {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  max-width: 300px;
  animation: fadeInRight 1.2s ease forwards;
}

.image-container img {
  width: 100%;
  max-width: 300px;
  max-height: 400px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image-container img:hover {
  transform: scale(1.05);
}

</style>
