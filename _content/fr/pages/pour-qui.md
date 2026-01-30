---
translationKey: pour-qui
lang: fr
createdAt: 2025-11-14T09:43:00.000Z
uuid: 9c396c025e17
localizationKey: 0c2df325b206
name: Pour qui?
eleventyNavigation:
  order: 1
---

{% partialWrapper "page-header.njk", { image: { src: '/_images/pexels-fauxels-3184298.webp' }, class: 'palette-cooper' } %}

# À qui s’adressent nos formations?

Chez Repères, nos formations en promotion de la santé sont conçues pour toutes celles et ceux qui veulent agir sur la santé des personnes et des communautés, en équipe ou individuellement.

{% endpartialWrapper %}

::::: div { .articles .section .palette-cooper-contrast .bleed-bg .v--bleed-bottom:14rem }
:::: article { .fixed-fluid }

{% image src="/_images/pexels-fauxels-3184298.webp", width="300", aspectRatio="1" %}

::: prose
## Vous êtes un·e professionnel·le?

Vous travaillez dans le social, la santé ou l’éducation à Bruxelles ou en Wallonie? Nos formations peuvent vous aider à:

- Comprendre et appliquer la promotion de la santé dans votre pratique quotidienne.
- Réfléchir à vos pratiques et trouver du soutien face aux difficultés rencontrées.
- Échanger avec d’autres professionnel·les confronté·es aux mêmes situations.

Exemples de structures où nos participants travaillent souvent: maisons médicales, centres de planning familial, services sociaux, services de santé mentale, hôpitaux, structures jeunesse, CPAS, services d’accompagnement à l’emploi ou d’insertion.

:::
::::
:::: article { .fixed-fluid }

{% image src="/_images/pexels-fauxels-3184298.webp", width="300", aspectRatio="1" %}

::: prose

## Vous êtes un relais ou bénévole?

Vous êtes engagé·e dans une association, collectif citoyen ou initiative locale? Nos formations peuvent vous permettre de:

- Développer votre posture en promotion de la santé dans vos actions.
- Mobiliser votre communauté et construire des projets participatifs.
- Rencontrer d’autres relais et bénévoles pour partager expériences et bonnes pratiques.

:::
::::
:::: article { .fixed-fluid }

{% image src="/_images/pexels-fauxels-3184298.webp", width="300", aspectRatio="1" %}

::: prose
## Vous faites partie d’une équipe ou d’une institution?

Nous accompagnons les structures et collectifs qui souhaitent:

- Créer des repères communs en promotion de la santé.
- Améliorer le travail collectif et les pratiques internes.
- Mettre en place des espaces de formation ou de soutien au sein de leur organisation.

:::
::::
:::: article { .fixed-fluid }

{% image src="/_images/pexels-fauxels-3184298.webp", width="300", aspectRatio="1" %}

::: prose

## Vous êtes un organisme de formation?

Repères soutient les organismes de formation pour:

- Développer la posture des formateur·rices en promotion de la santé.
- Échanger sur les pratiques et expériences avec d’autres organismes.
- Être accompagnés dans leurs questionnements et difficultés en formation.

:::
::::
:::::
<!-- End of articles -->

::: div { .squashed .prose .box .card .palette-burnt-umber .palette-low-contrast }

Pourquoi nous contacter?

Vous nous contactez si vous voulez:

- Découvrir ou renforcer vos connaissances en promotion de la santé, approche participative et approche de genre.
- Avoir un regard réflexif sur vos pratiques, individuellement ou collectivement.
- Trouver des supports méthodologiques pour intégrer la promotion de la santé dans vos projets, équipes ou structures.

{% link url="contact", text="Nous contacter", class="button" %} { .text-center }

:::

::::: div { .section .bleed-bg .v--bleed-top:12rem }
::: hgroup { .text-center }
### Nous collaborons avec une grande diversité d’acteurs engagés:
du soin à la jeunesse, du social à la formation et d’autres… { .h4 }
:::

:::: grid-fluid { .sectors .v--columns:3 .gap-0 .m-block-[--step-4] .width-prose .rounded-[--radius-card] .overflow-hidden .font-bold }
::: prose { .box .p-[--p-card] .palette-orange-peel .palette-low-contrast }

#### Santé & bien-être

- Maisons médicales (MM)
- Centres de planning familial (CPF)
- Services de santé mentale (SMM)
- Hôpitaux
- Services PMS / PSE
- Services de promotion de la santé

:::
::: prose { .box .p-[--p-card] .palette-cooper .palette-low-contrast }

#### Accompagnement social & humain

- Services sociaux (SS) et CPAS
- Services de médiation de dettes (juridique, sociale)
- Services d’intervention psychosociale d’urgence
- Maisons d’accueil et centres d’hébergement
- Services de cohésion sociale

:::
::: prose { .box .p-[--p-card] .palette-cooper .palette-low-contrast }

#### Jeunesse, éducation & insertion

- Organismes de jeunesse (AMO)
- Services d’aide à la jeunesse (SAJ)
- Organismes d’accompagnement à l’emploi / insertion socioprofessionnelle
- Services ou organismes de formation

:::
::: prose { .box .p-[--p-card] .palette-orange-peel .palette-low-contrast }

#### Réseaux & fédérations

- Fédérations de ces secteurs
- Autres structures partenaires et acteurs associatifs

:::
::::
:::::


{% css %}
.articles {
  display: flex;
  flex-direction: column;
  gap: var(--step-4);
}
article.fixed-fluid {
  align-items: center;
  max-inline-size: var(--width-max);
}
article.fixed-fluid img {
  border-radius: 100%;
}
.sectors > div {
  inline-size: 100%;
}
{% endcss %}
