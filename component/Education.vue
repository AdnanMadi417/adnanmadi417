<script setup lang="ts">
</script>

<template>
  <section class="education-sec" id="education-sec">

    <div class="section-header" data-aos="fade-up">
      <h4 class="headline">My Academic Journey</h4>
    </div>

    <div class="main-container">


      <div class="content">

        <div class="box-content">

          <h2 class="subhead-line">
            Albukhary International University
            <span class="duration">2022–2025</span>
          </h2>

          <h3 class="headline">Bachelor of Computer Science (Honours)</h3>

          <p class="description">
            My studies at AIU’s School of Computing and Informatics (SCI) equipped me with a strong technical foundation
            and emphasized problem solving, leadership, and community impact. This has prepared me to design innovative
            and sustainable digital solutions while remaining a compassionate, adaptable professional.
          </p>
        </div>

      </div>
      <div class="image-content">
        <img src="/public/images/aiu-scholarship-poster.jpeg" alt="aiu" class="image-item"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-sec {
  width: 100%;
  padding: 2rem 1rem;
  background-color: var(--body-bg-color);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header .headline {
  font-size: var(--font-size-h1);
  font-weight: 700;
  color: var(--main-color);
}

.education-sec h2 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: start;
  color: var(--main-color);
  margin-bottom: 0;
  animation: fadeIn 1s ease forwards;
}

.headline{
  font-size: 1rem;
  margin-bottom: 1.2rem;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.content {
  max-width: 650px;
}

.box-content {
  font-size: 1.05rem;
  line-height: 1.9rem;
  text-align: justify;
  color: var(--font-light-color);
  margin-bottom: 1.8rem;
  opacity: 0;
  animation: slideUp 1.5s ease forwards;
}

.box-content:nth-child(1) { animation-delay: 0.3s; }
.box-content:nth-child(2) { animation-delay: 0.6s; }
.box-content:nth-child(3) { animation-delay: 0.9s; }

.image-content {
  text-align: center;
  opacity: 0;
  animation: fadeInLeft 1.5s ease forwards;
}

.image-content img {
  width: 100%;
  max-width: 450px;
  border-radius: 24px;
  box-shadow: 0 12px 36px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-content img:hover {
  transform: scale(1.03);
  box-shadow: 0 16px 48px rgba(0,0,0,0.12);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
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
