// d3.json("http://account_name.cartodb.com/api/v2/sql?q=SELECT * FROM table_name WHERE the_geom IS NOT NULL&format=geojson&dp=5", function(collection) {
//   svg.select("#layer_id")
//     .selectAll("path")
//     .data(collection.features)
//     .enter().append("path")
//     .attr("fill", "violet")
//     .attr("d", path.projection(xy));
// });

var first_layer = 'd3_world_borders';

    var sql = new cartodb.SQL({ user: 'viz2', format: 'geojson', dp: 5});

    // Define our SVG element outside our SQL functions
    var svg = d3.select("body")
            .append("svg")
            .call(d3.behavior.zoom()
                .on("zoom", redraw))
            .append("g");

    // Our projection.
    var xy = d3.geo.mercator();
        xy.scale(1500);
        xy.center([-90,30]);

    svg.append("g").attr("id", "first_layer");

    var path = d3.geo.path();

    sql.execute("SELECT ST_Simplify(the_geom,0.01) as the_geom FROM {{table_name}} WHERE the_geom IS NOT NULL", {table_name: first_layer})
      .done(function(collection) {
          svg.select("#first_layer")
            .selectAll("path")
              .data(collection.features)
            .enter().append("path")
            .attr("d", path.projection(xy));
      })
      .error(function(errors) {
        // console.log('Errors! Oh no!')
      });

    var earthquakes;
    sql.execute("SELECT the_geom, quakedate, magnitude FROM {{table_name}} WHERE the_geom IS NOT NULL ORDER BY quakedate ASC", {table_name: 'earthquaked3'})
      .done(function(collection) {
        earthquakes = collection.features;
        quake();
      });

    var i = 0;
    function quake() {
      var c = earthquakes[i];
      svg.append("circle")
          .attr("cx", xy(c.geometry.coordinates)[0])
          .attr("cy", xy(c.geometry.coordinates)[1])
          .attr("r", 1)
          .style("fill", "red")
          .style("fill-opacity", 0.5)
          .style("stroke", "red")
          .style("stroke-opacity", 0.5)
        .transition()
          .duration(2000)
          .ease(Math.sqrt)
          .attr("r", c.properties.magnitude * 20)
          .style("fill-opacity", 1e-6)
          .style("stroke-opacity", 1e-6)
          .remove()
        setTimeout(quake, 200);
      i++;
      if (earthquakes.length==i) i = 0;
    }

    function redraw() {
      svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }
