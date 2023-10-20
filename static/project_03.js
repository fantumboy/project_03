const url = "https://data.cityofchicago.org/resource/spqx-js37.json";

function init() {
    d3.select("#chart")
    let data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }]

    let layout = {
        title: "practice plot"
    }
    
    Plotly.newPlot("plot", data, layout);
    }
    
    // // Call updatePlotly() when a change takes place to the DOM
    // d3.selectAll("#selDataset").on("change", updatePlotly);
    
    // // This function is called when a dropdown menu item is selected
    // function updatePlotly() {
    // // Use D3 to select the dropdown menu
    // let dropdownMenu = d3.select("#selDataset");
    // // Assign the value of the dropdown menu option to a variable
    // let dataset = dropdownMenu.property("value");
    
    // // Initialize x and y arrays
    // let x = [];
    // let y = [];
    
    // if (dataset === '2014') {
    //     x = [1, 2, 3, 4, 5];
    //     y = [1, 2, 4, 8, 16];
    // }
    
    // else if (dataset === '2015') {
    //     x = [10, 20, 30, 40, 50];
    //     y = [1, 10, 100, 1000, 10000];
    // }
    
    // // Note the extra brackets around 'x' and 'y'
    // Plotly.restyle("plot", "x", [x]);
    // Plotly.restyle("plot", "y", [y]);
    // }
    
    // init();

//     d3.json(url).then((data) => {
//         // let subject_id = data.names;
//         // let dropdown = d3.select("#selDataset");

//         // for (let i = 0; i < subject_id.length; i++){  
//         // dropdown
//         //     .append("option")
//         //     .text(subject_id[i])
//         //     .property("value", subject_id[i])
//         // }

//     console.log(data)
//         // metaData(subject_id[0])  
//         // chart(subject_id[0])            
        
//     })};

//     init ();

let raw_data = d3.json(url)  // .then((data) => data.filter(data => data.violation_date == 2014));
    console.log(raw_data)

// RAW_DATA.FILTER?? BY YEAR??

// let y2014 = raw_data.filter(raw_data => raw_data.camera_id == 2014);
// console.log(y2014)
// let y2015 = []
// let y2016 = []
// let y2017 = []
// let y2018 = []
// let y2019 = []
// let y2020 = []
// let y2021 = []
// let y2022 = []
// let y2023 = []

// let 2014 = Object.values(data.y2014);
// let 2015 = Object.values(data.y2015);
// let 2016 = Object.values(data.y2016);
// let 2017 = Object.values(data.y2017);
// let 2018 = Object.values(data.y2018);
// let 2019 = Object.values(data.y2019);
// let 2020 = Object.values(data.y2020);
// let 2021 = Object.values(data.y2021);
// let 2022 = Object.values(data.y2022);
// let 2023 = Object.values(data.y2023);

// Create an array of category labels
// let labels = Object.keys(data.australia);

// Display the default plot
// function init() {
//   let data = [{
//     values: australia,
//     labels: labels,
//     type: "pie"
//   }];

//   let layout = {
//     height: 600,
//     width: 800
//   };

//   Plotly.newPlot("pie", data, layout);
// }

// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a letiable
//   let dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   let data = [];

//   if (dataset == '2014') {
//       data = 2014;
//   }
//   else if (dataset == '2015') {
//       data = 2015;
//   }
//   else if (dataset == '2016') {
//       data = 2016;
//   }
//   else if (dataset == '2017') {
//     data = 2017;
//   }
//   else if (dataset == '2018') {
//       data = 2018;
//   }
//   else if (dataset == '2019') {
//     data = 2019;
//   }
//   else if (dataset == '2020') {
//     data = 2020;
//   }
//   else if (dataset == '2021') {
//     data = 2021;
//   }
//   else if (dataset == '2022') {
//     data = 2022;
//   }
//   else if (dataset == '2023') {
//     data = 2023;
//   }
// // Call function to update the chart
//   updatePlotly(data);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", "values", [newdata]);
// }

// init();
