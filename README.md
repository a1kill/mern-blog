# mern-blog

> A simple blogging application created using the MERN stack.

<p align=center>
<a target="_blank" title="MongoDB"><img src="https://img.shields.io/badge/mongo-darkgreen"></a><a target="_blank" title="ExpressJS"><img src="https://img.shields.io/badge/express-red"></a><a target="_blank" title="ReactJS"><img src="https://img.shields.io/badge/react-blue"></a><a target="_blank" title="NodeJS"><img src="https://img.shields.io/badge/node-green"></a>
</p>  

- Front-end Framework: **React, React-Router, React-DOM**
- Front-end Ajax communication: **Axios**
- Front-end Web RWD Design: **Material-UI**
- Back-end Framework: **NodeJS, ExpressJS**
- Database: **MongoDB, Mongoose, GridFS**
- Bundling Tools: **Webpack, Babel**

## Install

```Shell
$ npm install
$ npm run start

# Blog at http://localhost:3000/
```

## Directory Tree

```
$ tree .
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   │   ├── blog.jpg
│   │   ├── bot.png
│   │   ├── favicon.ico
│   │   ├── login.jpg
│   │   └── signup.jpg
│   ├── index.html
│   └── outputs
│       └── index.js
├── server.js
├── src
│   ├── app
│   │   ├── App.js
│   │   ├── Blog.js
│   │   ├── ButtonAppBar.js
│   │   ├── EditArticle.js
│   │   ├── InsetList.js
│   │   ├── InsetListItem.js
│   │   ├── Login.js
│   │   ├── MenuDrawer.js
│   │   ├── PreviewArticle.js
│   │   ├── SignUp.js
│   │   ├── SimpleDialog.js
│   │   └── index.js
│   ├── models
│   │   ├── Post.js
│   │   └── User.js
│   └── socket
│       ├── PostSocket.js
│       └── UserSocket.js
└── webpack.config.js

7 directories, 28 files
```

## Required global packages

```shell
$ npm install -g nodemon
```
