var jsonResponse = [];
var searchDataGooglePlaces = [];
var backImage = ["LA1.jpg", "la2.jpg", "la3.jpg"];




//+++++++++++++++++++++++++++++  API 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++

//WEATHER API PLACE IN ON CLICK FUNCTION OF BUTTON

//var latLA = "34.0522";
//var longLA = "118.2437";
function weatherFunc() {
    var weatherURL = "https://crossorigin.me/http://www.myweather2.com/developer/forecast.ashx?uac=0dpgk8Hg31&output=json&query=SW1&query=34.0522,118.2437&temp_unit=f";
    $.ajax({
            url: weatherURL,
            method: 'GET',
            //beforeSend: function(xhr){xhr.setRequestHeader('Access-Control-Request-Headers', 'Content-Type');}
        })
        .done(function(response) {
            //var newTemp = response.main.temp;
            //console.log(newTemp);

            //jsonResponse = response;
            //console.log(response);
            console.log(JSON.stringify(response));
        });
    //end bracket for WEATHER API
};

//+++++++++++++++++++++++++++++  API 1 END +++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++  API 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++
function googlePlacesFunc() {
    //get user input from search bar
    var userInput = $("#searchRender").val().trim();
    console.log(userInput);
    //assign google api key to variable
    var googlePlacesAPIKey = "AIzaSyDKe8HM1IzfbmOzyIVZjVAZ4soU1Mo3i3g";
    //Set queryURL && get JSON response
    var googleQueryURL = 'https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=	34.052235,-118.243683&radius=500&types=restaurant&keyword=' + userInput + '&key=' + googlePlacesAPIKey;
    console.log("google places ",googleQueryURL);
    $.ajax({
        url: googleQueryURL,
        method: "GET"
    }).done(function(response) {
        console.log("response ", JSON.stringify(response));
    });
    //end bracket for GOOGLE PLACES on click API
};
//+++++++++++++++++++++++++++++  API 2 END +++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++  APPEND API VALUE'S TO HTML +++++++++++++++++++++++++++++++++++++++++++++++++++++
function renderSearchData() {

    $("#searchResults").empty();

    for (var i = 0; i < searchDataGooglePlaces.length; i++) {
        var searchDivGooglePlaces = $("<div>");
        searchDivGooglePlaces.addClass("google");
        searchDivGooglePlaces.attr("data-name", searchDataGooglePlaces[i]);
        searchDivGooglePlaces.text(searchDataGooglePlaces[i]);
        $("#searchResults").append(searchDivGooglePlaces);
        googlePlacesFunc();
    };
    // end bracket for adding  API info to html
};

//+++++++++++++++++++++++++++++  APPEND API VALUE'S TO HTML FUNC END +++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++  USER FORM VALIDATION +++++++++++++++++++++++++++++++++++++++++++++++++++++
//validate form for empty field

function validateForm() {

    var empty = $("#searchRender").val().trim().replace(" ", " ");
    if (!empty) {
        console.log("Please search something before pressing enter");

    } else if (empty == "!" || empty == "{" || empty == "}" || empty == "%") {
        console.log("Please search without using '!', '{}' or '%'");
    } else {
        console.log(empty);
    }
    //end bracket for validateForm function
}
//+++++++++++++++++++++++++++++  USER FORM VALIDATION END +++++++++++++++++++++++++++++++++++++++++++++++++++++

//Call all API and user functions at on click of main button
$("#buttonRender").on("click", function(event) {
    event.preventDefault();
    validateForm();
    weatherFunc();
    googlePlacesFunc();
    renderSearchData();


    //end bracket for buttonRender on click function
});

//document.ready end bracket
//});

function renderSearch() {
    //empty section
    $("#someId").empty();

    //create 5 section
}
