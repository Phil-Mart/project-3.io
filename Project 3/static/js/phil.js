function buildBarchart(stateSelected) {
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


// // Import the us-atlas library
// import usAtlas from 'us-atlas';

// // Create a Leaflet map
// const map = L.map('map');

// // Add a base layer to the map
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data © OpenStreetMap contributors'
// }).addTo(map);

// // Add the US state boundaries layer to the map
// const statesLayer = L.geoJSON(usAtlas.objects.states).addTo(map);


// // GeoJSON data with state names
// const geoJsonData = {
//     "type": "FeatureCollection",
//     "features": [
//       {
//         "type": "Feature",
//         "properties": {
//           "name": "California",
//           // ...
//         },
//         "geometry": {
//           // ...
//         }
//       },
//       // ...
//     ]
//   };
  
//   // JSON data with state abbreviations
//   const stateAbbrData = {
//     "Alabama": "AL",
//     "Alaska": "AK",
//     // ...
//   };
  
//   // Loop through the GeoJSON features and add the abbreviation property
//   for (let i = 0; i < geoJsonData.features.length; i++) {
//     const stateName = geoJsonData.features[i].properties.name;
//     const stateAbbr = stateAbbrData[stateName];
//     if (stateAbbr) {
//       geoJsonData.features[i].properties.abbr = stateAbbr;
//     }
//   }
  
//   // The GeoJSON data now has an additional "abbr" property for each feature
//   console.log(geoJsonData);
  

// }
  