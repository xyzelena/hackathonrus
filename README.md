[![Maintainability](https://api.codeclimate.com/v1/badges/3281022e4aecdc919ac7/maintainability)](https://codeclimate.com/github/xyzelena/hackathonrus/maintainability)

# hackathonrus

Hackathon aggregator for [letshackhack](https://www.xn--80aa3anexr8c.xn--p1acf/letshackhack)

## Our team "Quartet" consists of:

1. UX/UI: Anastasia Suvorova
2. UX/UI: Ekaterina Stashkevich 
3. Analyst/ML-dev: Elena Burnyasheva 
4. Frontend: Elena Khuzhina 
5. Backend/TeamLead: Roman Tatarinov

## Main links: 
* [Link to Figma layout](https://www.figma.com/design/CnTTlmMmbl3zUkY97oMBAS/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B5%D1%82-%D0%A5%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD?node-id=58-2266&t=qLacBnMpufYBXrSz-0)
* [Link to presentation](https://www.figma.com/design/Ez8z5zhb7RrNvUYXS8Waoe/%D0%A5%D0%B0%D0%BA%D0%B0%D1%82%D0%BE%D0%BD-%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B5%D1%82-%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-(Copy)?node-id=0-1&t=FNGw2SOgokxreUya-0)

## For the frontend were used: 
* Setting up the environment: node.js, npm, ESLint, Makefile;
* Installing Create React App, React Router, Redux Toolkit; 
* Working with API, asynchronous requests using axios;

To maintain code quality the following technologies were used: CodeClimate, Eslint.

## For the backend were used: 
python(FastAPI, sqlalchemy, pydantic), postgresql, docker, docker-compose, nginx

Server: http://94.198.218.227/openapi

Examples of received data: 
* http://94.198.218.227/hackathons/?size=20&page=1
* http://94.198.218.227/articles/?size=20&page=1
  

## Available Scripts

You can also use the list of commands in the __Makefile__ for faster typing.

___________________

### `npm install`

This command installs a package and any packages that it depends on for this project. 

___________________

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

_______________

### `npm run build`

Builds the app for production to the `build` folder.

___________________

