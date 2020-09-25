// from data.js
var tableData = data;

// YOUR CODE HERE!

//  Use d3 to append one table row `tr` for ufosighting to the tbody tag
//  Use d3 to append 1 cell "td" per ufosighting value
//  Use d3 to enter each value into the cell(Object.entries is used to pull 
//out the values for each each in our tableData array object)
var tbody=d3.select("tbody")

tableData.forEach((ufosighting) => {   
    // console.log(ufosighting);
    var row=tbody.append("tr");
    Object.entries(ufosighting).forEach(([key,value]) =>{
        var cell=row.append("td");
        cell.text(value)
})
});


function filterTable(event) {
    // console.log(event);
    //Set inputs by getElementById
         dateInput = document.getElementById('datetime');
         CityInput = document.getElementById('City');
         StateInput = document.getElementById('State');
         CountryInput=document.getElementById('Country');
         ShapeInput=document.getElementById('Shape'); 
    //Set filters
         dateFilter = dateInput.value.toUpperCase();
         CityFilter = CityInput.value.toUpperCase();
         StateFilter = StateInput.value.toUpperCase();
         CountryFilter=CountryInput.value.toUpperCase();
         ShapeFilter = ShapeInput.value.toUpperCase();
         var rows = document.querySelector("#ufo-table tbody").rows;
    // iterate through each of the cells within each row
        for (var i = 0; i < rows.length; i++) {
            var firstCol = rows[i].cells[0].textContent.toUpperCase();
            var secondCol = rows[i].cells[1].textContent.toUpperCase();
            var thirdCol = rows[i].cells[2].textContent.toUpperCase();
            var fourthCol = rows[i].cells[3].textContent.toUpperCase();
            var fifthCol = rows[i].cells[4].textContent.toUpperCase();
    // The indexOf() method returns the position of the first occurrence of a specified value in a string.
    // This method returns -1 if the value to search for never occurs.
            if (firstCol.indexOf(dateFilter) > -1 &&  secondCol.indexOf(CityFilter) > -1 && thirdCol.indexOf(StateFilter) > -1
                                               && fourthCol.indexOf(CountryFilter) > -1 &&  fifthCol.indexOf(ShapeFilter) > -1 ){
    // show the rows
                rows[i].style.display = "";
            } else {
    //hide the rows
                rows[i].style.display = "none";
            }      
        }
    }
    
    //every time a input value is entered the table rows are looked by using the 'keyup' event and the 'filterTable' function
    document.querySelectorAll('#datetime,#City,#State,#Country,#Shape').forEach(element => {
                element.addEventListener('keyup', filterTable, false);
            });


