# Herstelkompas

## Design Choices
We tried to match the colors from the “Zelfzorg aan Zee” website as closely as possible. However, we noticed that the “yellow” color you use doesn’t provide enough contrast when white text is placed on top of it. Therefore, we changed that yellow color to “green” in our design. Of course, this can easily be adjusted according to your preferences.

Throughout the website, we chose to use rounded corners because they give a friendly and approachable appearance. This design choice also reflects the waves of the sea.

On the left side, there’s a sidebar that allows easy navigation between the Home, Bingokaart, Behandelingen, Scans, and Vragenlijst pages. The sidebar is always visible on desktop, but on tablet and mobile it turns into a hamburger menu.
<img width="500" alt="image" src="https://github.com/user-attachments/assets/c9699568-56c4-4d68-8be3-13389e8aaef9" />
<img width="300" alt="image" src="https://github.com/user-attachments/assets/e556a366-4c7b-464d-97c4-df358fbbb9cc" />
<img width="200" height="878" alt="image" src="https://github.com/user-attachments/assets/abcaa791-995e-4f1d-a479-5106207f51c1" />

On the Bingokaart page, there’s a simple and easy to use bingokaart. In the top left corner of each square, there’s a small circle that fills in when checked off. This makes it even clearer for the user how to use the bingocard. Each square also changes color once it’s marked as completed (we’re currently using green for this).

On the Behandelingen page, all treatments are displayed as stacked bars, each with a description and date. We also added a small arrow on the right side of each bar to indicate that the user can click on them for more information.
<img width="500" alt="image" src="https://github.com/user-attachments/assets/27e91ad5-8e74-4944-a814-462e64b2d1eb" />
<img width="300" alt="image" src="https://github.com/user-attachments/assets/c611a458-b6b9-417e-8e5b-3aaabd343f4a" />
<img width="200" alt="image" src="https://github.com/user-attachments/assets/f3735f72-8497-4572-b04e-263a7d34da06" />

On the details page of a ‘behandeling’, you can see the status of the bingokaart, scans, and vragenlijst on that date.
<img width="500" alt="image" src="https://github.com/user-attachments/assets/e97ec318-299f-4890-bfd8-ca517d69375d" />
<img width="300" alt="image" src="https://github.com/user-attachments/assets/b6d5e66c-666b-4600-804c-ca753c0b3b42" />
<img width="200" alt="image" src="https://github.com/user-attachments/assets/2170c6e5-965c-403f-b6be-2e74c783d626" />

There will also be a prettier save button below the bingo card with a loading and success status when the bingo card is saved.
<img width="2356" height="930" alt="image" src="https://github.com/user-attachments/assets/369729f7-e37c-4d07-ab6c-ba153cf73a7b" />

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
