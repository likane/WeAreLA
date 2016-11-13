//FRONT END pSUDOCODE

//BACKEND pSUDOCODE
// Timer Function
// On-Click of Search Button 
	//Validate user in put of no special characters -LOU
	// Move search bar, title and temperature to top of page. Use jquery animate or jquery ui
	// Display results (5 results with image per row) under search bar div
	// display static background image behind results (possibly beach pic?)


	// Google places API
		//location - LOS ANGELES
		// DEALS
	//Weather API - DONE
		//LOS ANGELES
			//CURRENT CONDITIONS:
				//TEMP
	//BACKGROUND: - DONE
		//TIMER Function
		//background will change based on timer. Pics of LA.
	// clear search bar
//$(Function(){


	var jsonResponse =[];
	var searchDataGooglePlaces = [];
	var backImage = ["LA1.jpg", "la2.jpg", "la3.jpg"];

//Interval func to change background image

	$(document).ready(function() {

			var count = 0;
			function displayImage() {
			$("#background").html("<img src=" +backImage[count]);
		}

		function nextImage() {
			count ++;

			//setTimeout(displayImage, 1000);

			if (count==backImage.length){
				count = 0;
			}
		}

		function startSlideshow() {
			setInterval(nextImage, 3000);
		}

		displayImage();

	});




//+++++++++++++++++++++++++++++  API 1 +++++++++++++++++++++++++++++++++++++++++++++++++++++

	//WEATHER API PLACE IN ON CLICK FUNCTION OF BUTTON
		
		//var latLA = "34.0522";
		//var longLA = "118.2437";
		function weatherFunc() {
				// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://www.myweather2.com/developer/forecast.ashx?uac=0dpgk8Hg31&output=json&query=SW1&query=34.0522,118.2437&temp_unit=f';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  console.log(xhr.send());
}

			// var weatherURL = "http://www.myweather2.com/developer/forecast.ashx?uac=0dpgk8Hg31&output=json&query=SW1&query=34.0522,118.2437&temp_unit=f";

			// $.ajax({
			// 	url: weatherURL, 
			// 	method: 'GET',
			// 	beforeSend: function(xhr){xhr.setRequestHeader('Access-Control-Request-Headers', 'Content-Type');}
			// })
			// 	.done(function(response){
			// 		//var newTemp = response.main.temp;
			// 		//console.log(newTemp);

			// 		jsonResponse = response;
			// 		console.log(response);
			// 		console.log(JSON.stringify(response));
			// 	});
//end bracket for WEATHER API 
		};

//+++++++++++++++++++++++++++++  API 1 END +++++++++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++  API 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++
		function googlePlacesFunc() {
			//get user input from search bar
				var userInput = $("#searchRender").val().trim();
				
				console.log(userInput);

				//assign google api key to variable
				var googlePlacesAPIKey = "AIzaSyAP7EcFJzFFX8ExmGcNIQTfq8wpaZ-NeTg";

				//Set queryURL && get JSON response
				var googleQueryURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=' + googlePlacesAPIKey;

				console.log(googleQueryURL);

				$.ajax({url:googleQueryURL, method: "GET"}).done(function(response){
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
				searchDivGooglePlaces.addClass("yelpData");
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

		function validateForm (){

			var empty = $("#searchRender").val().trim().replace(" ", " ");
			if (!empty) {
				console.log("Please search something before pressing enter");
				
					} else if (empty == "!" || empty == "{" || empty == "}" || empty == "%"){
					console.log("Please search without using '!', '{}' or '%'");
						} else {
						console.log(empty);
						}
	//end bracket for validateForm function
			}
//+++++++++++++++++++++++++++++  USER FORM VALIDATION END +++++++++++++++++++++++++++++++++++++++++++++++++++++

//Call all API and user functions at on click of main button
	$("#buttonRender").on("click", function(event){
		event.preventDefault();
		validateForm();
		weatherFunc();
		renderSearchData();


//end bracket for buttonRender on click function
	});

//document.ready end bracket
//});

