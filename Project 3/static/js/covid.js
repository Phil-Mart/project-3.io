// This function is called when a dropdown menu item is selected
function menu() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("./data/county_covid.json").then((data) => {
    console.log(data);
    
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
} 

// Create a function for the dropdown menu to change
function optionChanged(county){
    let county_object= county(county);
    console.log(county_object);
    bubbleChart(county_object);
}

// Create a function to filter the county data by state
function county(county)
    {console.log("testing again");
    d3.json("./data/county_covid.json").then((data) => {
        console.log(data);

    let state = data.state;
    //let counties = data.county;
    let county_index = [];
    let county_list = [];

    // for (const [key, value] of Object.entries(state)) {
    //         if ((value == county))
    //         {county_index.push(key)}
    //     };

    //let county_object = Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes(key)));
    let county_object = {"actuals": {
        "0": {
            "cases": 811,
            "deaths": 0,
            "positiveTests": null,
            "negativeTests": null,
            "contactTracers": null,
            "hospitalBeds": {
                "capacity": null,
                "currentUsageTotal": null,
                "currentUsageCovid": null,
                "weeklyCovidAdmissions": null
            },
            "hsaHospitalBeds": {
                "capacity": 822,
                "currentUsageTotal": 669,
                "currentUsageCovid": 13,
                "weeklyCovidAdmissions": 11
            },
            "icuBeds": {
                "capacity": null,
                "currentUsageTotal": null,
                "currentUsageCovid": null
            },
            "hsaIcuBeds": {
                "capacity": 78,
                "currentUsageTotal": 65,
                "currentUsageCovid": 1
            },
            "newCases": 0,
            "newDeaths": 0,
            "vaccinesDistributed": null,
            "vaccinationsInitiated": 2900,
            "vaccinationsCompleted": 2498,
            "vaccinationsAdditionalDose": 1037,
            "vaccinationsFall2022BivalentBooster": 196,
            "vaccinesAdministered": null,
            "vaccinesAdministeredDemographics": null,
            "vaccinationsInitiatedDemographics": null
        }}};

    console.log(county_object);

    /* Object.keys(counties)
    .filter(key => county_index.includes(key))
    .reduce((obj, key) => {
        obj[key] = counties[key]; */
        return county_object;
    })}

   /*  Object.values(county_object).forEach(val => {
        {county_list.push(val)}
      }); */

function bubbleChart(firstSample) {
    console.log(firstSample);
    //load data
     //d3.json("./data/county_covid.json").then((data) => {

//  Use States for the x values.
    //  Use Death Rates for the y values.
    //  Use Population Size for the marker size.
    //  Use States for the marker colors.
    //  Use Population,State,Death Rate for the text values.

        let trace = {
        x: firstSample.actuals.deaths,
        y: firstSample.population,
        text: firstSample.state,
        text: firstSample.actuals.deaths,
        text: firstSample.population,
        mode: 'markers',
        marker: {
            size: firstSample.population,
            color: firstSample.state
            }      
        };

        var data = [trace];

        bubbleLayout= {
            title: 'State Deaths by Population Size',
            xaxis: {title: 'Deaths Per State'}
        };

Plotly.newPlot('bubble', data, bubbleLayout);

    }; 

 menu();
