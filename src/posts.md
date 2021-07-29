---
layout: base
title: Behold, My Stuff.
pagination:
    data: collections.general
    size: 2
    alias: posts
---

### Le Posts

Using njk for loop:

```
{%- for post in collections.general %}

-   [{{ post.data.title }}]({{ post.url }})
    {%- endfor %}
```

{%- for post in collections.general %}

-   [{{ post.data.title }}]({{ post.url }})
    {%- endfor %}

## Le Posts, Paginated edition

{%- for post in posts %}

-   [{{ post.data.title }}]({{ post.url }})
    {%- endfor %}

{% if pagination.href.previous %}
<a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
<a href="{{pagination.href.next}}">Next Page</a>
{% endif %}
