
import greeter from './Greeter.js';
import React from 'react'; // React 0.14版本之后将react package拆分成了 react 和 react-dom 两个package
import ReactDom from 'react-dom';

let AppComponent = require('./components/productBox.jsx');
let Running=greeter.Running;
require(["jquery"], function ($) {

 $('#root').append(greeter());
console.log(greeter.tag);
console.log(Running.a);
console.log(Running.findMaxDuplicateChar('dffd'));
ReactDom.render(
	<AppComponent />, document.getElementById('root')
	);
});