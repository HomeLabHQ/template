<a name="readme-top"></a>

<br />

<div align="center">
  <h3 align="center">{{cookiecutter.repo_name}}</h3>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <a href="#demo">Demo</a>
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
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Django][Django]][Django-url]
[![React][React.js]][React-url]
[![Redux][Redux]][Redux-url]
[![Vite][Vite]][Vite-url]
[![Antd][Antd]][Antd-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

For local development you will need:

- Python 3.11.0
- Node 18.17.1
  - Yarn 1.22.19

Also strongly recommend using tools like nvm and pyenv for running specific versions of Python and Node for this project

> NOTE: Additionally install poetry self add poetry-dotenv-plugin to auto load env variables in shell and run command

### Installation

1. Run `make setup`
2. Initialize backend via `make be_init`
   - Creates superuser from .env variables
   - Run migrations

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

There are 2 methods of usage:

- Development environment
  - VScode debug config in you need to play around with debugger
  - Run `make start`. Please note that in this case you will manually need to add env variables.

Complete app to use

- Launch docker stack `docker compose up -d`
- Create superuser from .env `docker exec -it api python manage.py createsuperuser --no-input`
- Access via `http://hostip`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Antd]: https://img.shields.io/badge/antd-20232A?style=for-the-badge&logo=antdesign&logoColor=61DAFB
[antd-url]: https://ant.design/
[redux]: https://img.shields.io/badge/Redux%20toolkit-20232A?style=for-the-badge&logo=redux&logoColor=61DAFB
[redux-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite&logoColor=61DAFB
[Vite-url]: https://vitejs.dev/
[Django]: https://img.shields.io/badge/Django-20232A?style=for-the-badge&logo=django&logoColor=61DAFB
[Django-url]: https://www.djangoproject.com/
