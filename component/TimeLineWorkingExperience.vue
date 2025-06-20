
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const steps = [
  {
    title: 'Front End Developer',
    company: 'The International Educational Scientific and Cultural Organization (IESCO)',
    description: `Developed a Scholarship Registration System to streamline application workflows, reducing submission time by 40% and processing time by 30%. Designed and implemented user-friendly interfaces, leading to a 25% increase in successful applicant registrations and significantly improving the document submission experience.`
  },
  {
    title: 'Wed  Development Intern (Internship)',
    company: 'Commerce Dot Com (CDC)',
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

    if (rect.top < windowHeight * 0.8) {
      visibleItems.value[index] = true;
    }
  });
};

onMounted(() => {
  setTimeout(checkVisibility, 100); // Initial check after component is rendered
  window.addEventListener('scroll', checkVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility);
});
</script>

<template>
  <section class="timeline-cover">
    <div class="timeline-title">
      <h2>Relevant Experience </h2>
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
            <p>{{ step.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.timeline-cover {
  padding: 20px 0;
  color: var(--main-color);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
}

.timeline-title {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 16px;
}

.timeline-title h2 {
  font-size: 30px;
  font-weight: 600;
  line-height: 56px;
  letter-spacing: -0.5px;
  text-transform: capitalize;
  margin-bottom: 16px;
}

.timeline {
  padding-top: 0;

}

.timeline ul {
  padding-top: 20px;
  list-style-type: none;
}

.timeline ul li {
  background: #9a9a9a;
  position: relative;
  margin: 0 auto;
  width: 2px;
}

.timeline ul li:last-child {
  padding-bottom: 7px;
  width: 0;
  height: 0;
}

.timeline ul li:before {
  content: '';
  background: var(--main-color);
  position: absolute;
  left: 50%;
  top: -32px;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.timeline ul li .hidden {
  opacity: 0;
}

.timeline ul li .content {
  position: relative;
  top: -50px;
  width: 400px;
  transition: opacity 0.7s ease;
}

.timeline ul li .content.hidden {
  opacity: 0;
}

.timeline ul li .content .badge {
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000;
  display: inline-block;
  padding: 6px 12px;
  background: var(--main-color);
  border-radius: 1000px;
}

.timeline ul li .content h3 {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: var(--main-color);
  margin: 16px 0 8px;
}

.timeline ul li .content h4 {
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: var(--main-color);
  margin: 16px 0 8px;
}

.timeline ul li .content p {
  color: var(--main-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.timeline ul li:nth-child(odd) .content {
  left: 70px;
}

.timeline ul li:nth-child(odd) .content:before {
  left: -38px;
}

.timeline ul li:nth-child(even) .content {
  left: calc(-400px - 70px);
}

.timeline ul li:nth-child(even) .content:before {
  right: -38px;
}

@media screen and (max-width: 1020px) {
  .timeline ul li .content {
    width: 41vw;
  }

  .timeline ul li:nth-child(even) .content {
    left: calc(-41vw - 45px);
  }
}

@media screen and (max-width: 700px) {
  .timeline-cover {
    padding: 32px 0;
  }

  .timeline-title {
    text-align: left;
  }

  .timeline {
    padding-top: 32px;
  }

  .timeline ul li {
    margin-left: 48px !important;
  }

  .timeline-title h2 {
    font-size: 24px;
    line-height: 44px;
    letter-spacing: 0.08px;
  }

  .timeline ul li {
    margin-left: 20px;
  }

  .timeline ul li .content {
    width: calc(100vw - 100px);
    transition: 0.2s;
  }

  .timeline ul li .content p {
    min-height: 110px;
  }

  .timeline ul li:nth-child(even) .content {
    left: 38px;
  }

  .timeline ul li:nth-child(even) .content:before {
    left: -33px;
  }

  .timeline ul li:nth-child(odd) .content {
    left: 38px;
  }
}
</style>