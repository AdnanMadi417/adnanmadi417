<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

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
    date: 'Mar 2025 – Aug 2025',
    description: `Designed and developed web applications that automated previously manual processes, enhancing workflow efficiency for both users and administrators. Focused on building intuitive, responsive front-end interfaces to improve usability and support seamless user experiences.`
  },
  {
    title: 'Front End Developer',
    company: 'Unibexs',
    date: 'Sep 2025 – Present',
    description: `Building and optimizing modern front-end applications with a focus on performance, scalability, and user experience. Collaborating with cross-functional teams to deliver responsive interfaces, implement design systems, and ensure seamless integration with back-end services.`
  },
  {
    title: 'Front End Developer (Freelance)',
    company: 'Code & Canvas',
    date: 'Oct 2025 – Present',
    description: ` Designing and developing modern user interfaces. Translating UI/UX designs into responsive front-end components.
    Working with clients to improve usability and visual consistency.`
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
      setTimeout(() => {
        visibleItems.value[index] = true;
      }, index * 200);
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
  <section class="timeline-cover" id="working-timeline">
    <div class="timeline-container">
      <div class="section-header">
        <div class="header-eyebrow">Experience</div>
        <h2 class="section-title">
          My Professional Journey
        </h2>
        <p class="section-subtitle">
          Building exceptional digital experiences that drive meaningful impact
        </p>
      </div>
    </div>
    <div class="timeline">
      <ul>
        <li v-for="(step, index) in steps" :key="index">
          <div
              class="content"
              :class="{ hidden: !visibleItems[index] }"
              ref="timelineItems"
          >
            <div class="content-header">
              <div class="date-badge">{{ step.date }}</div>
              <h3>{{ step.title }}</h3>
              <h4>{{ step.company }}</h4>
            </div>
            <div class="content-body">
              <p>{{ step.description }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.timeline-cover {
  position: relative;
  padding: 120px 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--body-bg-color);
  transition: var(--transition);
}

.timeline-container {
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.header-eyebrow {
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--main-color);
  margin-bottom: 24px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  transition: var(--transition);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--font-light-color);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.timeline {
  position: relative;
  z-index: 2;
}

.timeline ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
}

.timeline ul li {
  position: relative;
  margin-bottom: 20px;
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
  background: linear-gradient(180deg,
  transparent 0%,
  var(--accent-color) 5%,
  var(--accent-color) 95%,
  transparent 100%
  );
  border-radius: 1px;
}

.timeline ul li::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 32px;
  width: 12px;
  height: 12px;
  background: var(--accent-color);
  border-radius: 50%;
  border: 4px solid var(--body-bg-color);
  z-index: 3;
  box-shadow: 0 0 0 1px var(--accent-color);
  transition: var(--transition);
}

.timeline ul li .content:hover + .timeline ul li::before,
.timeline ul li:hover::before {
  transform: translateX(-50%) scale(1.2);
  background: var(--accent-hover-color);
  box-shadow: 0 0 0 1px var(--accent-hover-color), 0 0 20px rgba(46, 78, 67, 0.3);
}

.timeline ul li .content {
  position: relative;
  background: var(--card-bg-color);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 20px;
  width: 45%;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 1;

}

.timeline ul li .content.hidden {
  opacity: 0;
}

.timeline ul li:nth-child(odd) .content {
  position: relative;
  left: calc(50% + 30px);
}

.timeline ul li:nth-child(even) .content {
  position: relative;
  left: calc(50% - 30px - 45%);
}

.content-header {
  margin-bottom: 24px;
}

.date-badge {
  display: inline-block;
  padding: 6px 12px;
  background: var(--accent-color);
  color: white;
  border-radius: 20px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-bottom: 6px;
}

.timeline ul li .content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 8px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.timeline ul li .content h4 {
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--font-light-color);
  margin-bottom: 0;
  line-height: 1.4;
}

.content-body {
  position: relative;
}

.timeline ul li .content p {
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--font-color);
  margin: 0;
}

@media (max-width: 768px) {
  .timeline-cover {
    padding: 80px 20px;
  }

  .section-header {
    margin-bottom: 80px;
  }

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

  .timeline ul li {
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .timeline ul li .content h3 {
    font-size: 1.3rem;
  }

  .timeline ul li .content h4 {
    font-size: var(--font-size-base);
  }
}

@media (max-width: 480px) {
  .timeline-cover {
    padding: 60px 16px;
  }

  .timeline ul li .content {
    padding: 32px 24px;
    width: calc(100% - 50px);
    left: 40px !important;
  }

  .section-title {
    font-size: 2rem;
  }

  .timeline ul li .content h3 {
    font-size: 1.2rem;
  }

  .timeline ul li .content p {
    font-size: var(--font-size-sm);
  }
}

/* Smooth scrolling */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

</style>