

// Initialize the Dashboard
function initializeDB() 
{
    // Puts all the data in the console log
    // let data = d3.json('samples.json');
    // console.log(data);

    // Build the drop down menu with the selDataset ID by feeding in names from samples.json
    let selectData = d3.select('#selDataset');

    // Grab the names data. This gets rid of the other data types in the samples.json file.
    d3.json('samples.json').then((data) => {
        let sampleNames = data.names
        console.log(sampleNames);

        // Use foreach to create options for each sample name
        sampleNames.forEach((sampleID) => {
            selectData.append('option').text(sampleID).property('value', sampleID); // replaces value with sampleID
        });
    });

}

initializeDB();

// Update the Dashboard
// Logs the updated selections to the console
function optionChanged(item)
{
    console.log(item);
}


// Populate the Metadata



// Build the Graphs here