---
layout: page
title: "Home"
class: home
---

# **Hello, I'm HYEMIN BANG**
## I am _____

<div class="columns" markdown="1">

<div class="intro" markdown="1">

I'm a student at [Massachusetts Institute of Technology](https://www.mit.edu/). I design and build interactive systems for visualization and analysis. At CMU, I co-lead the [Data Interaction Group](https://dig.cmu.edu/).

I like this and that 


Find me on [GitHub](https://github.com/domoritz) or [LinkedIn](https://www.linkedin.com/in/dominik-moritz-409b8124/).
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
    <a class="button" href="http://angieboggust.com/cv_angieboggust.pdf">
      <div><b>CV</b></div>
    </a>
    <a class="button" href="https://scholar.google.com/citations?user=pQd1HSK5lzEC">
      <div><i class="fa-solid fa-graduation-cap"></i></div>
    </a>
    <a class="button" href="https://github.com/aboggust">
      <div><i class="fa-brands fa-github"></i></div>
    </a>
    <a class="button" href="https://www.linkedin.com/in/angieboggust/">
      <div><i class="fa-brands fa-linkedin-in"></i></div>
    </a>
  </div>
</div>

<a href="mailto:{{ site.email }}">{{ site.email }}</a>




</div>
</div>


## Featured Projects
<div class="featured-projects">
  {% for project in site.data.projects %}
    <div class="project">
      <div class="preview-image" style="background-image: url('/images/projects/{{ project.image }}');"></div>
      <div class="project-content">
        <div class="title"><a href="{{ project.url }}">{{ project.title }}</a></div>
        <p>{{ project.description }}</p>
        <div class="links">
          {% if project.code %}
            <a href="{{ project.code }}">Code</a>
          {% endif %}
          {% if project.paper %}
            <a href="{{ project.paper }}">Paper</a>
          {% endif %}
          {% if project.video %}
            <a href="{{ project.video }}">Video</a>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>


## Featured Publication 
<div class="featured-publications">

</div>

