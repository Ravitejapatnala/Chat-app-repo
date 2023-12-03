/**
 * V8 engine is responsible for running the JS code in the browser. But inorder to run the JS code outside the
 * browser and in the terminal we need nodejs installation.
 * 
 * In the browser we get all the inbuilt methods by invoking them(ex : call(), bind(), apply()) from the browser.
 * But now as we are running our code outside the browser we need express.js to get them.
 * 
 * Express JS:Express is a node js web application framework that provides broad features for building web and
 * mobile applications. It is used to build a single page, multipage, and hybrid web application. This express code
 * is hosted on the npm website inorder to use it we need to import it.
 * 
 * Now, if we want to make our code npm compactible we need to write npm init in the terminal. And then it gives 
 * a package.json file which contains the meta data of the project.
 * 
 * Now we are capable of using any package or framework from npm website.
 * 
 * Now we need to install express js from npm by writing npm i express or npm install express. We will get node
 * modules folder and package-lock-json file added to our project folder.
 * 
 * package.json contains the meta data of the project.
 * package-lock.json contains the more detailed information of the project.
 * node_modules folder contains all the framework or packages like express.
 * 
 * .gitignore file prevents the node_modules folder to get added into github as it contains all the frameworks we
 * used to make the project which is quite confidential to keep.
 * 
 * We use middleware to send folder as app.get is incapable of receiving the folders but only files.
 */