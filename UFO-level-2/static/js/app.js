// from data.js
var tableData = data;

var tbody = d3.select("tbody")
function filterData1 (x) {
  // Refresh Data
  tbody.html("")
  // Loop through data
  x.forEach(dataRow => {
    var row = tbody.append("tr")
    Object.values(dataRow).forEach(val => {
      var cell = row.append("td")
      cell.text(val)
    })
  }
)};

var button = d3.select("button")
button.on("click", function() {
  var filterData = tableData
  var dateTime = d3.select("#datetime").property("value")
  var city = d3.select("#city").property("value")
  var state = d3.select("#state").property("value")
  var country = d3.select("#country").property("value")
  var shape = d3.select("#shape").property("value")
  var filters = {
    "datetime" : dateTime,
    "city" : city,
    "state" : state,
    "country" : country,
    "shape" : shape
  }
  Object.entries(filters).forEach(([key, value]) => {
    if (value == "") {
      delete filters[key]
    } 
    else {
      console.log(key, value)
    }
  })
  Object.entries(filters).forEach(([key,value]) => {
    filterData = filterData.filter(row => row[key] === value)
    filterData1(filterData)
    console.log(filterData);
  })

 
});

