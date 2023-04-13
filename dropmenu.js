// This function is called when a dropdown menu item is selected
function menu() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    d3.json().then((data) => {
    console.log(data)
    let states =data.states
        for (let index = 0; index < names.length; index++) {
            pullDown
            .append('option')
            .text(states[index])
            .property('value', states[index])

    }});

 menu()
