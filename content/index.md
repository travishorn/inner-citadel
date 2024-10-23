---
title: Home
footer: Inner Citadel © by Travis Horn is licensed under CC BY-SA 4.0
---

<div style="text-align:center;margin-top:50px">
  <img style="width:100%;max-width:300px" alt="A castle made of white stone with an indigo roof perched atop a floating island covered in green grass and trees. A waterfall cascades down the side of the island." :src="$withBase('/images/castle-floating-island.webp')">
</div>

This is a guide for anyone who wants to live a fulfilling life, find
tranquility, and have a solid plan when facing adversity. Everything you read
here has its roots in ancient Stoic philosophy.

<div class="featured">
  <div>
    <RouteLink to="cardinal-virtues">Cardinal Virtues</RouteLink>
    <p>
      <strong>Wisdom</strong>, <strong>courage</strong>, <strong>justice</strong>, and <strong>temperance</strong> are the foundation for living a life of virtue. Focus on them and you will find the path to true happiness and flourishing.
    </p>
  </div>
  <div>
    <RouteLink to="dichotomy-control">The Dichotomy of Control</RouteLink>
    <p>
    Everything in life can be split into two categories: what is <strong>within your
control</strong> and what is <strong>outside your control</strong>. Avoid suffering and focus on what truly matters.
    </p>
  </div>
  <div>
    <RouteLink to="emotional-resilience">Emotional Resilience</RouteLink>
    <p>
    Master passions and overcome destructive emotions. Emotions like anger and fear disrupt your peace of mind. They can be overcome by <strong>controlling
emotions through reason</strong>.
    </p>
  </div>
  <div>
    <RouteLink to="key-practices-exercises">Key Practices & Exercises</RouteLink>
    <p>
    <strong>Prepare</strong> for emotional challenges, <strong>reframe</strong> negative events, <strong>examine</strong>
your thoughts, <strong>detach</strong> from external things, and <strong>live</strong> according to
nature.
    </p>
  </div>
</div>

<style>
  .featured {
    display: grid;
    gap: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 5rem;
  }

  @media (min-width: 960px) {
    .featured {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
