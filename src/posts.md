---
layout: base.njk
title: ✏️ Behold, My Stuff.
eleventyNavigation:
    key: Posts
    order: 3
pagination:
    data: collections.general
    size: 2
    alias: posts
---

{%- for post in posts %}

<article>
<h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2><span class="postdate">{{ post.date | postDate }}</span>

<div class="postexcerpt">{{ post.data.page.excerpt | md }}</div>
</article>

{%- endfor %}

{% if pagination.href.previous %}
<a href="{{pagination.href.previous}}">Previous</a>
{% endif %}
{% if pagination.href.next %}
<a href="{{pagination.href.next}}">Next</a>
{% endif %}
