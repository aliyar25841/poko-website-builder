---
translationKey: index
lang: fr
createdAt: 2025-11-14T09:35:00.000Z
uuid: ccc997d69664
localizationKey: 53a97b6af84d
name: Accueil
---

{% partialWrapper "page-header.njk", { image: { src:'/_images/pexels-rethaferguson-3810762.webp', aspectRatio:'1' } } %}

{% image src="/_images/reperes-asbl-logo-sans-bords-rvb-01.webp", alt="Repères ASBL", width="200" %}

# Centre de formation à la promotion de la santé

Et si la santé était avant tout une manière de vivre et de se relier aux autres?
Chez Repères, nous formons celles et ceux qui font vivre la promotion de la santé, pour renforcer les ressources individuelles et collectives au service du bien-être commun.

{% endpartialWrapper %}

::::: div { .section .palette-vermillon .palette-low-contrast .flow .v--flow-space:--step-4 .bleed-bg .v--bleed-bottom:20rem }

## Notre offre de formations et d’accompagnements

:::: switcher { .width-prose .text-center }
::: flow { .v--flow-space:1em .items-center }

{% icon "tabler:library", width="64", height="64" %}

**Nos formations à Bruxelles et en Wallonie**
:::

::: flow { .v--flow-space:1em .items-center }
{% icon "tabler:automation", width="64", height="64" %}

**Nos interventions sur mesure (chez vous et/ou en équipe)**
:::

::: flow { .v--flow-space:1em .items-center }
{% icon "tabler:thumb-up", width="64", height="64" %}

**Notre service support (Le SESU)**
:::
::::
:::::

:::: switcher { .squashed .width-prose .gap-0 .v--padding-box:--p-card }
::: flow { .box .palette-vermillon-contrast .rounded-l-[--radius-card] .text-right }
En tant que  
**ORGANISME DE PROMOTION DE LA SANTÉ,**  
nous accompagnons des services, des institutions et des équipes qui interagissent avec les sphères psychomédicosociales
:::
:::flow { .box .palette-burnt-umber-contrast .rounded-r-[--radius-card] }
En tant que  
**SERVICE SUPPORT,**  
nous apportons notre expertise d’organisme de formation en promotion de la santé à d’autres organismes de formation et aux réseaux de formateurs et formatrices.
:::
::::

::: div { .section .palette-burnt-umber .palette-low-contrast .flow .text-center .bleed-bg .v--bleed-top:7rem }
Depuis 1998, Repères asbl est active dans le domaine de la formation en Promotion de la Santé. Repères est une asbl reconnue par la COCOF et l’AVIQ.

Depuis 2018, dans le cadre du nouveau décret de Promotion de la Santé mis en place par la COCOF en Région Bruxelloise, Repères a été désignée comme **service de support** en matière de **formation** généraliste et continue.

[En savoir plus]({{ "sesu" | locale_url }})
:::

:::: div { .section .palette-YlnMn-blue .flow .text-center }
::: hgroup

## Nous collaborons avec une grande diversité d’acteurs engagés:

du soin à la jeunesse, du social à la formation et d’autres… { .h4 }
:::

-LOGO PARTENAIRES-

[À qui s’adresse nos formations?]({{ "pour-qui" | locale_url }}){ .button }

::::

::: div { .section .bleed-bg .palette-cooper-contrast }
⚠️ Changer le texte ⚠️

> **«Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy»** {.text-center .h3}
>
> Nom - organisation {.text-right .my-0}

:::
::: flow { .text-center }

-BOUTON - Newsletter-

{% partial "btn-newsletter" %}

:::

{% css %}
#notre-offre-de-formations-et-d-accompagnements{
margin-inline: 0;
max-width: 100%;
}

blockquote{
border: none;
}

{% endcss %}
