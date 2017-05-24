---
title: How to contribute
layout: manifesto_page
---

# How to contribute

This project is an open collaborative space, based on open source principles. That means anyone can get involved, and we can accept ideas from anywhere. This is a UK political manifesto, but you don't need to be a member of a party, of voting age, or even in the UK to contribute. Good ideas can come from anywhere!

## Code of Conduct

Firstly, this project has a [code of conduct](CODE_OF_CONDUCT.html). In the interest of fostering an open and welcoming environment, we as [contributors](https://votebot.openpolitics.org.uk/users) and [maintainers](https://github.com/orgs/openpolitics/teams/core) pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation. Read the [complete code of conduct](CODE_OF_CONDUCT.html) for the full policy, and to see what is expected of you as a contributor.

## The Rules

{::options parse_block_html="true" /}
<div class='well'>

* You can propose a change on *any* page with a suggest button - even the voting rules on this page.
* All contributions and discussions should be public - no backroom deals!
* Plain English is important - follow the [gov.uk style guide](https://www.gov.uk/guidance/content-design/writing-for-gov-uk) if you can, or use [Hemingway](http://hemingwayapp.com) to test readability. Avoid political weasel-words, especially.
* Provide evidence and links wherever possible, to back up your case. Include them in your proposal text, either as direct links, or as footnotes.
* Make your proposals small, self-contained, and simple. Large changes will take a lot longer to get agreed upon and merged. Small is agile.
* Proposals don't need to be fully finished or hugely detailed. It's better to make small iterative improvements, as it keeps things moving faster.
* All content is public domain. Please sign the [Contributor License Agreement](https://www.clahub.com/agreements/openpolitics/manifesto) when you make a contribution. See [the full license](license.html) for details.

</div>

## Editing

1. Read the manifesto, and find the page you want to edit. Then click the `Suggest a change` button at the top right.
2. Log in with a [GitHub account](https://github.com/signup/free); if you don't have one, you can make an account for free. GitHub is the system that stores all the changes made to the manifesto, so you need an account to contribute. Your account doesn't have to be linked to your real name or identity.
3. Make your change in the editor. Text is formatted with Markdown; you'll find instructions at the side of the editor window.
4. If this is your first edit, please agree to the [Contributor License Agreement](https://www.clahub.com/agreements/openpolitics/manifesto) to state that your submission is in the public domain.
5. After you've saved your changes, your proposal will be enter the [proposal list](https://votebot.openpolitics.org.uk/proposals). There will then be a vote, and possibly debate, amongst contributors on whether to adopt the proposal. You can change the proposal in response to the discussion, if you want to.

If you want to contribute but aren't sure what you can start with, you can check out the [ideas list](https://votebot.openpolitics.org.uk/ideas) for inspiration.

## Voting

We use a consensus voting system, where a change is accepted if it reaches a certain threshold of yes votes.

People who have contributed to the manifesto are eligible to vote on proposals. If you get a proposal accepted, you will get a vote. It doesn't have to be a big change, as long as you contribute, you're in!

The simplest way to vote is using the [voting interface](https://votebot.openpolitics.org.uk/proposals). Click on the proposal details to see the change, comment, or cast a vote.

Four vote types are available:

|vote|symbol|score|
|--|--|--|
|Yes|:white_check_mark:|1|
|No|:negative_squared_cross_mark:|-1|
|Abstain|:zipper_mouth_face:|0|
|Block|:no_entry_sign:|-1000|
{: .table .table-striped}

### Counting votes

When votes are cast, the score is counted up, and as long as the total is 2 or more, the proposal passes. If a change is amended, "yes" votes are reset, and are only counted if cast after the latest change.

### Time

Proposals must be open for a minimum of 7 days, and are rejected if they're not passed within 90 days.

### Blocks

Block votes are special, and are intended as a protection against fundamental changes being forced in through brigading. 

If a change violates the core principles of the manifesto, any voter can use a block vote. The block vote should come with detailed reasoning and constructive comments for improvement if possible. A block can be removed by the original blocker changing to a yes or no vote. Blocks that are not explained can be overridden if enough voters agree, though this process is not strictly defined at present.

Blocks are generally discouraged; if you disagree with a proposal in a normal way, just vote "no". Blocks should only be used in extreme circumstances, such as if a proposal completely violates the principles of the manifesto.

## Advanced GitHub users

If you're familiar with git and GitHub, you can use the standard fork / pull request flow to make your proposal. The repository is at [openpolitics/manifesto](https://github.com/openpolitics/manifesto).

You can also cast votes directly in the GitHub pull request comments, using the symbols below:

|vote|symbol|type this|
|--|--|--|
|Yes|:white_check_mark:|`:white_check_mark:`|
|No|:negative_squared_cross_mark:|`:negative_squared_cross_mark:`|
|Abstain|:zipper_mouth_face:|`:zipper_mouth_face:`|
|Block|:no_entry_sign:|`:no_entry_sign:`|
{: .table .table-striped}

## Help

* [GitHub Democracy](https://floppy.org.uk/blog/2014/10/13/github-democracy/) - James' blog post with more about this process
* [General GitHub documentation](https://help.github.com/)
* [GitHub pull request documentation](https://help.github.com/articles/about-pull-requests/)
* [Markdown syntax reference](https://en.support.wordpress.com/markdown-quick-reference/)
