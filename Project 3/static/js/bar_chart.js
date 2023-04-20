let countydata =  {"actuals": {
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

function buildBarchart(countydata) {
    // load data
    d3.json(link).then((data) => {
    
        //parse and filter data
        let states = data.state;
        let sampleArray = state.filter(sampleObj => sampleObj.id == sample);
        let result = sampleArray[0];
        console.log(result);

        //How do I pull flasked state names into 
        // let state_name = result.state;

        let state_labels = result.state;
        let county = result.county
        let state_infections = result.metrics.weeklyNewCasesPer100k;
        console.log(state_infections);
  
        let yticks = county.slice(0,10).map(county => `${county}`).reverse();

        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        let trace1 = {
            // Use sample_values as the values for the bar chart.
            x : state_infections.slice(0,10).reverse(),
            // Use otu_ids as the labels for the bar chart.
            y : yticks,
            // Use otu_labels as the hovertext for the chart.
            text: county.slice(0,10).reverse(),
            type: 'bar',
            orientation: 'h'
    
        };
    
        //turn data into array
        let traceData = [trace1];

        let layout = {
        title: (`Most Infected Counties in ${states}:`) ,
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

//end of buildChart funct()
}