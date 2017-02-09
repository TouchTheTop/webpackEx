
import greeter from './Greeter.js';
import React from 'react';

let AppComponent = require('./components/productBox.jsx');
let Running=greeter.Running;
require(["jquery"], function ($) {

 $('#root').append(greeter());
console.log(greeter.tag);
console.log(Running.a);
console.log(Running.findMaxDuplicateChar());
React.render(
	<AppComponent />, document.getElementById('root')
	);
});