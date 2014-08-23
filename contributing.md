---
title: How to contribute
layout: page
published: true
---

1. Find the page you want to edit, and click the `Edit Page` button at the top right.
2. Log in, or sign up for a [GitHub account](https://github.com/signup/free) if you don't already have one. GitHub is the system that stores all the changes made to the manifesto, so you need an account to contribute.
3. Make your change in the editor. Formatting uses [Markdown](http://en.support.wordpress.com/markdown-quick-reference/).
4. Once you've made your change, enter a short comment in the box that says `Update {filename}`.
5. Click the 'Commit Changes' button.

Your change will be entered into the [discussion queue](http://votebot.openpolitics.org.uk). There will then be a vote, and possibly debate, amongst contributors on whether to adopt the change.

If you're more familiar with GitHub, you can of course use the standard fork / pull request model. The repository is [openpolitics/manifesto](https://github.com/openpolitics/manifesto).

Want to contribute but aren't sure what you can start with? Check out the [to-do list](todo.html).

## The Rules

* *Anything* can be changed.
* All contributions and discussions should be public, ideally on GitHub.
* Plain English is essential - follow the GDS style guide if you can, or use [Hemingway](http://hemingwayapp.com) to test readability. Try to avoid political weasel-words.
* Make changes small, self-contained, and simple. Large changes will take a lot longer to get agreed upon and merged. Small is agile.
* All content is public domain. By submitting a change, you agree that you are putting your work into the public domain. See [the full license](license.html) for details.

## Merging Changes

We are not using a straight majority voting system, as it's not suited to a long-tail participation model, certainly not with our current contributor numbers. Instead, we're using a type of blackballing, where anyone can block, but only a relatively small proportion are required to actively agree in order to accept a change.

Changes will be merged when 20% of existing contributors excluding the proposer (currently 2) have approved the pull request with a 'thumbs-up' symbol in the comments. This proportion may change later, based on how active contributors are; it would be good to increase it, but at the moment this is a practical level.

Any contributor can block a merge by including a 'thumbs-down' symbol, as long as they include constructive reasoning and alternative proposals. A change cannot be merged as long as there are blocks in place.

Votes are counted by an automated script, which sets the GitHub build status on the pull request depending whether enough votes have been received. See the [Open Votes](http://votebot.openpolitics.org.uk) page for details and vote counts. Changes are merged by a [repository administrator](https://github.com/orgs/openpolitics/members) once consensus is reached.

Once an author has had a change merged in, they will become an existing contributor and thus can vote on new changes.

## Help

* [General GitHub documentation](http://help.github.com/)
* [GitHub pull request documentation](http://help.github.com/send-pull-requests/)
* [Markdown syntax reference](http://en.support.wordpress.com/markdown-quick-reference/)
