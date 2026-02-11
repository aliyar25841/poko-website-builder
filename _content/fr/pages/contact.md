---
translationKey: contact
lang: fr
createdAt: 2025-11-14T09:38:00.000Z
uuid: eac2f9f3a299
localizationKey: 769cf9a71f07
name: Contact
eleventyNavigation:
  order: 8
---

{% partialWrapper "page-header.njk", { image: { src: '/_images/pexels-edmond-dantes-4347331.webp' }, class: 'position-relative' } %}

# Contactez-nous

Une question sur nos formations? Envie de construire un projet sur mesure avec votre équipe? Ou simplement besoin d’un échange avant de vous inscrire?

::: div { .box .prose .card .position-absolute .bottom-0 .right-[2em] .palette-orange-peel .b-width-[--border-width-focus] }

**Repères asbl**  
N° d’entreprise: BE0463799956  
IBAN: BE08 0013 1886 1813

:::

{% endpartialWrapper %}

## L’équipe de Repères est à votre écoute { .h4 }

Nous prendrons le temps de comprendre votre demande et d’y répondre au mieux.

:::: cluster { .width-prose .sub-section }
::: div

{% icon "tablerOutline:at", width="40", height="40", class="palette-orange-peel" %}

reperes@reperes.be

:::
::: div

{% icon "tablerOutline:phone", width="40", height="40", class="palette-orange-peel" %}

0470/87 87 35

:::
::::

## Formulaire de contact

Pour toute question ou demande générale, n’hésitez pas à nous contacter via le formulaire ci-dessous.

<div class="sub-section">
    <form class="prose flow card palette-cooper palette-low-contrast font-bold">
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <label for="topic">Sujet</label>
        <input type="text" id="topic" name="topic" required>
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit" class="align-self-start">Envoyer</button>
    </form>
</div>

::::::: div { .section .palette-cooper .palette-low-contrast .bleed-bg }

::::: div { .flex .flex-nowrap }
{% icon "tablerOutline:map-pin", width="3rem", height="3rem" %}

:::: hgroup

<h2>Comment nous rendre visite?</h2>
<p><a href="https://www.google.com/maps/place/Bd+de+Waterloo+99,+1000+Bruxelles/">Boulevard de Waterloo 99, 1000 Bruxelles</a></p>
::::
:::::

:::::: fixed-fluid { .sub-section }

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8643196702!2d4.348556789935303!3d50.83367705092091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c464788739db%3A0x535d5ac8d9dbbb38!2sBd%20de%20Waterloo%2099%2C%201000%20Bruxelles!5e0!3m2!1sen!2sbe!4v1769783181830!5m2!1sen!2sbe" width="550" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

::::: flow
:::: div { .flow .horizontal }
{% icon "tablerOutline:bus-stop", width="4rem", height="4rem" %}

**Métro**: station “Trône” (ligne 2 et 6) à quelques minutes à pied  
**Bus**: lignes 46, 95 et 54 desservent notre quartier  
**Tram**: les lignes 81 et 92 s’arrêtent également non loin { .mis-[1rem] }

::::
:::: div { .flow .horizontal }
{% icon "tablerOutline:car", width="4rem", height="4rem" %}

**En voiture**, quelques places de parking sont disponibles dans les rues adjacentes (et des parkings publics se trouvent à proximité). Nous pouvons aussi vous donner des repères précis selon votre moyen de transport: n’hésitez pas à nous contacter. { .mis-[1rem] }

::::
:::: div { .flow .horizontal }
{% icon "tablerOutline:disabled-off", width="4rem", height="4rem" %}

::: div { .mis-[1rem] }
Nos bureaux se trouvent au 4e étage, le bâtiment **ne** dispose **pas** d’accès PMR. Si vous êtes dans une situation à mobilité réduite et que vous souhaitez nous rencontrer, nous nous déplaçons.  
Nos bureaux sont ouverts du lundi au vendredi, de 9h à 16h30.
:::

::::
:::: div { .flow .horizontal }
{% icon "tablerOutline:calendar-week", width="4rem", height="4rem" %}

Nos bureaux sont ouverts du lundi au vendredi, de 9h à 16h30. { .mis-[1rem] }

::::
:::::
::::::

:::::::

::: flow { .text-center }

#### Vous cherchez une formation spécifique?

Consultez notre catalogue de formations ou découvrez nos interventions sur mesure

<!-- -BOUTON-Newsletter- -->

{% partial "btn-newsletter.md" %}

:::

{% css %}
.section.palette-cooper svg{
stroke: var(--Orange-peel);
}

{% endcss %}
