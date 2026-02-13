<section class="grid-fluid v--columns:3 max-inline-size-[--width-max]">

{% set palettes = ['delft-blue', 'cooper', 'vermillon', 'orange-peel', 'ylnMn-blue', 'burnt-umber'] %}

{% for training in collections.trainings %}
{% set currentPalette = palettes[loop.index0 % palettes.length] %}

<div class="card palette-{{ currentPalette }} palette-low-contrast">
<h4>{{ training.data.name }}</h4>
{% if training.data.metadata.image.src %}
<img src="{{ training.data.metadata.image.src }}" alt="{{ training.data.metadata.image.alt }}" title="{{ training.data.metadata.image.title }}" class="border-img">
{% endif %}

// TODO: il n'y a pas de description pour la preview

<ul>
<li>{{ training.data.duration }}</li>
<li>{{ training.data.price }}</li>
<li>{{ training.data.place }}</li>
</ul>

{% link url=training.url, text="En savoir plus...", class="button palette-" ~ currentPalette ~ "-contrast" %}

</div>
{% endfor %}
</section>

{% css %}

.card p, .card h4, .card li {
padding-inline: var(--step--2);
}

.border-img {
border-top: 2px solid currentColor;
}

ul {
margin-left: 0;
padding-left: 0;
list-style-type: none;
}

.card li {
margin-left: 0;
border-block-start: 1px solid currentColor;
}

.card li:last-child {
border-block-end: 1px solid currentColor;
}

{% endcss %}
