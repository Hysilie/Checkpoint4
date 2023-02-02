## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated


/////////////////////////////////////

<h1 align="center">⏝⏜⏝⏜ Welcome to Plants 🪴 project ⏝⏜⏝⏜</h1>
<h2></h2>

<!-- Introduction -->
<h1 href='#'>Introduction</h1>
<p>Hello, I'm Marion 👋, I am studying web development at the Wild Code School of Lyon since september 2022.  </p>
<p>I present you today  the last personnal school project of my formation. The purpose of this project is to group all skills I  developped since the latest six months. It will merge frontend and backend technical stacks.
<p>

<br/>
<br/>


<!-- Objectives -->
<h1 href='#'>The Objectives</h1>
<ul> 🪴 Front-End 🪴
<li>🖼️ Make a wireframe</li>
<li>🖋️ Write user stories</li>
<li>📐 Responsive Website</li>
<li>🕺 Dynamic Website (API call) </li>
</ul>



<ul> 🪴 Back-End 🪴
<li>📄 Create data & database</li>
<li>🚦 Components to data'access </li>
<li>🚏 MVC Schema</li>
</ul>

<br/>
<br/>

<!-- Technical stack -->
<h1 href='#'>Technical Stack</h1>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 

<a href="https://expressjs.com/fr/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="express" width="40" height="40"/> </a>

<a href="https://nodejs.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="Node" width="40" height="40"/> </a> 

  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> 

<a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a>  </p>
<br/>
<br/>
  
  <!-- Wirframe -->
<h1 href='#'>WireFrame</h1>
<p> Access to the Figma -> <a href='https://www.figma.com/file/kptLDnNaPGwkWqbD9Mwjrb/Plants-for-People?t=LQZRXdUUK6oFO5Z1-1' >Here</a></p>

<p align="center">
  <img src="https://i.postimg.cc/Y9FG0yWG/Capture-d-e-cran-2023-02-02-a-11-24-41.png" width="350" title="hover text">
</p>
<p align="center">
<img src="https://i.postimg.cc/ZKBgR87k/Capture-d-e-cran-2023-02-02-a-11-26-18.png" alt="Connexion" border="0">
<img src="https://i.postimg.cc/SNfZjg6v/Capture-d-e-cran-2023-02-02-a-11-27-48.png" alt="Home" border="0">
<img src="https://i.postimg.cc/pXcF08Rd/Capture-d-e-cran-2023-02-02-a-11-28-36.png" alt="Article" border="0">
<img src="https://i.postimg.cc/tTrqX3rZ/Capture-d-e-cran-2023-02-02-a-11-29-56.png" alt="Management" border="0">
<img src="https://i.postimg.cc/s1dty1RG/Capture-d-e-cran-2023-02-02-a-11-30-42.png" alt="Plant" border="0">
</p>
<br/>
<br/>

<!-- <!-- Features -->
<h1 href='#'>Features</h1>
<ul> 🪴👩‍💼 Visitor : 
<li>As a visitor, I can access a homepage allowing me to see the content offered by the application. </li>
<li>As a visitor, I have the possibility to register or log in to my user account from the homepage and the burger menu. </li>
<li>As a visitor, I have access to an "About us" page which allows me to learn more about the ins and outs of the application. </li>
<li>As a visitor, if my browser allows geolocation, I can see the weather like a 'widget'.</li>
</ul>
<br />
<ul> 🪴🧑‍💼 Member :
<li>As a user, I have access to my profile allowing me to access all of my images published and added to favorites. </li>
<li>As a user, I can access the list of articles and their respective content. </li>
<li>As a user, I have the possibility to add, modify or delete my comments in response to an article. </li>
<li>As a user, I access the list of the various publications of other users (images relating to plants). </li>
<li>As a user, when I like a post, I can add or remove it from my favorites list.</li>
<li>As a user, I have the possibility to publish an image / photograph of plants that will be visible to everyone.</li>
</ul>
<br />
<ul> 🪴👩🏻‍💻 Admin :  
<li>As an administrator, I have at least the same rights as users. </li>
<li>As an administrator, I can proceed to the creation or deletion of article. </li>
<li>As an administrator, I can manage the different articles and users (excluding admin) using a dedicated interface. </li>

</ul>

<br/>
<br/> -->
<!-- Installation -->
<h1 href='#'>Installation</h1>
<ul>
<li>1️⃣ git clone</li>
<li>2️⃣ npm run setup</li>
<li>3️⃣ npm run migrate</li>
<li>🚨 you need to desactivate the safemode of your SQL for the moment</li>
<li>4️⃣ create .env files /frontend /backend</li>
</ul>

<br/>
<br/>
<!-- Packages -->
<h1 href='#'>Packages</h1>
<p>I used the <a href='https://github.com/WildCodeSchool/js-template-fullstack' target='_blank' rel="noreferrer">Wild Code School - FullStack - Template</a></p>
<ul>And I add :
<li>TailwindCss for VITE</li>
<li>React Router Dom</li>
<li>TailwindCss for VITE - as a CSS framework</li>
<li>Uuid - as a unique id manager</li>
<li>Multer - as a uploads manager</li>
<li>Argon2 - as a hashing password manager</li>
</ul>

<br/>
<br/>

<!-- Next Features -->
<h1 href='#'>Feature Plan</h1>
<ul>
<li>🚧 Back-end validators</li>
<li>🚧 Refactoring</li>
<li>🚧 Fix some bugs</li>

</ul>
<br/>
<br/>


