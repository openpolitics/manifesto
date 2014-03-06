---
layout: page
published: true
---
# The OpenPolitics Manifesto

## Principles

We believe that government should serve the people, and that 'the state', so often derided, is simply the way that citizens work together to enhance the public good.

We believe that government should be:

* Open, transparent and accountable, with no hiding place for backroom influence
* Rational, with decisions and policy based on sound evidence, not media pressure
* Courageous, able to make difficult decisions without pandering to short-termism

We believe that individuals should be:

* Free to act in any manner that does not harm another individual, and does not infringe upon the rights of other individuals.
* Enjoy a fundamental right to privacy from the state or their agents. 

In short, we wish to ensure government remains open and transparent, whilst individuals retain liberty and privacy.

We believe that we are heading towards a better future, and that government has an essential role in taking us there. We also believe that as a country, we can self-govern *better* in the future, and will create policy that hopes to re-engage citizens in our democratic process.

## Contents

<ol>
  {% for page in site.pages %}
    {% if page.layout == "policy" %}
      <li> <a href='{{page.url}}'>{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ol>