<script setup lang="ts">

</script>

<template>
  <div class="education-sec">
    <div class="container">
      <div class="box-content">
        <h3>Bachelor of Computer Science</h3>
        <hr class="divider"/>

        <h2>Albukhary International University
          <span>2022-2025</span>
        </h2>
        <p>
          I am a final-semester Bachelor of Computer Science (Honours) student at Albukhary International University
          (AIU), where I’ve developed a strong foundation in computer science through AIU’s School of Computing and
          Informatics (SCI). The program not only equips students with technical expertise but also instills AIU's 5A
          Core Values—Adab, Akhlak, Amanah, Aqidah, and Amalan—fostering well-rounded, ethical, and socially responsible
          graduates. Through a curriculum focused on problem-solving, leadership, and community impact, I am prepared to
          apply innovative, sustainable digital solutions and serve as a compassionate, adaptable professional ready to
          make a positive impact locally and globally.
        </p>
      </div>
      <div class="image-container">
        <img src="/images/aiu%20pic.jpg" alt="aiu">
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-sec {
  padding: 2rem 1rem;
}

.container {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
  background-color: var(--font-hovor-color);
  padding: 1rem;
  border-radius: 2rem;
}

.box-content {
  flex: 1 1 55%;
  max-width: 750px;
  text-align: justify;
  line-height: 1.75rem;
  font-size: 1rem;
  padding: 1rem;
  margin: 2rem auto;
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

.image-container {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;
}

.image-container img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .box-content, .image-container {
    flex: 1 1 100%;
  }

  .image-container img {
    max-width: 300px;
  }
}
</style>
