$(function() {
    console.log( "ready!" );
    //created empty array to hold search data for each API
    var searchDataYelp = [];
    var searchDataForecast = [];
    var searchDataTripAdvisor = [];

    //function to display search data onto page
  function renderSearchData(){
      //empty the search section before appedning new search data
      $("#").empty();
      //create 5 sections with for loop
      for (var i = 0; i < searchDataYelp.length; i++) {
        var searchDivYelp = $("");
        searchDivYelp.addClass("");
        searchDivYelp.attr("data-name", searchDataYelp[i]);
        searchDivYelp.text(searchDataYelp[i]);
        $("#").append(searchDivYelp);
      }
      for (var j = 0; j < searchDataForecast.length; j++) {
        var searchDivForecast = $("");
        searchDivForecast.addClass("");
        searchDivForecast.attr("data-name", searchDataForecast[j]);
        searchDivForecast.text(searchDataForecast[j]);
        $("#").append(searchDivForecast);
      }
      for (var k = 0; k < searchDataTripAdvisor.length; k++) {
        var searchDivTripAdvisor = $("");
        searchDivTripAdvisor.addClass("");
        searchDivTripAdvisor.attr("data-name", searchDataTripAdvisor[k]);
        searchDivTripAdvisor.text(searchDataTripAdvisor[k]);
        $("#").append(searchDivTripAdvisor);
      }

    //when user clicks or hits enter in the search bar
    $(document).on("click",/*class*/, function(){
      //get api key
      //get user input from search bar
      //set queryURL

      $.ajax({url:/*queryURL*/, method: "GET"})
        .done(function(response){

        });

    });


  }








});
