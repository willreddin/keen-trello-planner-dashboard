var client = new Keen({
  projectId: "557d8b0996773d08901b7cea",
  readKey: "828da09e10ce365e3b59de21ce89c07e257b6431ca7e0eef092077a23dae69a437371a64a6cf935bde64709ddff7395197489610cab95fc45041fd915ea26dc48a03fcab4bac38bd3a3b24116f42576d5cbb062f164fca24479f68ab5df6afe8ef0de488c2062bfa3630dfd6bb0e468d"

});

//Done metric
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "cards",
    filters: [{"operator":"eq","property_name":"idList","property_value":"5385dce506298ff6c351fa8c"}],
    timeframe: "this_1_days",
    timezone: "UTC"
  });
  client.draw(query, document.getElementById("done"), {
    chartType: "metric",
    title: "Done",
    colors: ["#49c5b1"]
  });
});

//Today metric
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "cards",
    filters: [{"operator":"eq","property_name":"idList","property_value":"5385dce506298ff6c351fa8b"}],
    timeframe: "this_1_days",
    timezone: "UTC"
  });
  client.draw(query, document.getElementById("today"), {
    chartType: "metric",
    title: "Today",
    colors: ["#fd9117"]
  });
});

//Monday metric
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "cards",
    filters: [{"operator":"eq","property_name":"idList","property_value":"5385dce506298ff6c351fa8d"}],
    timeframe: "this_1_days",
    timezone: "UTC"
  });
  client.draw(query, document.getElementById("monday"), {
    chartType: "metric",
    title: "Monday",
    colors: ["#72d8fe"]
  });
});

//Tuesday metric
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "cards",
    filters: [{"operator":"eq","property_name":"idList","property_value":"543cfc782a503821bf46efd3"}],
    timeframe: "this_1_days",
    timezone: "UTC"
  });
  client.draw(query, document.getElementById("tuesday"), {
    chartType: "metric",
    title: "Tuesday",
    colors: ["#72d8fe"]
  });
});

//Wednesday metric
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "cards",
    filters: [{"operator":"eq","property_name":"idList","property_value":"543cfc80b40ea993f9a227b6"}],
    timeframe: "this_1_days",
    timezone: "UTC"
  });
  client.draw(query, document.getElementById("wednesday"), {
    chartType: "metric",
    title: "Wednesday",
    colors: ["#72d8fe"]
  });
});


//Thursday metric
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "cards",
    filters: [{"operator":"eq","property_name":"idList","property_value":"543cfc88e38628ff3074ddde"}],
    timeframe: "this_1_days",
    timezone: "UTC"
  });
  client.draw(query, document.getElementById("thursday"), {
    chartType: "metric",
    title: "Wednesday",
    colors: ["#72d8fe"]
  });
});

//Friday metric
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "cards",
    filters: [{"operator":"eq","property_name":"idList","property_value":"543cfc8bd268a6bc279cc676"}],
    timeframe: "this_1_days",
    timezone: "UTC"
  });
  client.draw(query, document.getElementById("friday"), {
    chartType: "metric",
    title: "Friday",
    colors: ["#72d8fe"]
  });
});

//Saturday metric
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "cards",
    filters: [{"operator":"eq","property_name":"idList","property_value":"5446d3ae0704cf38cbda6e3c"}],
    timeframe: "this_1_days",
    timezone: "UTC"
  });
  client.draw(query, document.getElementById("saturday"), {
    chartType: "metric",
    title: "Saturday",
    colors: ["#72d8fe"]
  });
});
