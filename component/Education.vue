<template>
  <div class="education-sec" id="education">
    <div class="container">
      <div class="box-content">
        <h3>Bachelor of Computer Science</h3>
        <hr class="divider" />

        <h2>
          Albukhary International University
          <span>2022–2025</span>
        </h2>
        <p>
          I am currently completing my internship as part of my final semester
          for the Bachelor of Computer Science (Honours) program at Albukhary
          International University (AIU). Throughout my studies at AIU’s School
          of Computing and Informatics (SCI), I have built a strong technical
          foundation while embracing AIU’s 5A Core Values—Adab, Akhlak, Amanah,
          Aqidah, and Amalan—which shape ethical and socially responsible
          graduates. The curriculum, focused on problem solving, leadership,
          and community impact, has prepared me to apply innovative, sustainable
          digital solutions and to contribute as a compassionate, adaptable
          professional both locally and globally.
        </p>
      </div>

      <div class="image-container">
        <img src="/images/aiu%20pic.jpg" alt="aiu" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-sec {
  padding: 6rem 2rem;
  background-color: var(--body-bg-color);
}

.container {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  gap: 3rem;
  background-color: var(--card-bg-color);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.box-content {
  flex: 1 1 55%;
  max-width: 700px;
  text-align: left;
  animation: fadeInLeft 1.2s ease forwards;
}

.box-content h3 {
  font-size: 2.25rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 0.75rem;
  letter-spacing: -0.5px;
}

.divider {
  border: none;
  height: 2px;
  background: var(--accent-color);
  width: 60px; /* slightly longer */
  margin: 1rem 0 2rem 0;
  border-radius: 2px;
}

.box-content h2 {
  font-size: 1.35rem; /* slightly bigger subheading */
  font-weight: 500;
  color: var(--font-color);
  margin-bottom: 1rem;
}

.box-content h2 span {
  display: block;
  font-size: 1rem; /* larger year text */
  color: var(--font-light-color);
  margin-top: 0.5rem;
}

.box-content p {
  line-height: 1.8;
  font-size: 1rem;
  color: var(--font-light-color);
}

.image-container {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInRight 1.2s ease forwards;
}

.image-container img {
  width: 100%;
  max-width: 450px; /* bigger Apple-style image */
  height: auto;
  border-radius: 20px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-container img:hover {
  transform: scale(1.04);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
