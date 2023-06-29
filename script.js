function getResults(){
fetch(requestUrl)
 .then (function (response)  {
    if (response.ok)   {
        console.log(response);
        response.JSON().then(function (data)  {
            console.log(data);
            displayResults(data, user);
        });else {}
        }
    }
 }



}
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}