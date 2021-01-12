[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">


  <h3 align="center">New York Times News (Fast Track Project)</h3>

 

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#running-the-project">Running the Project</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

**New York News Preview** <br>
<a href="https://ibb.co/1R69VxW"><img src="https://i.ibb.co/bNJrhn9/NYT-News.png" alt="NYT-News" border="0" /></a>

Web application that uses the NYT (New York Times) API and displays a list of news about "technology" and "science".

### Built With
  
The project used the addon / plugins / framewoks below.

* [Apollo](https://www.apollographql.com/docs/apollo-server/) 
* [Axios](https://www.npmjs.com/package/axios)
* [Graphql](https://graphql.org)
* [Node.js](https://nodejs.org/en/)
* [React](https://pt-br.reactjs.org)
* [Styled Components](https://styled-components.com)
* [Typescript](https://www.typescriptlang.org)



<!-- GETTING STARTED -->
## Getting Started

To use the project locally you will need to follow the steps below

### Prerequisites

Things you need to use the software and how to install.
* node.js
  ```sh
  v10.18.1 or later;
  ```
* npm
  ```sh
  v6.14.8 or later;
  ```
### Installation

1. Create an account at [https://developer.nytimes.com](https://developer.nytimes.com)
2. After login click on your email and the apps option and create your key
3. Authorize Top Stories API at [https://developer.nytimes.com/docs/top-stories-product/1/overview](https://developer.nytimes.com/docs/top-stories-product/1/overview) 
4. Clone the repo
   ```sh
   git clone https://github.com/rleaoinfo/NYT_news.git
   ```
5. Install NPM packages
   ```sh
   npm install:all
   ```
6. Enter your API KEY in `packages\server\.env`
   ```JS
   API_KEY = <INSERT THE API KEY HERE>;
   ```



<!-- RUNNING THE PROJECT -->
## Running the Project



1. On project folder gitbash the command
   ```sh
   npm start
   ```



<!-- CONTACT -->
## Contact

Rafael Leão - rleaoinfo@gmail.com

NYT_News : [https://github.com/rleaoinfo/NYT_news](https://github.com/rleaoinfo/NYT_news)




<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/rafaelsilvaleao/
