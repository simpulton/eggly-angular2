<p align="center">
  <a href="http://onehungrymind.com" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/590361/11959243/803ca606-a889-11e5-8143-d328516e8324.jpg" alt="Eggly and Angular 2" width="500"/>
  </a>
</p>

# Eggly with Angular 2
This is a simple bookmark manager built with Angular 2 and Typescript. It uses [Webpack](http://webpack.github.io/) for building files and [Typings](https://github.com/typings/typings) for managing our Typescript typings. 

This repo demonstrates many foundational concepts of Angular 2, such as component construction, provider creation (and injecting), routing, coupling of `Http` with observables to get remote data, and much more!

> **Warning:** Angular 2.0 is not production ready yet! Go <a href="http://splintercode.github.io/is-angular-2-ready/" target="_blank">here</a> to stay up to date with the status of Angular 2.0.

## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.1.x`+ and NPM `2.14.x`+

Recommended packages for future development with Angular 2 and TypeScript:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `typings` (`npm install --global typings`)
* `typescript` (`npm install --global typescript`)

## Getting started
```bash
git clone https://github.com/simpulton/eggly-angular2.git
cd eggly-angular2
npm i # installs NPM packages AND necessary typings
npm start
```
Navigate to <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser.
> For a complete list of commands, view the `scripts` attribute in the
<a href="https://github.com/simpulton/eggly-angular2/blob/master/package.json" target="_blank">`package.json`</a> file.

## TypeScript
To take full advantage of TypeScript, make sure to install it globally.
``` bash
npm i -g typescript
```
Also, make sure to use a TypeScript-compatible editor. We've had good experiences with the following:
* <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>
* <a href="https://www.jetbrains.com/webstorm/download/" target="_blank">Webstorm 10</a>
* <a href="https://atom.io/" target="_blank">Atom</a> with <a href="https://atom.io/packages/atom-typescript" target="_blank">TypeScript plugin</a>
* <a href="http://www.sublimetext.com/3" target="_blank">Sublime Text</a> with <a href="https://github.com/Microsoft/Typescript-Sublime-plugin#installation" target="_blank">Typescript-Sublime-Plugin</a>
