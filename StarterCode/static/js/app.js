// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
var datesList = tableData.map(ufo => ufo.datetime);
var cityList = tableData.map(ufo => ufo.city);
var stateList = tableData.map(ufo => ufo.state);
var countryList = tableData.map(ufo => ufo.country);
var shapeList = tableData.map(ufo => ufo.shape);
var durList = tableData.map(ufo => ufo.durationMinutes);
var commentList = tableData.map(ufo => ufo.comments)


console.log(datesList);
console.log(cityList);

function write_table(){
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

function clear_table(){
    tbody.text("");
}

function write_filter(sighting){
    var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
}

write_table();

var filterbtn = d3.select("#filter-btn")


filterbtn.on("click", function() {
    // Select the input element and get the raw HTML node
    var dateInput = d3.select("#datetime");
    var cityInput = d3.select("#city");
    var stateInput = d3.select("#state");
    var countryInput = d3.select("#country");
    var shapeInput = d3.select("#shape");
    // Get the value property of the input element
    var dateInputValue = dateInput.property("value");
    var cityInputValue = cityInput.property("value");
    var stateInputValue = stateInput.property("value");
    var countryInputValue = countryInput.property("value");
    var shapeInputValue = shapeInput.property("value");
    //Logic Tree for searches

//5 filters
    if (!!dateInputValue && !!cityInputValue && !!stateInputValue && !!countryInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.city===cityInputValue && sighting.state===stateInputValue && sighting.country===countryInputValue && sighting.shape===shapeInputValue) {
                write_filter(sighting);
            }
        });
    }

//4 filters
else if (!!dateInputValue && !!cityInputValue && !!stateInputValue && !!countryInputValue){
    clear_table();
    tableData.forEach((sighting)=>{
        if (sighting.datetime===dateInputValue && sighting.city===cityInputValue && sighting.state===stateInputValue && sighting.country===countryInputValue) {
            write_filter(sighting);
        }
    });
}

else if (!!dateInputValue && !!cityInputValue && !!stateInputValue && !!shapeInputValue){
    clear_table();
    tableData.forEach((sighting)=>{
        if (sighting.datetime===dateInputValue && sighting.city===cityInputValue && sighting.state===stateInputValue && sighting.shape===shapeInputValue) {
            write_filter(sighting);
        }
    });
}

else if (!!dateInputValue && !!stateInputValue && !!countryInputValue && !!shapeInputValue){
    clear_table();
    tableData.forEach((sighting)=>{
        if (sighting.datetime===dateInputValue && sighting.city===cityInputValue && sighting.country===countryInputValue && sighting.shape===shapeInputValue) {
            write_filter(sighting);
        }
    });
}

else if (!!dateInputValue && !!stateInputValue && !!countryInputValue && !!shapeInputValue){
    clear_table();
    tableData.forEach((sighting)=>{
        if (sighting.datetime===dateInputValue && sighting.state===stateInputValue && sighting.country===countryInputValue && sighting.shape===shapeInputValue) {
            write_filter(sighting);
        }
    });
}

