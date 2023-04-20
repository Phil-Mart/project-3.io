// This function is called when a dropdown menu item is selected
function menu() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("./data/county_covid.json").then((data) => {
        console.log(data);
    
    let state_list = [];
    let state = data.state;
    let counties = data.county;
    let county_index = [];
    let county_list = [];
    
    //console.log(state);
        
        for (const [key, value] of Object.entries(state)) {
        // console.log(`${key}: ${value}`);
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
 
    let firstSample = state[0];
        for (const [key, value] of Object.entries(state)) {
                //console.log(`${key}: ${value}`);
                    if ((value == firstSample))
                    {county_index.push(key)}
                };
        //console.log(county_index);
        let county_object = Object.keys(counties)
            .filter(key => county_index.includes(key))
            .reduce((obj, key) => {
                obj[key] = counties[key];
                return obj;
            }, {});

        Object.values(county_object).forEach(val => {
                {county_list.push(val)}
              });
            console.log(county_list); 

            bubbleChart(firstSample); 
    });
}
    
function optionChanged(county){
    counts(county)

}

function counts(county){
            d3.json("./data/county_covid.json").then((data) => {
                console.log(data);
        
            let state = data.state;
            let county = data.county;
            let county_index = [];
            let county_list = [];
        
            for (const [key, value] of Object.entries(state)) {
                //console.log(`${key}: ${value}`);
                    if ((value == county))
                    {county_index.push(key)}
                };
        
            //console.log(county_index);
            let county_object = Object.keys(county)
            .filter(key => county_index.includes(key))
            .reduce((obj, key) => {
                obj[key] = county [key];
                return obj;
            }, {});
        
            Object.values(county_object).forEach(val => {
                {county_list.push(val);
                 console.log(county_list)
                }});
            })};
            
//  Use States for the x values.
    //  Use Death Rates for the y values.
    //  Use Population Size for the marker size.
    //  Use States for the marker colors.
    //  Use Population,State,Death Rate for the text values.

    function bubbleChart(firstSample) {
    const bubbleChart = counts(county);
    // Load data
    d3.json("./data/county_covid.json").then((data) => {    
    console.log(data);   

    let county = data.county;
    console.log(county);
    
    let county_data = data.actuals;
    console.log(county_data);

    let x_values_init = Object.values(firstSample.actuals);

    let x_values = [];
    let y_values = [];

        for(i=0; i<x_values_init.length;i++){
        x_values.push(x_values_init[i].deaths);
        y_values.push(x_values_init[i].cases)
    }

        var data1 = [{
    
        x: x_values,
        y: y_values,
        mode: 'markers',
        marker: {
            size: y_values,
            color: x_values
            }     
        }];

        bubbleLayout= {
            title: 'State Deaths by Population Size',
            xaxis: {title: 'Deaths Per State'}
        };

        Plotly.newPlot('bubble', data1, bubbleLayout); 

    })};

  menu();
