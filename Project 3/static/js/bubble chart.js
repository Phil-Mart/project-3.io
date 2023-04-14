 function bubbleChart(sample) {
    //load data
     d3.json('C:\Users\Jorge\Desktop\project-3.io\Project 3\resources\covid.json').then((data) => {

    let covid = data.covid;
    let covidArray = covid.filter(sampleObj => sampleObj.id == sample);
    let result = sampleArray[0];

//  Use States for the x values.
    //  Use Death Rates for the y values.
    //  Use Population Size for the marker size.
    //  Use States for the marker colors.
    //  Use Population,State,Death Rate for the text values.

        let trace = {
    
        x: result.actuals.deaths,
        y: result.population,
        text: result.state,
        text: result.actuals.deaths,
        text: result.population,
        mode: 'markers',
        marker: {
            size: result.population,
            color: result.state
            }
                

        };

        bubbleLayout= {
            title: 'State Deaths by Population Size',
            xaxis: {title: 'Deaths Per State'}
        };

        Plotly.newPlot('bubble', [trace], bubbleLayout);

    });


}


