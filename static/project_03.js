function init() {
  d3.json("/year/2014").then(function(results) {
    data2014 = results;
    let xData2014 = data2014.map(data2014 => data2014.month)
    let yData2014 = data2014.map(data2014 => data2014.violations)
    let y2014 = [{
          x: xData2014,
          y: yData2014,
          type: "bar"
    }];
  
    let layout = {
        title: "Violations in 2014"
    };

  Plotly.newPlot("chart1", y2014, layout);
})};

d3.selectAll("#selDataset").on("change", updatePlotly);

init ();


function updatePlotly() {

  let dropdown = d3.select("#selDataset");
  let selection = dropdown.property("value");

  let x = [];
  let y = [];

  if (selection == 2015) {
    d3.json("/year/2015").then(function(results) {
      data2015 = results;
      let xData2015 = data2015.map(data2015 => data2015.month)
      let yData2015 = data2015.map(data2015 => data2015.violations)
      let y2015 = [{
            x: xData2015,
            y: yData2015,
            type: "bar"
      }];
    
      let layout = {
          title: "Violations in 2015"
      };
  
    Plotly.newPlot("chart1", y2015, layout);
  })}

  else if (selection == 2016) {
    d3.json("/year/2016").then(function(results) {
      data2016 = results;
      let xData2016 = data2016.map(data2016 => data2016.month)
      let yData2016 = data2016.map(data2016 => data2016.violations)
      let y2016 = [{
            x: xData2016,
            y: yData2016,
            type: "bar"
      }];
    
      let layout = {
          title: "Violations in 2016"
      };
  
    Plotly.newPlot("chart1", y2016, layout);
  })}

  else if (selection == 2017) {
    d3.json("/year/2017").then(function(results) {
      data2017 = results;
      let xData2017 = data2017.map(data2017 => data2017.month);
      let yData2017 = data2017.map(data2017 => data2017.violations);
      let y2017 = [{
            x: xData2017,
            y: yData2017,
            type: "bar"
      }];
    
      let layout = {
          title: "Violations in 2017"
      };
  
    Plotly.newPlot("chart1", y2017, layout);
  })}

  else if (selection == '2018') {
    d3.json("/year/2018").then(function(results) {
      data2018 = results;
      let xData2018 = data2018.map(data2018 => data2018.month);
      let yData2018 = data2018.map(data2018 => data2018.violations);
      let y2018 = [{
            x: xData2018,
            y: yData2018,
            type: "bar"
      }];
    
      let layout = {
          title: "Violations in 2018"
      };
  
    Plotly.newPlot("chart1", y2018, layout);    
  })}

  else if (selection == '2019') {
    d3.json("/year/2019").then(function(results) {
      data2019 = results;
      let xData2019 = data2019.map(data2019 => data2019.month);
      let yData2019 = data2019.map(data2019 => data2019.violations);
      let y2019 = [{
            x: xData2019,
            y: yData2019,
            type: "bar"
      }];
    
      let layout = {
          title: "Violations in 2019"
      };
  
    Plotly.newPlot("chart1", y2019, layout);                                                   
  })}

  else if (selection == '2020') {
    d3.json("/year/2020").then(function(results) {
      data2020 = results;
      let xData2020 = data2020.map(data2020 => data2020.month);
      let yData2020 = data2020.map(data2020 => data2020.violations);
      let y2020 = [{
            x: xData2020,
            y: yData2020,
            type: "bar"
      }];
    
      let layout = {
          title: "Violations in 2020"
      };
  
    Plotly.newPlot("chart1", y2020, layout);                                                        
  })}
    
  else if (selection == '2021') {
    d3.json("/year/2021").then(function(results) {
      data2021 = results;
      let xData2021 = data2021.map(data2021 => data2021.month);
      let yData2021 = data2021.map(data2021 => data2021.violations);
      let y2021 = [{
            x: xData2021,
            y: yData2021,
            type: "bar"
      }];
    
      let layout = {
          title: "Violations in 2021"
      };
  
    Plotly.newPlot("chart1", y2021, layout);                                                           
  })}

  else if (selection == '2022') {
    d3.json("/year/2022").then(function(results) {
      data2022 = results;
      let xData2022 = data2022.map(data2022 => data2022.month);
      let yData2022 = data2022.map(data2022 => data2022.violations);
      let y2022 = [{
            x: xData2022,
            y: yData2022,
            type: "bar"
      }];
    
      let layout = {
          title: "Violations in 2022"
      };
  
    Plotly.newPlot("chart1", y2022, layout);               
  })}

  else if (selection == '2023') {
    d3.json("/year/2023").then(function(results) {
      data2023 = results;
      console.log(data2023);
      let xData2023 = data2023.map(data2023 => data2023.month);
      let yData2023 = data2023.map(data2023 => data2023.violations);
      let y2023 = [{
            x: xData2023,
            y: yData2023,
            type: "bar"
      }];
    
      let layout = {
          title: "Violations in 2023"
      };
  
    Plotly.newPlot("chart1", y2023, layout);                                                   
  })}


  else if (selection == 'overall') {
    let all = 0;
    d3.json("/yeartotal").then(function(results) {
      all = results;
      console.log(all);
      let xOverall = all.map(all => all.year);
      let yOverall = all.map(all => all.total);
      let overallChart = [{
            x: xOverall,
            y: yOverall,
            type: "bar"
      }];      

      let layout = {
          title: "Violations Since Inception"
      };
      
      Plotly.newPlot("chart1", overallChart, layout);

    })};
  };

