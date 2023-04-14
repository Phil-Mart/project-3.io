// This function is called when a dropdown menu item is selected
function menu() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("./data/county_covid.json").then((data) => {
    console.log(data);
    
    let state_list = [];
    let state = data.state;
     
    
    //console.log(state);
        
        for (const [key, value] of Object.entries(state)) {
        console.log(`${key}: ${value}`);
            if (!state_list.includes(value))
            {state_list.push(value)}
        };
        

        for (let i = 0; i < state_list.length; i++) 
         {
            dropdownMenu
            .append('option')
            .text(state_list[i])
            .property('value', state_list[i])
            }
 
let firstSample = state[0]
            //buildBarchart(firstSample);
            //buildMetaData(firstSample);
            bubbleChart(firstSample); 
    });
}

/* function buildBarchart(firstSample) {
    // load data
    d3.json("./data/county_covid.json").then((data) => {
    
        //parse and filter data
        let states = data.state;
        let sampleArray = states.filter(sampleObj => sampleObj.id == firstSample);
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
}); */

//end of buildChart funct()

function bubbleChart(firstSample) {
    //load data
     d3.json("./data/county_covid.json").then((data) => {

    let county = data.county 

    const jsonObject = [data.county]
    sampleArray = Object.keys(county). filter((key) => key.includes('Name')).reduce((cur, key) => { return Object.assign(obj, {
        [key]: county [key]
      })}, {});
    results = sampleArray[0]


//  Use States for the x values.
    //  Use Death Rates for the y values.
    //  Use Population Size for the marker size.
    //  Use States for the marker colors.
    //  Use Population,State,Death Rate for the text values.

        let trace = {
    
        x: results.actuals.deaths,
        y: results.population,
        text: results.state,
        text: results.actuals.deaths,
        text: results.population,
        mode: 'markers',
        marker: {
            size: results.population,
            color: results.state
            }
                

        };

        bubbleLayout= {
            title: 'State Deaths by Population Size',
            xaxis: {title: 'Deaths Per State'}
        };

        Plotly.newPlot('bubble', [trace], bubbleLayout);

    });


}

 menu();
