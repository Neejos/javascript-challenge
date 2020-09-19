// from data.js
var tableData = data;

// YOUR CODE HERE!

//  Use d3 to append one table row `tr` for ufosighting to the tbody tag
//  Use d3 to append 1 cell "td" per ufosighting value
//  Use d3 to enter each value into the cell(Object.entries is used to pull 
//out the values for each each in our tableData array object)
var tbody=d3.select("tbody")

tableData.forEach((ufosighting) => {   
    console.log(ufosighting);
    var row=tbody.append("tr");
    Object.entries(ufosighting).forEach(([key,value]) =>{
        var cell=row.append("td");
        cell.text(value)
})
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-control");


function runfunction(){
     // Prevent the page from refreshing
  d3.event.preventDefault();
  
    //Get the value property of the input elements Date and State
  
    var dateinput=d3.select("#datetime").property("value");
    var cityinput=d3.select("#City").property("value");
    var stateinput=d3.select("#State").property("value");
    var countryinput=d3.select("#Country").property("value");
    var shapeinput=d3.select("#Shape").property("value");
    console.log(dateinput,stateinput);
    if (dateinput.length !== 0 && stateinput.length !== 0 ) {
        var filtereddata = tableData.filter((ufosighting) =>ufosighting.datetime  === dateinput )
            .filter((ufosighting) =>ufosighting.city === cityinput)
            .filter((ufosighting) =>ufosighting.state === stateinput)
            .filter((ufosighting) =>ufosighting.country === countryinput)
            .filter((ufosighting) =>ufosighting.shape === shapeinput);
            console.log(filtereddata);
            tbody.html("");
            filtereddata.forEach((filteredsighting) => {   
                console.log(filteredsighting);
                var row=tbody.append("tr");
                Object.entries(filteredsighting).forEach(([key,value]) =>{
                    var cell=row.append("td");
                    cell.text(value)
            });
            });
    }
    else {
        console.log("no entry");
        tableData.forEach((ufosighting) => {   
            console.log(ufosighting);
            var row=tbody.append("tr");
            Object.entries(ufosighting).forEach(([key,value]) =>{
                var cell=row.append("td");
                cell.text(value)
        })
        });
    };
};


// Create event handlers 
button.on("click",runfunction);


