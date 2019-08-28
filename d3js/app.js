/**
 * DOM Manipulation
 */
const title = d3
  .select("h2")
  .style("text-align", "center")
  .text("D3js Ramp Up");
d3.select("body").style("background-color", "#f1f1f1");

/**
 * Performing actions with external data: Creating Bar Chart
 */
const firstSvg = d3
  .select(".first-svg")
  .style("display", "block")
  .style("margin", "auto")
  .style("background-color", "gray"); //get the svg element and style it.

const dataset = [92, 85, 67, 63, 56, 78, 95, 98]; //the data for plotting the bar chart

const chartWidth = 500,
  chartHeight = 300,
  barPadding = 15;
const barWidth = chartWidth / dataset.length; //determine width of each bar

firstSvg.attr("width", chartWidth).attr("height", chartHeight); //give svg width and height

/**
 * Scaling the graph vertically
 */
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset) + 15])
  .range([0, chartHeight]);

/**
 * Scaling the graph horizontally
 */
const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset) + 15])
  .range([chartWidth, 0]);

/**
 * Creating X-Axis
 */
const xAxis = d3.axisBottom().scale(xScale);

/**
 * Creating Y-Axis
 */
const yAxis = d3.axisLeft().scale(yScale);

// firstSvg
//   .append("g")
//   .attr("transform", "translate(50, 10)")
//   .call(yAxis);
// const xAxisTranslate = chartHeight - 20;

// firstSvg
//   .append("g")
//   .attr("transform", `translate(50, ${xAxisTranslate})`)
//   .call(xAxis);

/**
 * Plot the bars
 */
const theActualPlotting = firstSvg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("fill", "#80cbc4")
  .attr("y", data => {
    return chartHeight - yScale(data);
  })
  .attr("height", data => {
    return yScale(data);
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", (data, index) => {
    const translate = [barWidth * index, 0];
    return "translate(" + translate + ")";
  });

/**
 * Adding Labels to the bars
 */

const textValues = firstSvg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(data => {
    return data;
  })
  .attr("y", data => {
    return chartHeight - yScale(data) - yScale(2);
  })
  .attr("x", (data, index) => {
    return barWidth * index;
  });
