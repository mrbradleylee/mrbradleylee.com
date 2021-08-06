---
layout: base.njk
title: Stuff I Wrote
eleventyNavigation:
    key: Posts
    order: 3
pagination:
    data: collections.general
    size: 3
    alias: posts
---

![Posts](/resources/img/posts.svg)

{%- for post in posts %}

<article>
<h2>✏️ <a href="{{ post.url }}">{{ post.data.title }}</a></h2>
<div class="postheader">
<ul>
{% for tag in post.data.tags %}
<li>{ <span class="posttag">{{ tag }}</span> }</li>
{% endfor %}
</ul>
<span class="postdate">{{ post.date | postDate }}</span>
</div>

<div class="postexcerpt">{{ post.data.page.excerpt | md }}</div>
</article>

{%- endfor %}

<div class="postpagination">
{% if pagination.href.previous %}
<a href="{{pagination.href.previous}}">Previous</a>
{% endif %}
{% if pagination.href.next %}
<a href="{{pagination.href.next}}">Next</a>
{% endif %}
</div>
