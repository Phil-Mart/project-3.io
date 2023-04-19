//vaccinations = metrics.vaccinationsCompletedRatio, metricsTimeseries.*.vaccinationsCompletedRatio
console.log(data);

function guageChart(){
      // Fetch the JSON data and console log it
      d3.json("./data/county_covid.json").then(function(data) {
        console.log(data);
        let countiesdata = data.county
        console.log(statedata);
        let countiesresult = countiesdata.filter(county => county.fips == x)[0];

        vaccinations = countiesresult.vaccinationsCompletedRatio

var data = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    value: vaccinations * 100,
    title: { text: "Vaccination Ratios by State" },
    type: "indicator",
    mode: "gauge+number",
    gauge: { axis: { range: [null, 100] } }
  }
];

var layout = { width: 600, height: 400 };
Plotly.newPlot('myDiv', data, layout);
});
}