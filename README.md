# ❄️ [powfinder.netlify.app](https://powfinder.netlify.app/) ❄️

This project was made during our course: Js with Frameworks.  We worked with Vue and Vite. 

<p>Here's a list of stuff that makes this site work:</p>

 - v-for &nbsp;| it renders the list of forecasts.
 - v-model &nbsp;| renders amount of days depending on number chosen in dropdown.
 - vue-router &nbsp;| displays the forecast list after the fetch has been called.
 - v-if &nbsp;| If "daily.snow" is larger than 0, a ❄️ will appear on that day.
 - switch &nbsp;| depending on which location chosen switch choses correct case.
 - filter &nbsp;| sorts the array based on location category. 
 - API &nbsp;| Using Openweathermap I can fetch the upcoming forecasts.
 - emit &nbsp;| when the location button is pressed the chosen category gets sent to the filter.


the backbone of it all is this list of locations with their latitudes and longitudes that make the fetch call possible.
```
const cities = [
    { cityname: "Niseko, JP", latitude: 42.804684, longitude: 140.6873034 },
    { cityname: "Furano, JP", latitude: 43.3419744, longitude: 142.383188 },
    { cityname: "Rusutsu, JP", latitude: 42.7374243, longitude: 140.8754821 },
    { cityname: "Hakuba, JP", latitude: 36.6981042, longitude: 137.862068 },
    { cityname: "Chamonix, FR", latitude: 45.9246705, longitude: 6.8727506 },
    { cityname: "Myrkdalen, NO", latitude: 60.8420056, longitude: 6.4666278 },
    { cityname: "Engelberg, CH", latitude: 46.8208, longitude: 8.4085},
    { cityname: "St. Anton, AT", latitude: 47.961005, longitude: 15.2067363 },
    { cityname: "Cervinia, IT", latitude: 45.9356034, longitude: 7.6304397 },
    { cityname: "Les Arcs, FR", latitude: 45.61852843, longitude: 6.7694313 },
    { cityname: "Åre, SE", latitude: 63.4010888, longitude: 13.0822241 },
    { cityname: "Hintertux, AT", latitude: 47.1150202, longitude: 11.6824994 },
    { cityname: "Tromsø, NO", latitude: 69.6516345, longitude: 18.9558585 },
    { cityname: "Ruka, FI", latitude: 66.1702656, longitude: 29.1311291 },
    { cityname: "Whistler, CA", latitude: 50.1171903, longitude: -122.9543022 },
    { cityname: "Kicking Horse, CA", latitude: 51.2982585, longitude: -116.9642785 },
    { cityname: "Revelstoke, CA", latitude: 50.998045, longitude: -118.1956709 },
    { cityname: "Telluride, US", latitude: 37.9374939, longitude: 107.812285 },
    { cityname: "Aspen, US", latitude: 39.1911128, longitude: -106.8235606 },
    { cityname: "Haines, US", latitude: 59.2358333, longitude: 118.1956709 },
    { cityname: "Breckenridge, US", latitude: 32.7558392, longitude: -98.9032554 }
    ];
```
 
