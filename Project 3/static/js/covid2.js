function menu() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("./data/county_covid.json").then((data) => {
    console.log(data);
    
    let state_list = [];
    let state = data.state;
    // let county_index = [];
    // let county_list = [];
    
        // Only push unique state values
        for (const [key, value] of Object.entries(state)) {
            if (!state_list.includes(value))
            {state_list.push(value)};
        }
        
        // Loop through the list and append new states
        for (let i = 0; i < state_list.length; i++) 
         {
            dropdownMenu
            .append('option')
            .text(state_list[i])
            .property('value', state_list[i]);
            }
        // console.log(state_list[0]);

    // Selecting the first state AK
    // let firstSample = county(county_list,state_list[0]);
    let firstSample = state[0]
    console.log(county_list);
    bubbleChart(firstSample);
    buildBarchart(firstSample);
    });
// end of menu function
} 
menu();


// Create a function for the dropdown menu to change
// function optionChanged(newSample){
//     // county_list = [];
//     console.log(newSample);
//     // let county_object = county(county_list,state_list);
//     // console.log(county_list); 
//     // bubbleChart(newSample);
//     // buildBarchart(newSample);
// }

// // Create a function to filter the county data by state
// // function county(inputstate) {
// //     d3.json("./data/county_covid.json").then((data) => {
// //         console.log(data);

// //     let state = data.state;
// //     let counties = data.county;
// //     let county_index = [];
// //     // let county_list = [];
// //     let county_data = [];

// // // Create a for loop to capture the key county values for each state
// //     for (const [key, value] of Object.entries(state)) {
// //         if ((value == inputstate))
// //         {county_index.push(key)};
// //         };

// //         // console.log(county_index);
// //         console.log(county_index);
// //         // console.log(data.actuals);

// //     // Create a for loop to link county keys to data
// //     for (let i = 0; i < county_index.length; i++) {
// //         {county_data.push(data.actuals[county_index[i]])};
// //         return county_data;
// //         };

// //         console.log(county_data);

// //     });
// // //end of county function
// // }
// // county();


function buildBarchart(sample) {
    // load data
    d3.json('./old_files/covid.json').then((data) => {
    
        //parse and filter data
        let county = data.county;
        let countyArray = county.filter(countyObj => countyObj.id == sample);
        let result = countyArray[0];
        console.log(result);
        
        let otu_ids = result.otu_ids;
        // console.log(otu_ids);

        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;
        console.log(sample_values);
        //sliced data? 
        let yticks = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();

        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        let trace1 = {
            // Use sample_values as the values for the bar chart.
            x : sample_values.slice(0,10).reverse(),
            // Use otu_ids as the labels for the bar chart.
            y : yticks,
            // Use otu_labels as the hovertext for the chart.
            text: otu_labels.slice(0,10).reverse(),
            type: 'bar',
            orientation: 'h'
    
        };
    
        //turn data into array
        let traceData = [trace1];

        let layout = {
        title: "OTU Values",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
        };

        //call the bar chart (html, array, kwargs)
        Plotly.newPlot("bar", traceData, layout);
});
    
// //End of buildChart function
}

buildBarchart();

// Create a bubble chart to plot county deaths vs. population size
function bubbleChart(sample) {
    // console.log(firstSample[0].deaths);
    
    //load data
    d3.json("./data/county_covid.json").then((data) => {
        // console.log(data);

        //parse & filter the data
        let actuals = data.actuals;
        // let actualsArray = actuals.filter(actualObj => actualObj.id == sample);
        // let resultX = actualsArray[0];
        let resultX = [actuals.deaths]

        let population = data.population;
        let populationArray = population.filter(populationObj => populationObj.id == sample);
        let resultY = [population];

        let county = data.county;
        let countryArray = county.filter(sampleObj => sampleObj.id == sample);
        let resultZ = countryArray[0]
    
    // for (let i = 0; i < firstSample.length; i++) {
    // deaths = firstSample(firstSample => firstSample[deaths])
    // console.log(firstSample[i].deaths);
    // } 
        data1 = {
        x: resultX.deaths,
        y: resultY.population,
        text: resultZ,
        mode: 'markers',
        marker: {
            size: resultX.deaths,
            color: resultY
            }     
        };

        bubbleLayout= {
            title: 'Mortalities by County',
            xaxis: {title: 'Population Size'}
        };

        Plotly.newPlot('bubble', [data1], bubbleLayout); 

    });
//end of bubbleChart function
}
bubbleChart();


