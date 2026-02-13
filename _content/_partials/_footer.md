<div class="grid-fluid v--columns:4 small">
    <div>
        ⚠️ Changer les liens ⚠️
        <ul>
            <li>
                {% icon "tablerOutline:brand-linkedin", width="2rem", height="2rem" %}
                <a href="#">Linkedin</a>
            </li>
            <li>
                {% icon "tablerOutline:brand-facebook", width="2rem", height="2rem" %}
                <a href="#">Facebook</a>
            </li>
            <li>
                {% icon "tablerOutline:mail", width="2rem", height="2rem" %}
                <a href="#">Newsletter</a>
            </li>
        </ul>
    </div>
    <div>
        <p><strong>Repères asbl</strong></p>
        <p>Boulevard de Waterloo 99 - 1000 Bruxelles</p>
        <p>0470/87 87 35</p>
        <p>N° d'entreprise: BE0463799956</p>
        <p>IBAN: BE08 0013 1886 1813</p>
    </div>
    <div class="flow">
        ⚠️ changer src, alt, title ⚠️
        {% image src="/_images/reperes-asbl-logo-sans-bords-rvb-09.webp", alt="", title="", width="122", loading="lazy"%}
        {% image src="/_images/reperes-asbl-logo-sans-bords-rvb-09.webp", alt="", title="", width="122", loading="lazy"%}
    </div>
    <div>
        <p>Avec le soutien de</p>
        {% image src="/_images/reperes-asbl-logo-sans-bords-rvb-09.webp", alt="", title="", width="122", loading="lazy"%}
    </div>
</div>
<div class="text-center small">
    <p>Site web réalisé éco-conçu avec <a href="https://poko.eco">Poko</a></p>
</div>

{% css %}
footer {
border-image-source: linear-gradient(0deg, var(--Silver), var(--White) 70%) !important;
height: 100%;
}

footer div div{
width: fit-content;
}

footer p {
margin-block: 0;
}

footer div.text-center.small p:last-of-type {
margin-block: var(--step--1);
}

footer ul {
list-style: none;
padding: 0;
margin: 0;
}

footer ul li {
display: flex;
align-items: center;
margin-block-end: var(--step-1);
gap: var(--step--2);
}

footer img {
margin-inline: 0;
}

footer a {
background-color: transparent;
}

{% endcss %}
