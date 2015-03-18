---
title: How to contribute
layout: page
editable: false
---

1. Find the page you want to edit, and click the `Edit Page` button at the top right.
2. Log in, or sign up for a [GitHub account](https://github.com/signup/free) if you don't already have one. GitHub is the system that stores all the changes made to the manifesto, so you need an account to contribute.
3. Make your change in the editor. Formatting uses [Markdown](http://en.support.wordpress.com/markdown-quick-reference/).
4. Once you've made your change, enter a short comment in the box that says `Update {filename}`.
5. Click the 'Commit Changes' button.
6. If this is your first edit, please agree to the [Contributor License Agreement](https://www.clahub.com/agreements/openpolitics/manifesto) to state that your submission is in the public domain.

Your change will be entered into the [discussion queue](http://votebot.openpolitics.org.uk). There will then be a vote, and possibly debate, amongst contributors on whether to adopt the change.

If you're more familiar with GitHub, you can of course use the standard fork / pull request model. The repository is [openpolitics/manifesto](https://github.com/openpolitics/manifesto).

Want to contribute but aren't sure what you can start with? Check out the [issue list](https://github.com/openpolitics/manifesto/labels/policy) for some ideas.

## The Rules

{::options parse_block_html="true" /}
<div class='well'>

* *Anything* can be changed.
* All contributions and discussions should be public, ideally on GitHub.
* Plain English is essential - follow the GDS style guide if you can, or use [Hemingway](http://hemingwayapp.com) to test readability. Try to avoid political weasel-words.
* Make changes small, self-contained, and simple. Large changes will take a lot longer to get agreed upon and merged. Small is agile.
* Changes need not be fully detailed or final. In fact, accepting partial improvements which we then build upon is encouraged, as it keeps things moving faster.
* All content is public domain. Please sign the [Contributor License Agreement](https://www.clahub.com/agreements/openpolitics/manifesto) when you make a contribution. See [the full license](license.html) for details.

</div>

## Voting on changes

We are not using a straight majority voting system, as it's not suited to a long-tail participation model. Instead, we're using a type of blackballing, where anyone can block, but only a small number of contributors are required to actively agree in order for a change to be accepted.

Only votes from existing contributors are counted. In order to get a vote, you need to get a change accepted first.

### Votes

Voting is done using special symbols in the comments for a change:

| Text | Symbol | Meaning |
|------|--------|---------|
| <code>&#58;+1&#58;</code> | :+1: | Agree |
| <code>&#58;hand&#58;</code> | :hand: | Abstain |
| <code>&#58;-1&#58;</code> | :-1: | Block |
{: .table .table-striped}

For a change to be accepted, two existing contributors must agree to the change, and it must have been open for 7 days. If a change is amended, votes are reset and are only counted for the latest version of the text.

### Abstentions

An abstention cancels out one agree vote. So, if there are two agreements and one abstention, another agreement is requirement in order for the vote to pass. This means it can be used as a sort of temporary hold, or a request for more evidence.

### Blocks

Any contributor can place a block on a proposal, as long as that block comes with reasoning and constructive comments for improvement. A change cannot pass while it has a block on it. A block can be removed by the original blocker changing to an agree or abstain vote. Blocks are discouraged; it's preferable to use an abstention to make it more difficult for a vote to pass while more evidence is gathered.

### Closing old changes

A change will be closed without merging when it is more than 3 months old without passing.

### Counting votes

Votes are counted by an automated script, which sets the GitHub build status on the pull request depending whether enough votes have been received. See the [Votes](http://votebot.openpolitics.org.uk) page for details and vote counts. 

If the script detects that a change has been passed, it will be merged automatically 24 hours later.

## Help

* [GitHub Democracy](http://floppy.org.uk/blog/2014/10/13/github-democracy/) - James' blog post with more about this process
* [General GitHub documentation](http://help.github.com/)
* [GitHub pull request documentation](http://help.github.com/send-pull-requests/)
* [Markdown syntax reference](http://en.support.wordpress.com/markdown-quick-reference/)
