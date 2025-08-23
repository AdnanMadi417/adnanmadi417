<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const steps = [
  {
    title: 'Front End Developer',
    company: 'The International Educational Scientific and Cultural Organization (IESCO)',
    date: 'Apr 2024 – Aug 2024',
    description: `Developed a Scholarship Registration System to streamline application workflows, reducing submission time by 40% and processing time by 30%. Designed and implemented user-friendly interfaces, leading to a 25% increase in successful applicant registrations and significantly improving the document submission experience.`
  },
  {
    title: 'Web Development Intern (Internship)',
    company: 'Commerce Dot Com (CDC)',
    date: 'Mar 2025 – Present',
    description: `Designed and developed web applications that automated previously manual processes, enhancing workflow efficiency for both users and administrators. Focused on building intuitive, responsive front-end interfaces to improve usability and support seamless user experiences.`
  },
];

const timelineItems = ref([]);
const visibleItems = ref(steps.map(() => false));

const checkVisibility = () => {
  if (!timelineItems.value.length) return;
  timelineItems.value.forEach((item, index) => {
    if (!item) return;
    const rect = item.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight * 0.85) {
      visibleItems.value[index] = true;
    }
  });
};

onMounted(() => {
  setTimeout(checkVisibility, 100);
  window.addEventListener('scroll', checkVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility);
});
</script>

<template>
  <section class="timeline-cover">
    <div class="timeline-title">
      <h2>Relevant Experience</h2>
    </div>
    <div class="timeline">
      <ul>
        <li v-for="(step, index) in steps" :key="index">
          <div
              class="content"
              :class="{ hidden: !visibleItems[index] }"
              ref="timelineItems"
          >
            <h3>{{ step.title }}</h3>
            <h4>{{ step.company }}</h4>
            <span class="date">{{ step.date }}</span>
            <p>{{ step.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.timeline-cover {
  padding: 60px 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--body-bg-color);
}

.timeline-title {
  text-align: center;
  margin-bottom: 40px;
}

.timeline-title h2 {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: var(--secondary-color);
}

.timeline ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
}

.timeline ul li {
  position: relative;
  margin-bottom: 60px;
}

.timeline ul li:last-child {
  margin-bottom: 0;
}

.timeline ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--card-bg-color);
}

.timeline ul li::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 14px;
  height: 14px;
  background: var(--accent-color);
  border-radius: 50%;
  border: 3px solid var(--accent-hover-color);
  z-index: 1;
}

.timeline ul li .content {
  background: var(--card-bg-color);
  padding: 24px;
  border-radius: 16px;
  width: 42%;
  transition: all 0.6s ease;
  opacity: 1;
}

.timeline ul li .content.hidden {
  opacity: 0;
  transform: translateY(40px);
}

.timeline ul li:nth-child(odd) .content {
  position: relative;
  left: calc(50% + 30px);
}

.timeline ul li:nth-child(even) .content {
  position: relative;
  left: calc(50% - 30px - 42%);
}

.timeline ul li .content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 8px;
}

.timeline ul li .content h4 {
  font-size: 1rem;
  font-weight: 500;
  color: var(--font-light-color);
}

.timeline ul li .content .date {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--font-light-color);
  display: block;
  margin-bottom: 12px;
}

.timeline ul li .content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--font-color);
}

@media (max-width: 768px) {
  .timeline ul::before {
    left: 20px;
  }

  .timeline ul li::before {
    left: 20px;
    transform: none;
  }

  .timeline ul li .content {
    width: calc(100% - 60px);
    left: 50px !important;
  }
}
</style>
