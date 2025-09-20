<script setup>
// No extra scripts needed right now
</script>

<template>
  <section class="education-sec" id="education">
    <div class="container">

      <div class="box-content">
        <h3 class="headline">Bachelor of Computer Science (Honours)</h3>
        <h2 class="subheadline">
          Albukhary International University
          <span class="duration">2022–2025</span>
        </h2>

        <p class="description">
          My studies at AIU’s School of Computing and Informatics (SCI) equipped me with a strong technical foundation
          and emphasized problem solving, leadership, and community impact. This has prepared me to design innovative
          and sustainable digital solutions while remaining a compassionate, adaptable professional.
        </p>
      </div>

      <div class="image-container">
        <img src="/images/aiu%20scholarship%20poster.jpeg" alt="Albukhary International University"/>
      </div>

    </div>
  </section>
</template>

<style scoped>
.education-sec {
  padding: 8rem 2rem;
  background: var(--body-bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4rem;
  transition: all 0.3s ease;
}

.box-content {
  flex: 1 1 55%;
  max-width: 650px;
  text-align: left;
  animation: fadeInUp 1.2s ease forwards;
}

.headline {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--font-color);
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
}

.duration {
  display: block;
  font-size: 1rem;
  color: var(--font-light-color);
  margin-top: 0.5rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--font-light-color);
  letter-spacing: -0.2px;
}

.image-container {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 1.4s ease forwards;
}

.image-container img {
  width: 100%;
  max-width: 400px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.image-container img:hover {
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
