{% set navPages = collections.all | filterCollection([{ by: 'lang', value:
lang }, { by: 'parent', value: undefined }]) | eleventyNavigation %}

{% if navPages | length %}

<header class="site-header">
    <nav class="cluster">
    <!-- Main pages navigation -->
    <a href="{{ '/' | locale_url }}">
    {% image src="/_images/reperes-asbl-logo-sans-bords-rvb-33.webp", alt="Logo Reperes ASBL", title="Logo Reperes ASBL", width="52", loading="eager"%}
    </a>
    {# {{ navPages | eleventyNavigationToHtml | safe }} #}
    <ul role="list" id="main-nav" class="cluster">
        {% for link in navPages %}
        <li>
        {# prettier-ignore #}
        <a
            href="{{link.url}}"
            hreflang="{{link.lang}}"
            {% if link.url == page.url %}aria-current="page"{% endif %}
            >{{link.title}}</a
        >
        </li>
        {% endfor %}
    </ul>

    <!-- Language navigation -->
    {% if page.url | locale_links | length %}
    <ul role="list" id="lang-nav">
        {% for link in page.url | locale_links("all") %}
        <li>
        <a
            href="{{link.url}}"
            hreflang="{{link.lang}}"
            aria-current="{{ 'page' if link.lang === page.lang else 'false' }}"
            ><abbr lang="{{link.lang}}" title="{{link.label}}"
            >{{link.lang | upper}}</abbr></a>
        </li>
        {% endfor %}
    </ul>
    {% endif %}
    </nav>

</header>
{% endif %}

{% css %}

.site-header {
background-color: var(--color-bg);
border-radius: 0 0 var(--radius-card) var(--radius-card);
box-shadow: 0px 3px 6px color-mix(in srgb, var(--Silver) 29%, transparent);
border-block-end: none;
position: relative;
z-index: 10;
}

nav.cluster {
justify-content: space-between;
align-items: center;
padding-inline: var(--step-2);
}

nav.cluster a img {
display: block;
object-fit: cover;
width:100%;
height:100%;
}

[aria-current="page"] {
font-weight: bold;
}

#main-nav a {
text-decoration: none;
}

#lang-nav a {
text-decoration: none;
}
{% endcss %}
