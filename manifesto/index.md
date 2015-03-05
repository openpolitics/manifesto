---
layout: page
published: true
---

# The OpenPolitics Manifesto

## Purpose

Without a purpose, a country will ebb and flow on the selfish whimsy of its people.

The purpose of the United Kingdom is:

1) For everyone in the world to fully receive all the rights universally declared [^1]

2) For that situation to be indefinitely achieved

3) To then spend our time fully understanding ourselves, the earth and the universe through the arts, science and exploration.


## Principles

We believe that government should serve the people, and that 'the state', so often derided, is simply the way that citizens work together to enhance the public good.

We believe that government should be:

* Open, transparent and accountable, with no hiding place for backroom influence.
* Rational, with decisions and policy based on sound evidence, not media pressure.
* Courageous, able to make difficult decisions without pandering to short-termism.
* Ethical: dedicated to creating a sustainable society and economy with progressive moral values.

We believe that individuals should be:

* Free to act in any manner that does not harm another individual, and does not infringe upon the rights of other individuals.
* Enjoy a fundamental right to privacy from the state or their agents.

In short, we wish to ensure government remains open and transparent, whilst individuals retain liberty and privacy.

We believe that we are heading towards a better future, and that government has an essential role in taking us there. We also believe that as a country, we can self-govern *better* in the future, and will create policy that hopes to re-engage citizens in our democratic process.

The ideas contained in this manifesto are intentionally idealistic; they show the direction we would like to see the UK head in. They are not necessarily policies that could be implemented tomorrow (although a few could be). Any attempt to implement them would certainly take a good deal of work, time, and reform, but we believe it's important to have a long-term roadmap to which to refer.

## Contents

<ol>
  {% assign sorted_pages = site.pages | sort:"name" %}
  {% for page in sorted_pages %}
    {% if page.layout == "policy" %}
      <li> <a href='{{page.url}}'>{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ol>

[^1] [The Universal Declaration of Human Rights](http://www.un.org/en/documents/udhr/) - United Nations
