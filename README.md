<p align="center">
  <a href="https://www.periplus.ch">
    <img alt="PeriPlus" src="https://ppwebsite.netlify.com/img/icon.png" width="60" /> -->
  </a>
</p>
<h1 align="center">
  PeriPlus AG Website
</h1>

Company website

## :factory: Environment
[![Netlify Status](https://api.netlify.com/api/v1/badges/f0e1a1ed-7b87-43a7-b0f4-5470b8fb2ff1/deploy-status)](https://app.netlify.com/sites/ppwebsite/deploys)



## :scroll: Commit Message Description

A commit message consists of three distinct parts separated by a blank line: the title, a body and a footer. The layout looks like this:

```
type: subject

body

footer

```

The title consists of the type of the message and subject.

### The Type

The type is contained within the title and can be one of these types:

- **feat:** a new feature
- **fix:** a bug fix
- **docs:** changes to documentation
- **style:** formatting, missing semi colons, etc; no code change
- **refactor:** refactoring production code
- **test:** adding tests, refactoring test; no production code change
- **chore:** updating build tasks, package manager configs, etc; no production code change

### The Subject

Subjects should be no greater than 50 characters, should begin with a capital letter and do not end with a period.
Use an imperative tone to describe what a commit does, rather than what it did. For example, use **change**; not changed or changes.

### The Body

Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the **what** and **why** of a commit, not the how.
When writing a body, the blank line between the title and the body is required and you should limit the length of each line to no more than 72 characters.

### The Footer

The footer is used to reference Jira ticket IDs.

### Example Commit Request Message

```
feat: Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

* Bullet points are okay, too

* Typically a hyphen or asterisk is used for the bullet, preceded by a single space, with blank lines in between, but conventions vary here


Please put the Jira reference ticket at the bottom,
like this:

Resolves PROJ-123
See also: PROJ-12A, PRO-J213
```

## 💫 Deploy

After each push the deployment will happen automatically.
