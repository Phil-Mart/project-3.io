// This function is called when a dropdown menu item is selected
function menu() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json("../../data/county_covid.json").then((data) => {
    console.log(data)
    let state = data.state
        for (let i = 0; i < state.length; i++) 
        {
            let state_list = [];
            let state_name = data.state[i];
                if (state_name !== state_list) {
            dropdownMenu
            .append('option')
            .text(state[index])
            .property('value', state[index])
            }

        };


let firstSample = state[0]
            /* buildBarchart(firstSample);
            buildMetaData(firstSample);
            bubbleChart(firstSample); */
    });

//end of menu function    
}
 menu();
