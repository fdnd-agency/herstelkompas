# Team Agreements & Conventions

## 1. Collaboration & General Agreements

- **Every workday starts with a stand-up**
- Check the board during every stand-up (quick overview)
- Always work on **one issue at a time**
- Communicate immediately when you:
  - Are blocked
  - Cannot finish a task
  - Are sick or unavailable
- Always inform the team about your status and when you will continue
- Discord is used for team communication (dedicated server)

---

## 2. Git & Workflow

### Gitflow
We follow the **Gitflow by GitKraken**.

- Branches are **always created from an issue**
- Branch names must reflect the component of the issue  
  **Example:** `feature/home-button`
- Always use *Create Branch from Issue* so the issue is linked to the branch

### Pull Requests & Merging

- **Never merge directly into `main`**
- Only merge after another team member has reviewed the PR
- The **PR template must be used**
- You **never merge your own PR**
- Even for very small fixes (e.g. one line of code):
  - Another team member must review and merge
- All work is merged into `dev-2526`

### Issue Status

- As soon as a PR is ready for review:
  - Change the issue status immediately to **`review`**
- Issue status updates must be done **immediately**

---

## 3. Code & Styling Conventions

### General Rules
- All code is written in **English**
- Follow **FDND code conventions**
- Be consistent at all times

---

### JavaScript
- Always use **camelCase**
- No exceptions

**Examples:**
```
const homeButton = document.querySelector('.home-button');

function toggleMenu() {
    // logic
}
```
---

### CSS

#### Naming
- Always use **kebab-case**
- No abbreviations

#### File Usage
- When building **from scratch**:
  - CSS must be written in **separate files**
- When continuing an existing project:
  - Use the **existing styling**
  - Do not restructure or overwrite unless agreed upon

#### CSS Layers
- **All CSS must be written inside a `@layer`**
- No CSS is allowed outside of a layer

#### Comments
- Use comments only when necessary
- Explain complex logic clearly
- Large sections (such as animations) must have clear section comments

**Example:**
```
/* ----------------------------------
   Animation
---------------------------------- */
```
---

### HTML Structure & Whitespace

- Use **4 spaces** for indentation
- No whitespace **inside** an `article` within a `section`
- Whitespace **is required between sections**

**Correct example:**
```
<section>
    <article>
        <h2>Title</h2>
    </article>
</section>

<section>
    <article>
        <h2>Another title</h2>
    </article>
</section>```
