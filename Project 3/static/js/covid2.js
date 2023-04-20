// This function is called when a dropdown menu item is selected
function menu() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("./data/county_covid.json").then((data) => {
    console.log(data);
    
    let state_list = [];
    let state = data.state;
    /* let county = data.county; */
    let county_index = [];
    let county_list = [];
    
        // Only push unique state values
        for (const [key, value] of Object.entries(state)) {
        //console.log(`${key}: ${value}`);
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
        console.log(state_list[0]);

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
   /*  let county_object= county(data); */
    console.log(county_list); 
    bubbleChart(county_list);
}

// Create a function to filter the county data by state
function county(county_data, inputstate)
    {console.log("testing again");
    d3.json("./data/county_covid.json").then((data) => {
        console.log(data);

    let state = data.state;
    let counties = data.county;
    let county_index = [];
    let county_list = [];
    //let county_data = [];

    

for (const [key, value] of Object.entries(state)) {
    if ((value == inputstate))
    {county_index.push(key)};
    };

    console.log(county_index);
    console.log(counties);
    console.log(data.actuals);

for (let i = 0; i < county_index.length; i++)  {
    {county_data.push(data.actuals[county_index[i]])}
    };

    console.log(county_data);
    return county_data;

})};

     // Loop through the list and append new counties
     /* for (let i = 0; i < county_index.length; i++) 
     {
        .append('option')
        .text(county_index[i])
        .property('value', county_index[i]);
        } */
/* 
    let county_object = Object.fromEntries(Object.entries(inputstate).filter(([key]) => key.includes(key)));
    console.log(county_object); */

    /* Object.keys(counties)
    .filter(key => county_index.includes(key))
    .reduce((obj, key) => {
        obj[key] = counties[key]; */
    //     bubbleChart();
    //     return county_object;
    // })}

   /*  Object.values(county_object).forEach(val => {
        {county_list.push(val)}
      }); */

function bubbleChart(firstSample) {
    console.log(firstSample[0].deaths);
    
    //load data
     //d3.json("./data/county_covid.json").then((data) => {

//  Use States for the x values.
    //  Use Death Rates for the y values.
    //  Use Population Size for the marker size.
    //  Use States for the marker colors.
    //  Use Population,State,Death Rate for the text values.
    
    let death_list = [];
   for (let i = 0; i < firstSample.length; i++) {
    //deaths = firstSample(firstSample => firstSample[deaths])
    console.log(firstSample[i].deaths);
   };
        data1 = {
        x: firstSample[0].deaths,
        y: firstSample[0].population,
        mode: 'markers',
        marker: {
            size: firstSample[0].population,
            color: firstSample[0].deaths
            }     
        };

        bubbleLayout= {
            title: 'State Deaths by Population Size',
            xaxis: {title: 'Deaths Per State'}
        };

        Plotly.newPlot('bubble', data1, bubbleLayout); 

    };


 menu();
