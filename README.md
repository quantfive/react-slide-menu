# React Slide Menu

[![Build Status](https://travis-ci.org/UdiliaInc/create-react-library.svg?branch=master)](https://travis-ci.org/UdiliaInc/create-react-library)
[![Dependencies](https://img.shields.io/david/udiliaInc/create-react-library.svg)]()
[![Dev Dependencies](https://img.shields.io/david/dev/udiliaInc/create-react-library.svg)]()

[![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/react-slide-menu.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/react-slide-menu

## Demo

http://lightninglu10.react-slide-menu.hellodeploy.com/

![Alt Text](https://github.com/quantfive/react-slide-menu/blob/master/slide.gif?raw=true)

## Install the package
Use NPM or Yarn

```sh
yarn add react-slide-menu
```

```sh
npm install --save react-slide-menu
```

## Usage

1 . Require react-atmosphere-menu after installation

```js
import SlideMenu from 'react-slide-menu'
```

2 . Wrap react-slide-menu around your app


```js
<SlideMenu>
  <YOUR APP />
</SlideMenu>
```

3 . Customize options

```js
var nav = [
  {id: 'home', label: 'Home', path: '/'},
  {id: 'about', label: 'About', path: '/about'},
  {id: 'discover', label: 'Discover', path: '/discover'},
]
<SlideMenu
  active={this.state.slideMenuActive}
  nav={nav}
  reactRouter={true}
  closeMenu={() => this.setState({slideMenuActive: false})}>
  <YOUR APP />
</SlideMenu
```

## Main Options
Option|Type	|  Description
|:---|:---|:---
 active	|  Boolean  | `true` will show the menu and `false` will hide the menu. (Required)
 nav	|  Array  | An array of objects that describe the navigation menu. Each object needs to have keys `id`, `label`, and `path`. (Required)
 reactRouter |  Boolean  | `true` if you use React Router in your project `false` if you don't.
 extraComponent |  Component  | Displayed after the Nav you can add anything you want, add a component for a logo or something else like so: `<img src={LOGO} />`.
 closeMenu |  Function  | The function that closes your atmosphere menu. Should set the variable for the `active` prop to false.
 
 ## Extra Options / Styling options
 Option|Type	|  Description
|:---|:---|:---
 menuClassName |  String  | Extra class to style the AtmosphereMenu component. Default: `menu: { position: 'relative', overflow: 'hidden', },`
 appClassName	|  String  | Extra class to style your app when the menu is active.
 companyClassName	|  String  | Extra class to style the `companyName` text.
 navItemClassName |  String  | Extra class to style each Navigation item. Default: `navItem: { marginBottom: '25px', opacity: '.7', ':hover': { opacity: '1',}},`
 navLinkStyle |  String  | Extra prop to style the `<a>` or `Link` element of each Navigation Item. Default: `linkStyle: { textDecoration: 'none', color: '#fff', fontWeight: '300', '@media only screen and (min-width: 768px)': { fontSize: '2em', }, '@media only screen and (min-width: 1440px)': { fontSize: '2.5em', }},`
 linkClassName |  String  | Extra class to style the `<a>` or `Link` element of each Navigation item. Has the same style default as above `navLinkStyle`.
 navClassName  |  String  | Extra class to style the whole Nav component.

## Inspired by
www.youtube.com
and
www.typeform.com
