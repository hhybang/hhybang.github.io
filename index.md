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
<div class="row intro-links">

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
  <div class="row intro-links">
  <a class="button" id="email" href="mailto:aboggust@csail.mit.edu">
  <div>aboggust@csail.mit.edu</div>
  </a>
  
</div>
</div>
</div>

During my first year at UW, I received support from the [Fulbright program](https://en.wikipedia.org/wiki/Fulbright_Program). In 2013, I received my B.S. from [Hasso Plattner Institute](https://hpi.de/). I am a scholar of the [German National Academic Foundation](http://www.studienstiftung.de/). I have worked with the [Open Knowledge Foundation](http://www.okfn.org), [Google Research](https://ai.google/research/), [Microsoft Research](https://www.microsoft.com/en-us/research/group/vibe/), and others. Details are in my [CV]({{ "/cv/" | relative_url }}).

## Featured <a href="{{ "/projects/" | relative_url }}">Projects</a>

<div class="featured-projects">
  {% assign sorted_projects = site.data.projects | sort: 'highlight' %}
  {% for project in sorted_projects %}
    {% if project.highlight %}
      {% include project.html project=project %}
    {% endif %}
  {% endfor %}
</div>

<a href="{{ "/projects/" | relative_url }}" class="button">
  <i class="fas fa-chevron-circle-right"></i>
  Show More Projects
</a>

## Featured <a href="{{ "/publications/" | relative_url }}">Publications</a>

<div class="featured-publications">
  {% assign sorted_publications = site.publications | sort: 'year' | reverse %}
  {% for pub in sorted_publications %}
    {% if pub.highlight %}
      <a href="{{ pub.pdf }}" class="publication">
        <strong>{{ pub.title }}</strong>
        <span class="authors">{% for author in pub.authors %}{{ author }}{% unless forloop.last %}, {% endunless %}{% endfor %}</span>.
        <i>{% if pub.venue %}{{ pub.venue }}, {% endif %}{{ pub.year }}</i>.
        {% for award in pub.awards %}<br/><span class="award"><i class="fas fa-{% if award == "Best Paper Award" %}trophy{% else %}award{% endif %}" aria-hidden="true"></i> {{ award }}</span>{% endfor %}
      </a>
    {% endif %}
  {% endfor %}
</div>

<a href="{{ "/publications/" | relative_url }}" class="button">
  <i class="fas fa-chevron-circle-right"></i>
  Show All Publications
</a>
