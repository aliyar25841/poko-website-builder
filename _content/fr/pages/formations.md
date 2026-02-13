---
translationKey: formations
lang: fr
createdAt: 2025-11-14T09:43:00.000Z
uuid: f0c4d5f2e36a
localizationKey: fd2e1caad552
name: Formations
eleventyNavigation:
  order: 10
vars: {}
---

:::: header { .palette-burnt-umber .hero }
::: div { .prose .mx-0 }
{% partial "svg-boucle" %}

# Formations

Des espaces pour apprendre, réfléchir et agir ensemble.
Repères conçoit des formations qui soutiennent les professionnel·les du social et de la santé dans l’évolution de leurs pratiques et la construction d’environnements favorables à la santé.

Découvrez ci-dessous nos modules de formation: des temps pour penser, expérimenter et faire évoluer les pratiques, au croisement du social et de la santé.

:::
::::

<!-- -CATALOGUE FORMATIONS- -->

{% partial "trainings" %}

<!-- -CTA- -->

:::: div { .section }
::: box { .prose .card .palette-burnt-umber .palette-low-contrast .text-center .font-bold .max-inline-[--width-focus] }

Nous pouvons vous aider à choisir la formule ou la formation qui vous convient le mieux

{% link url="contact", text="Nous contacter", class="button" %}

:::
::::

{% css %}

.hero {
background-color: transparent;

z-index: 2;
margin-block-start: 25%;
}

{% endcss %}
