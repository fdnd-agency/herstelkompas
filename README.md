# Herstelkompas

## Dev link

https://herstelkompas.netlify.app/

## About this project

**Herstelkompas** is a digital web tool developed using the **Svelte** framework.  
The tool supports Long COVID patients and their healthcare providers in monitoring recovery in a visual, accessible, and personalized way. It combines design, data, and usability to provide clear recovery insights and encourage progress.

---

## Client

**Zelfzorg aan Zee**

Zelfzorg aan Zee combines physical therapy, insightful exercises, and the power of water (Blue Mind Theory) to promote recovery. The program supports people with brain injuries, Long COVID, and burnout in improving both cognitive and physical functions.  

A medically specialized rehabilitation team collaborates with experienced patient advisors to guide participants until they can meaningfully contribute to society through work, volunteering, or achieving personal goals.  
The treatment program is only complete when the participant is satisfied with the outcome.

---

## Design Challenge

Design an **intuitive and user-friendly web tool** to help Long COVID patients and their healthcare providers track recovery. The tool should:

* Be visually appealing and easy to navigate
* Display reliable and insightful recovery data
* Offer personalized recommendations based on individual recovery trajectories

---

## Team & Roles

The project team consists of **Ties**, **Kerem**, and **Dylan**.  
Each member developed their own **design concept**, and the team decided to move forward with **Ties' design**, as it best aligned with the project goals and target audience.  

All team members collaborate on the **technical implementation** of the web tool, contributing to front-end development and optimizing the user experience.

---

## Technical Stack

* **Framework:** Svelte
* **Styling:** CSS (mobile-first, responsive design)
* **Tools:** GitHub, Figma, VS Code
* **Goal:** Accessible and scalable web tool for recovery monitoring

---

## Design Choices

We tried to match the colors from the “Zelfzorg aan Zee” website as closely as possible. However, the original yellow did not provide enough contrast with white text, so we replaced it with green in our design (adjustable as needed).  

We used rounded corners throughout the website for a friendly and approachable look, reflecting the waves of the sea.  

The left sidebar enables easy navigation between the Home, Bingokaart, Behandelingen, Scans, and Vragenlijst pages. On desktops, the sidebar is always visible; on tablets and mobile, it turns into a hamburger menu.  
<img width="500" alt="Sidebar desktop" src="https://github.com/user-attachments/assets/c9699568-56c4-4d68-8be3-13389e8aaef9" />
<img width="300" alt="Sidebar tablet" src="https://github.com/user-attachments/assets/e556a366-4c7b-464d-97c4-df358fbbb9cc" />
<img width="200" height="878" alt="Sidebar mobile" src="https://github.com/user-attachments/assets/abcaa791-995e-4f1d-a479-5106207f51c1" />

The **Bingokaart page** features an easy-to-use bingo card. Each square has a small circle in the top-left corner that fills when checked, and the square changes color (currently green) when completed.  

The **Behandelingen page** displays all treatments as stacked bars, each showing a description and date. An arrow on each bar indicates that the user can click for more information.  
<img width="500" alt="Behandelingen overview" src="https://github.com/user-attachments/assets/27e91ad5-8e74-4944-a814-462e64b2d1eb" />
<img width="300" alt="Behandelingen overview smaller" src="https://github.com/user-attachments/assets/c611a458-b6b9-417e-8e5b-3aaabd343f4a" />
<img width="200" alt="Behandelingen overview mobile" src="https://github.com/user-attachments/assets/f3735f72-8497-4572-b04e-263a7d34da06" />

The **Treatment detail page** shows the status of the bingo card, scans, and vragenlijst for that date.  
<img width="500" alt="Treatment detail desktop" src="https://github.com/user-attachments/assets/e97ec318-299f-4890-bfd8-ca517d69375d" />
<img width="300" alt="Treatment detail tablet" src="https://github.com/user-attachments/assets/b6d5e66c-666b-4600-804c-ca753c0b3b42" />
<img width="200" alt="Treatment detail mobile" src="https://github.com/user-attachments/assets/2170c6e5-965c-403f-b6be-2e74c783d626" />

A save button below the bingo card shows loading and success states when saving.  
<img width="2356" height="930" alt="Save button" src="https://github.com/user-attachments/assets/369729f7-e37c-4d07-ab6c-ba153cf73a7b" />

---

## Functionality Overview

### Libraries

#### SvelteKit

SvelteKit is a modern framework built on Svelte that simplifies web development. It handles routing, server-side rendering (SSR), data fetching, and build optimization. Its compile-time approach produces smaller, faster code compared to frameworks like React or Vue, making it suitable for both small and large applications.

#### @directus/sdk

`@directus/sdk` provides an easy interface to interact with the Directus API and can handle authentication for restricted actions.

### Components

#### Sidebar

Contains links to all pages with simple icons and doubles as a mobile menu. On screens ≤850px, it can be toggled open and closed.

#### Bingo Card

A dynamic component allowing users to check off goals. Each treatment saves its bingo card status; new entries are created if no treatment exists for the current day.

#### Treatments Page + Detail [TBD]

Displays an overview of all treatments. Users can view the bingo card, questionnaire, and scans for each treatment on a dedicated detail page.

---

## Installation & Contribution

To contribute:

1. Clone the repository via the green **`Code`** button: [Herstelkompas GitHub](https://github.com/fdnd-agency/herstelkompas)
2. Open the project in your preferred editor
3. Install dependencies:

```bash
npm install
