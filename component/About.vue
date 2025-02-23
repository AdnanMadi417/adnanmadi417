<script setup lang="ts">

</script>


<template>
  <section class="about-sec" id="about">
    <h2>About Me</h2>
    <div class="main-container">
      <div class="content">
        <p>
          Welcome to my profile! I'm a Front-End Web Developer passionate about web development and programming.
          With a strong foundation in coding, I aim to create efficient, user-friendly websites.
        </p>
        <p>
          I strive to continuously grow in the tech industry, advancing my skills and staying updated on the latest
          trends. My enthusiasm for technology drives me to deliver quality work consistently.
        </p>
        <p>
          Currently pursuing Computer Science at Albukhary International University, I have also completed various
          courses in web design and programming, helping me understand business needs and consumer trends effectively.
        </p>
      </div>
      <div class="image-content">
        <img src="/images/cs.png" alt="web developer" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-sec {
  width: 100%;
  padding: 2rem 1rem;
}

.about-sec h2 {
  font-size: 2.5rem;
  text-align: center;
  color: var(--main-color);
  margin-bottom: 2rem;
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

.content p {
  text-align: justify;
  line-height: 1.75rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.image-content img {
  width: 100%;
  max-width: 350px;
  max-height: 350px;
  margin: auto;
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