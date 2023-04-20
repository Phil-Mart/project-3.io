// This function is called when a dropdown menu item is selected
function menu() {
    // Use D3 to select the dropdown menu
    let pullDown = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("./data/filtered_covid.json").then((data) => {
    console.log(data);

    // fill in pullDown menu
    // for (let index = 0; index < state.length; index++) {
    //     pullDown
    //         .append('option')
    //         .text(state[index])
    //         .property('value', state[index])
    //     };

        //upload with initial data
        // let firstSample = state[0]
        // buildBarchart(firstSample);
        // buildMetaData(firstSample);
        // bubbleChart(firstSample);


    let state_list = [];
    let state = data.state;
    let county = data.county;
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

    let firstSample = county(state[0]);
        console.log(firstSample);
        bubbleChart(firstSample); 
    });

//end of menu function   
} 
menu();

// // Create a function for the dropdown menu to change
// function optionChanged(county){
//     let county_object= county(county);
//     console.log(county_object);
//     bubbleChart(county_object);
// }

// // Create a function to filter the county data by state
// function county(county)
//     {console.log("testing again");
//     d3.json("./data/county_covid.json").then((data) => {
//         console.log(data);

//     let state = data.state;
//     //let counties = data.county;
//     let county_index = [];
//     let county_list = [];

//     // for (const [key, value] of Object.entries(state)) {
//     //         if ((value == county))
//     //         {county_index.push(key)}
//     //     };

//     //let county_object = Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes(key)));
 

//     console.log(county_object);

//     /* Object.keys(counties)
//     .filter(key => county_index.includes(key))
//     .reduce((obj, key) => {
//         obj[key] = counties[key]; */
//         return county_object;
//     })}

//    /*  Object.values(county_object).forEach(val => {
//         {county_list.push(val)}
//       }); */

// function bubbleChart(firstSample) {
//     console.log(firstSample);
//     //load data
//      //d3.json("./data/county_covid.json").then((data) => {

// //  Use States for the x values.
//     //  Use Death Rates for the y values.
//     //  Use Population Size for the marker size.
//     //  Use States for the marker colors.
//     //  Use Population,State,Death Rate for the text values.

//         let trace = {
//         x: firstSample.actuals.deaths,
//         y: firstSample.population,
//         text: firstSample.state,
//         text: firstSample.actuals.deaths,
//         text: firstSample.population,
//         mode: 'markers',
//         marker: {
//             size: firstSample.population,
//             color: firstSample.state
//             }      
//         };

//         var data = [trace];

//         bubbleLayout= {
//             title: 'State Deaths by Population Size',
//             xaxis: {title: 'Deaths Per State'}
//         };

// Plotly.newPlot('bubble', data, bubbleLayout);


