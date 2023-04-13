// This function is called when a dropdown menu item is selected
function menu() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("../../data/county_covid.json").then((data) => {
    console.log(data)
    let state = data.state
        for (let index = 0; index < state.length; index++) {
            dropdownMenu
            .append('option')
            .text(state[index])
            .property('value', state[index])

    };


let firstSample = state[0]
            /* buildBarchart(firstSample);
            buildMetaData(firstSample);
            bubbleChart(firstSample); */
    });
}
 menu();
