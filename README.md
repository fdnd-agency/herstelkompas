# Herstelkompas

## Functionality Overview

### Libraries

#### SvelteKit

SvelteKit is a modern web framework built on top of Svelte that allows you to develop web applications quickly and efficiently. It handles things like routing, server-side rendering (SSR), data fetching, and build optimization for you. Unlike frameworks such as React or Vue, Svelte uses compile-time optimizations, resulting in smaller and faster output code. This makes SvelteKit ideal for both small websites and larger, scalable web applications.

#### @directus/sdk

`@directus/sdk` makes it easier to connect to the Directus API from your code. It can also handle authentication if certain actions are restricted to specific users.

### Components

#### Sidebar

The sidebar contains links to all pages (routes). It includes simple icons for styling. The sidebar also functions as a mobile menu — on screens 750px wide or smaller, it can be toggled open and closed with a link.

#### Bingo Card

We designed and developed a bingo card component that allows clients of *ZelfZorg aan Zee* to check off their goals. The status of the bingo card is saved per treatment, so it can be reviewed later. The code checks whether there is already a treatment for the current day. If there is, it updates today's bingo card; if not, it creates a new treatment entry.

#### Treatments Page + Detail [TBD]

This page will display an overview of all the client’s treatments. The client can view the bingo card, questionnaire, and scans for each treatment on a dedicated detail page.

---

## Installation & Contribution

If you want to contribute to this project:

* First, clone it by clicking the green **`Code`** button on [https://github.com/fdnd-agency/herstelkompas](https://github.com/fdnd-agency/herstelkompas).
* You can then choose how you want to clone the repository to your computer.
* After that, open the project in your preferred code editor.

Then, run the following command in your terminal:

```bash
npm install
```

Once that’s done, you can start the project locally with:

```bash
npm run dev
```

**NOTE:** Please make sure to review our conventions in `CONTRIBUTING.md` before contributing to this project.
Thank you!
