/**
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/test/debug.js"
    }
  ]
}
 */
const util = require('util');
const parser = require("../src/index");
const ast = parser.parseEval(`
get_class($var)::$$$$$property;
`, { 
    parser: {
      debug: true
    }
  }
);
console.log(
  util.inspect(ast, false, 10, true)
);