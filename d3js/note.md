## D3 (Data-Driven Documents)

- Is an open source library that uses SVG, Canvas and HTML for creating visual representation of data on modern web browsers.

### Installations

- Using `npm`, d3 can be installed by `npm install d3`.
- Using cdn, put this at the entry point. `<script src="https://d3js.org/d3.v5.js"></script>`
- Using cdn for production, put this at the entry point. `<script src="https://d3js.org/d3.v5.min.js"></script>`. This will help to trim unnecessary spaces, indentations, etc such that the project is light.

### Importing D3

- Import everything into a named space as `import * as d3 from "d3";`.
- In Node.js, `const d3 = require("d3");`.

## Best Practice Syntax

- Method chaining. This means calling different methods one after the other continuously

## Key functions for DOM manipulation

- d3.select(): the select() function is used to target a specific DOM element. The parameter passed into this function is an actual HTML tag. For example `d3.select("h2")` returns the selection of the first occurance of heading2 element.
- d3.selectAll(): selectAll() function takes one parameter and returns all the instances of the element specified as parameter.
  For example, `d3.selectAll("span")` returns a selection of all the spans in the HTML file.
- style(): This is used to style a specific selection of DOM element. The style() function takes two parameters, the CSS property and its value. For example `d3.select("h1").style("color","red")`.
- attr(): This is used to give attributes to a selected DOM element. It takes two parameters, the attribute name and its value. For example `d3.select("h2").attr("class","container-fluid").attr("name","my-title").attr("id","ramp-up")`.
- text(): Is used to update the text of selected DOM element. For example `d3.select("h2").text("New Title Here")`.
- append(): Is used to append DOM element, for example adding new element to the body can be achieved like `d3.select("body").append("p").text("New Paragraph")`.

## Key functions for Performing actions on DOM elements using external data

- data(): This function takes an array of data as a parameter. This will be the data we want to use for manipulating our DOM elements
- enter(): This function is normally chained with the data() function to help it achieve the looping behavior. It basically tells the DOM element to accept any action that will be chained after enter() function and then move to the next element until the end of all the selected elements.
Note: If we want to use the values in the array, we pass it as parameter in a callback function for every call on the new element. Check the bar chart example in the repo for details