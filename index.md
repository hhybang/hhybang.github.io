---
layout: page
title: ""
class: home
---

# **Hello, I'm Hyemin (Helen) Bang**
### I'm an MEng student at MIT studying AI + HCI.
<!-- ### This website is under construction.  -->

<div class="columns" markdown="1">

<div class="intro" markdown="1">
I work with [Arvind Satyanarayan](https://arvindsatya.com/) in the [MIT CSAIL Visualization Group](https://vis.csail.mit.edu/). My research focuses on human-centered AI, studying how to develop interpretable AI systems that align with human reasoning and empower users to make confident, informed decisions.

Previously, I earned a Bachelor of Science in Computer Science and Engineering from [MIT](https://mit.edu/). After graduating, I worked as a Systems Developer at [InterSystems](https://intersystems.com/), where I integrated machine learning capabilities into large-scale database platforms.
</div>

<div class="me" markdown="1">

<picture>
  <source srcset='/images/hmbang.webp' type='image/webp' />
  <img
    src='/images/hmbang.jpg'
    alt='Hyemin Bang'>
</picture>


<div style="display: flex; justify-content: center;">
  <div class="link-buttons">
    <a class="button" href="https://drive.google.com/file/d/10CfkCFo01MXuVk6zRN9A-EmL7QRCjUII/view?usp=sharing">
      <div><b>CV</b></div>
    </a>
<!--     <a class="button" href="https://scholar.google.com/citations?user=pQd1HSK5lzEC">
      <div><i class="fa-solid fa-graduation-cap"></i></div>
    </a> -->
    <!-- <a class="button" href="https://github.com/hhybang">
      <div><i class="fa-brands fa-github"></i></div>
    </a> -->
    <a class="button" href="https://www.linkedin.com/in/hyeminbang/">
      <div><i class="fa-brands fa-linkedin-in"></i></div>
    </a>
    <a class="button" href="mailto:{{ site.email }}">
      <div><i class="fa-solid fa-envelope"></i></div>
    </a>
  </div>
</div>

<!-- <a href="mailto:{{ site.email }}">{{ site.email }}</a> -->
</div>
</div>


## Research
<div class="research">
  <!-- {% for project in site.data.projects %} -->
    <div class="project">
      <!-- <div class="preview-image" style="background-image: url('/images/projects/{{ project.image }}');"></div> -->
      <div class="project-content">
        <div class="title"><a href="https://vis.csail.mit.edu/pubs/explanation-alignment/">{{ "Explanation Alignment: Quantifying the Correctness of Model Reasoning At Scale" }}</a></div>
        <p>{{ project.description }}</p>
        <div class="links">
          <!-- {% if project.code %} -->
            <a href="https://github.com/mitvis/explanation_alignment">Code</a>
          <!-- {% endif %}
          {% if project.paper %} -->
            <a href="https://vis.csail.mit.edu/pubs/explanation-alignment.pdf">Paper</a>
        </div>
      </div>
    </div>
  <!-- {% endfor %} -->
</div>