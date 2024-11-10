<script setup lang="ts">

const certificates = [
  {
    icon: "mdi:web",
    title: "Front-End Development",
    date: "2024",
    description: "An introductory course on front-end development concepts, focusing on building responsive and interactive web applications.",
    from: "Corsesara"
  },
  {
    icon: "mdi:language-javascript",
    title: "JavaScript Programming",
    date: "2023",
    description: "An in-depth course on JavaScript, covering syntax, core concepts, and best practices for creating dynamic web pages.",
    from: "Corsesara"
  },
  {
    icon: "mdi:language-html5",
    title: "HTML Programming",
    date: "2023",
    description: "This course covers HTML fundamentals, enabling students to structure web content effectively and create accessible web pages.",
    from: "Corsesara"
  },
  {
    icon: "mdi:language-java",
    title: "Java Programming",
    date: "2022",
    description: "A comprehensive course on Java programming, focusing on object-oriented concepts and backend development essentials.",
    from: "Corsesara"
  },
  {
    icon: "mdi:code-braces",
    title: "Programming Fundamentals",
    date: "2022",
    description: "An introductory course to core programming concepts, algorithms, and problem-solving skills applicable across various languages.",
    from: "Corsesara"
  }
];


</script>

<template>
  <div class="certificate-sec">
    <h1>
      Online Certifications
    </h1>
    <div class="container">
      <div class="card" v-for="certificate in certificates" :key="certificate.title">
        <h2>
          <span>
            <UIcon
                :name="certificate.icon"
            />
          </span>
          {{ certificate.title }}
        </h2>
        <h4>{{ certificate.date }}</h4>
        <p>{{ certificate.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.certificate-sec h1 {
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
}

.container {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem 2rem;
}

.container .card {
  flex: 1 1 250px;
  width: 100%;
  max-width: 250px;
  height: 250px;
  max-height: 250px;
  padding: 1rem;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  border-radius: 1rem 0;
}

.card h2{
  font-size: 1rem;
  margin: 1rem 0;
}

.card p {
  text-align:justify;
  margin: .5rem 0;
}

</style>