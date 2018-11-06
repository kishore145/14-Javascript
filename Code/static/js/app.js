//from data.js;
var tableData = data;

//function to return date of the data
var datetime = function(d) {
    return d.datetime;
}

// YOUR CODE HERE!
var tbody = d3.select("tbody");
// Debug code for ensuring the data can be read
console.log(tableData);

// Insert values into the table
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// // Bind the ufo table with corresponding data
// console.log(tbody.selectAll("tr").data());
// tr = tbody.selectAll("tr td").data(tableData, datetime);
// console.log(tr.data());

// Code for Filtering data on date-time
// Select the submit button
var filterbutton = d3.select("#filter-btn");

filterbutton.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //Debugging code to print input values to console
  console.log(inputValue);
  
  var filteredData = tableData.filter(ufoReport => ufoReport.datetime == inputValue);

  //Debugging code to print filtered values to console
  console.log(filteredData);
  
  //Clear current records from the table
  tbody.html("");
  
  //Insert filtered records into the table
  // Insert values into the table
    filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});