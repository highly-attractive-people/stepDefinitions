var regex = /^(?:the )?(inner )?html of "([^""]*)" element matches "([^""]*)"$/;
var results = regex.exec('html of "#id" element matches "<h1>Hello</h1>"');
console.log(results);
