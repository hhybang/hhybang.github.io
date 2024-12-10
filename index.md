---
layout: page
title: ""
class: home
---

# **Hello, I'm Hyemin (Helen) Bang**
<!-- ## I'm an MEng student at MIT studying AI + HCI. -->
<!-- ### This website is under construction.  -->

<div class="columns" markdown="1">

<div class="intro" markdown="1">
<p> I'm a Master's student at MIT, working with [Arvind Satyanarayan](https://arvindsatya.com/) in the [MIT CSAIL Visualization Group](https://vis.csail.mit.edu/). My research focuses on human-centered AI, developing interpretable AI systems that allign with human reasoning to empower uesrs to make confident, informed decissions. </p>

<p> Prior to this, I graduated from MIT with a BS in Computer Science and Engineering and worked as a Systems Developer at InterSystems. </p>
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
    <a class="button" href="https://github.com/hhybang">
      <div><i class="fa-brands fa-github"></i></div>
    </a>
    <a class="button" href="https://www.linkedin.com/in/hyeminbang/">
      <div><i class="fa-brands fa-linkedin-in"></i></div>
    </a>
  </div>
</div>

<a href="mailto:{{ site.email }}">{{ site.email }}</a>
</div>
</div>


## Research
<div class="research">
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