// ********************
// THE LEAFLET MAP
// ********************
let myMap = L.map("map", {
  center: [41.8781, -87.6298],  // center of chicago per google
  zoom: 14,
});

let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

d3.json("/all").then(function(results) {
  let heat = results;

  heatmapData = []
  coords = []
  let triple = []

  // console.log(heat)

  for (let x = 0; x < heat.length; x++) { 
      dataPull = {};
      // dataPull["camera_id"] = heat[x].camera_id;
      dataPull["latitude"] = heat[x].latitude;
      dataPull["longitude"] = heat[x].longitude;
      dataPull["totalViolations"] = heat[x].violations;
      heatmapData.push(dataPull)
      latlong = {};
      latlong["latitude"] = heat[x].latitude;
      latlong["longitude"] = heat[x].longitude;
      coords.push(latlong)
      triple.push([heat[x].latitude, heat[x].longitude, heat[x].violations]);
    }
                                          // let groupedByCameraID = heatmapData.reduce((result, cameraID) => {
                                          //   let groupedCamera = cameraID.camera_id;
                                          
                                          //   // If the category doesn't exist in the result, create a new entry
                                          //   if (!result[groupedCamera]) {
                                          //     result[groupedCamera] = { groupedCamera, totViolations: 0 };
                                          //   }
                                          
                                          //   // Sum the amount for the current category
                                          //   result[groupedCamera].totViolations += cameraID.amount;
                                          
                                          //   return result
                                          // })
                                          // console.log(groupedByCameraID);
                                        
                                        
                                      
                                        // console.log(coords)
                                        // console.log(heatmapData)

    // let heatMap = L.heatLayer(coords, getColor,
    let heatMap = L.heatLayer(triple, {
      radius: 20,
      blur: 25,
      maxZoom: 14
}).addTo(myMap);

                                          // let heatArray = [];

                                          // for (let i = 0; i < features.length; i++) {
                                          //   let location = features[i].geometry;
                                          //   if (location) {
                                          //     //console.log(location);
                                          //     heatArray.push([location.coordinates[1], location.coordinates[0]]);
                                          //   }

                                          // }

                                          // let heat = L.heatLayer(heatArray, {
                                          //   radius: 20,
                                          //   blur: 35
                                          // }).addTo(myMap);




                                                // function styleInfo(feature) {
                                                //   return {
                                                //     opacity: 1,
                                                //     fillOpacity: 1,
                                                //     fillColor: getColor(feature.geometry.coordinates[2]),
                                                //     color: "#000000",
                                                //     radius: getRadius(feature.properties.mag),
                                                //     stroke: true,
                                                //     weight: 0.5
                                                //   }
                                                // }

// function getColor(totalViolations) {
//   switch(true) {
//     case totalViolations > 41:
//       return "#ea2c2c";
//     case totalViolations > 81:
//       return "#ea822c";
//     case totalViolations > 121:
//       return "#ee9c00";
//     case totalViolations > 161:
//       return "#eecc00";
//     case totalViolations > 200:
//       return "#d4ee00";
//     default: 
//       return "#98ee00";
//   }
// }

                        // function getColor(totalViolations) {
                        //   if (totalViolations < 41) {
                        //     return 'yellow';
                        //   } else if (totalViolations < 81) {
                        //     return '#FFA500';
                        //   } else if (totalViolations < 121) {
                        //     return 'orange';
                        //   } else if (totalViolations < 161) {
                        //     return '#FF4500';
                        //   } else {
                        //     return 'red';
                        //   }
                        // }

                                                                  // function getRadius(magnitude) {
                                                                  //   if (magnitude === 0) {
                                                                  //     return 1;
                                                                  //   }
                                                                  //   return magnitude * 2;
                                                                  // }

// L.geoJSON(data, {
//   pointToLayer: function(feature, latlng){
//     return L.circleMarker(latlng)
//   },
//   style: styleInfo,
//   onEachFeature: function(feature, layer) {
//     layer.bindPopup(
//       "location: " + feature.properties.place + 
//       "<br> magnitude: " + feature.properties.mag + 
//       "<br> depth: " + feature.geometry.coordinates[2]
//     );
//   }
// }).addTo(myMap);

let legend = L.control({position: 'bottomright'});

legend.onAdd = function () {

    let div = L.DomUtil.create('div', 'info legend');
    let grades = [1, 40, 80, 120, 160];
    let colors = ["#d4ee00", "#eecc00","#ee9c00", "#ea822c", "#ea2c2c"];

    for (let i = 0; i < grades.length; i++) {
      div.innerHTML += "<i style='background: " + colors[i] + "'></i> "
        + grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }
0
return div;
};

legend.addTo(myMap);
})


function makeHeat (heatPeryear) {
  let heat = heatPeryear;

  heatmapData = []
  coords = []
  let triple = []

  // console.log(heat)

  for (let x = 0; x < heat.length; x++) { 
      dataPull = {};
      // dataPull["camera_id"] = heat[x].camera_id;
      dataPull["latitude"] = heat[x].latitude;
      dataPull["longitude"] = heat[x].longitude;
      dataPull["totalViolations"] = heat[x].violations;
      heatmapData.push(dataPull)
      latlong = {};
      latlong["latitude"] = heat[x].latitude;
      latlong["longitude"] = heat[x].longitude;
      coords.push(latlong)
      triple.push([heat[x].latitude, heat[x].longitude, heat[x].violations]);
    }
 
    let heatMap = L.heatLayer(triple, {
      radius: 20,
      blur: 25,
      maxZoom: 14
  }).addTo(myMap);
}