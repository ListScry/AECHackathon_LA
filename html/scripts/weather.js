

var getWeatherData = function(lat, long, timestamp, callback){

    $.ajax({
        type: 'GET',
        url: "http://api.openweathermap.org/data/2.5/history/city?lat=" + lat + "&lon=" + long
    })
    .done(function(data, textStatus, jqXHR) {
            var weatherResult, description, temp, humidity, windspeed;
            description = data["list"][0]["weather"][0]["description"];
            temp = data["list"][0]["main"]["temp"] + " kelvin";
            humidity = data["list"][0]["main"]["humidity"];
            windspeed = data["list"][0]["wind"]["speed"];

            weatherResult = "Weather Report: " + description  + ", the temperature was " + temp +
                            ", humidity was " + humidity +
                            " and wind speed was " + windspeed;
            callback(weatherResult);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {

    })
    .always(function(d, textStatus, e) {

    });
};

//$("#test-weather").on("click", function() {
//    getWeatherData(34, -118, "", function(x) {
//        alert(x);
//    });
//});