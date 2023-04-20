// This function is called when a dropdown menu item is selected
function menu() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("./data/filtered_covid.json").then((data) => {
    // console.log(data);
    
    let state_list = [];
    let state = data.state;
    let county_index = [];
    let county_list = [];
    
        // Only push unique state values
        for (const [key, value] of Object.entries(state)) {
            if (!state_list.includes(value))
            {state_list.push(value)};
        };
        
        // Loop through the list and append new states
        for (let i = 0; i < state_list.length; i++) 
         {
            dropdownMenu
            .append('option')
            .text(state_list[i])
            .property('value', state_list[i]);
            console.log(state_list[0]);
            };


    // Selecting the first state AK
    let firstSample = county(county_list,state_list[0]);
    console.log(county_list);
    bubbleChart(county_list);
    });
} 

// Create a function for the dropdown menu to change
function optionChanged(state_list){
    county_list = [];
    console.log(state_list);
    let county_object = county(county_list,state_list);
    console.log(county_list); 
    bubbleChart(county_list);
}

// Create a function to filter the county data by state
function county(county_data, inputstate) {
    // {console.log("testing again");
    d3.json("./data/filtered_covid.json").then((data) => {
        console.log(data);

    let state = data.state;
    let counties = data.county;
    let county_index = [];
    let county_list = [];

// Create a for loop to capture the key county values for each state
for (const [key, value] of Object.entries(state)) {
    if ((value == inputstate))
    {county_index.push(key)};
    };

    console.log(county_index);
    console.log(counties);
    console.log(data.actuals);

// Create a for loop to link county keys to data
for (let i = 0; i < county_index.length; i++)  {
    {county_data.push(data.actuals[county_index[i]])}
    };

    console.log(county_data);
    return county_data;

})};

// Create a bubble chart to plot county deaths vs. population size
function bubbleChart(firstSample) {
    console.log(firstSample[0].deaths);
    
    //load data
     d3.json("./data/filtered_covid.json").then((data) => {
        console.log(data);
    
    for (let i = 0; i < firstSample.length; i++) {
    deaths = firstSample(firstSample => firstSample[deaths])
    console.log(firstSample[i].deaths);
    }; 
        data1 = {
        x: firstSample.deaths,
        y: firstSample.population,
        mode: 'markers',
        marker: {
            size: firstSample.population,
            color: firstSample.deaths
            }     
        };

        bubbleLayout= {
            title: 'State Deaths by Population Size',
            xaxis: {title: 'Deaths Per State'}
        };

        Plotly.newPlot('bubble', data1, bubbleLayout); 

    })};


 menu();
