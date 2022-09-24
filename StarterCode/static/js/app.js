

// Initialize the Dashboard
function initializeDB() 
{
    // Puts all the data in the console log
    let data = d3.json('samples.json');
    console.log(data);

    // Build the drop down menu with the selDataset ID by feeding in names from samples.json
    let selectData = d3.select('#selDataset');

    // Grab the names data. This gets rid of the other data types in the samples.json file.
    d3.json('samples.json').then((data) => {
        let sampleNames = data.names
        // console.log(sampleNames);

        // Use foreach to create options for each sample name
        sampleNames.forEach((sampleID) => {
            selectData.append('option').text(sampleID).property('value', sampleID); // replaces value with sampleID
        });

        // Pass information for the first sampleID
        let firstSampleID = sampleNames[0];

        // Builds the metadata
        demographicInfo(firstSampleID);

    });

}

initializeDB();

// Update the Dashboard
// Logs the updated selections to the console
function optionChanged(item)
{
    // console.log(item);
    // Call the metadata update
    demographicInfo(item);
}


// Populate the Metadata
function demographicInfo(sampleID)
{
    console.log(sampleID);

    d3.json('samples.json').then((data) => {

        // grabs the metadata
        let metaData = data.metadata;
        // console.log(metaData);

        // filter based on the value of the sampleID, returns array
        let resultID = metaData.filter(sampleIDResult => sampleIDResult.id == sampleID);
        // console.log(resultID);

        // get just index 0 from the array, returns object
        let resultData = resultID[0];
        console.log(resultData);

        // Clear the existing data out before repopulating the table
        d3.select('#sample-metadata').html('');

        // extract the value-key pairs to the chart
        Object.entries(resultData).forEach(([key, value]) => {
            d3.select('#sample-metadata').append('h5').text(`${key}: ${value}`)
        });

    });
}


// Build the Graphs here