else if (!!cityInputValue && !!stateInputValue && !!countryInputValue && !!shapeInputValue){
    clear_table();
    tableData.forEach((sighting)=>{
        if ( sighting.city===cityInputValue && sighting.state===stateInputValue && sighting.country===countryInputValue && sighting.shape===shapeInputValue) {
            write_filter(sighting);
        }
    });
}
//3 filters

    else if (!!dateInputValue && !!cityInputValue && !!stateInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.city===cityInputValue && sighting.state===stateInputValue) {
                write_filter(sighting);
            }
        });
    }

    else if (!!dateInputValue && !!cityInputValue && !!countryInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.city===cityInputValue && sighting.country===countryInputValue) {
                write_filter(sighting);
            }
        });
    }

    else if (!!cityInputValue && !!stateInputValue && !!countryInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.city===cityInputValue && sighting.state===stateInputValue && sighting.country===countryInputValue) {
                write_filter(sighting);
            }
        });
    }

    else if (!!dateInputValue && !!cityInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.city===cityInputValue && sighting.shape===shapeInputValue) {
                write_filter(sighting);
            }
        });
    }

    else if (!!dateInputValue && !!stateInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.state===stateInputValue&& sighting.shape===shapeInputValue) {
                write_filter(sighting);
            }
        });
    }
    else if (!!cityInputValue && !!stateInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.city===cityInputValue && sighting.state===stateInputValue && sighting.shape===shapeInputValue) {
                write_filter(sighting);
            }
        });
    }

    else if (!!dateInputValue && !!countryInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.country===countryInputValue && sighting.shape===shapeInputValue) {
                write_filter(sighting);
            }
        });
    }

    else if (!!cityInputValue && !!countryInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.city===cityInputValue &&  sighting.country===countryInputValue && sighting.shape===shapeInputValue) {
                write_filter(sighting);
            }
        });
    }

    else if (!!stateInputValue && !!countryInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.state===stateInputValue && sighting.country===countryInputValue && sighting.shape===shapeInputValue) {
                write_filter(sighting);
            }
        });
    }

    else if (!!cityInputValue && !!stateInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.city===cityInputValue && sighting.state===stateInputValue && sighting.shape===shapeInputValue) {
                write_filter(sighting);
            }
        });
    }
//2 filters

    else if (!!dateInputValue && !!cityInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.city===cityInputValue) {
            write_filter(sighting);
            }
        });
    }
    else if (!!dateInputValue && !!stateInputValue){
        clear_table();

        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.state===stateInputValue) {
            write_filter(sighting);
            }
        });
    }
    else if (!!cityInputValue && !!stateInputValue){
        clear_table();

        tableData.forEach((sighting)=>{
            if (sighting.city===cityInputValue && sighting.state===stateInputValue) {
                write_filter(sighting);
            }
        });
    }
    else if (!!dateInputValue && !!countryInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.country===countryInputValue) {
            write_filter(sighting);
            }
        });
    }

    else if (!!dateInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue && sighting.shape===shapeInputValue) {
            write_filter(sighting);
            }
        });
    }

    else if (!!cityInputValue && !!countryInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.city===cityInputValue && sighting.country===countryInputValue) {
            write_filter(sighting);
            }
        });
    }
    else if (!!cityInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.city===cityInputValue && sighting.shape===shapeInputValue) {
            write_filter(sighting);
            }
        });
    }
    else if (!!stateInputValue && !!countryInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.state===stateInputValue && sighting.country===countryInputValue) {
            write_filter(sighting);
            }
        });
    }

    else if (!!stateInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.state===stateInputValue && sighting.shape===shapeInputValue) {
            write_filter(sighting);
            }
        });
    }

    else if (!!countryInputValue && !!shapeInputValue){
        clear_table();
        tableData.forEach((sighting)=>{
            if (sighting.country===countryInputValue && sighting.shape===shapeInputValue) {
            write_filter(sighting);
            }
        });
    }

//1 filter

    else if (!!dateInputValue){
        clear_table();

        tableData.forEach((sighting)=>{
            if (sighting.datetime===dateInputValue) {
                write_filter(sighting);
            }
        });
    }
    else if (!!cityInputValue){
        clear_table();

        tableData.forEach((sighting)=>{
            if (sighting.city===cityInputValue) {
                write_filter(sighting);
            }
        });
    }
    else if (!!stateInputValue){
        clear_table();

        tableData.forEach((sighting)=>{
            if (sighting.state===stateInputValue) {
            write_filter(sighting);
            }
        });
    }
    else if (!!countryInputValue){
        clear_table();

        tableData.forEach((sighting)=>{
            if (sighting.country===countryInputValue) {
            write_filter(sighting);
            }
        });
    }
    else if (!!shapeInputValue){
        clear_table();

        tableData.forEach((sighting)=>{
            if (sighting.shape===shapeInputValue) {
            write_filter(sighting);
            }
        });
    }
    else {
        clear_table();
        write_table();
    }
});
