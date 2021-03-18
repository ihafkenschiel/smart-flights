/**
 * Instructions:
 * 
 * In terminal, type `node getPlace.js "San Francisco"`
 * To get location info.
 * 
 * 
 * Example:
 * {
  "Places" : [ {
    "PlaceId" : "FLN-sky",
    "PlaceName" : "Florianopolis",
    "CountryId" : "BR-sky",
    "RegionId" : "",
    "CityId" : "FLNA-sky",
    "CountryName" : "Brazil"
  } ]
}
 */

const http = require("https");

var myArgs = process.argv.slice(2);
const city = myArgs[0].replace(/\s/g, '+')

// console.log(myArgs[0]);

const options = {
	"method": "GET",
	"hostname": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"port": null,
	"path": "/apiservices/autosuggest/v1.0/BR/USD/en-US/?query=" + city,
	"headers": {
		"x-rapidapi-key": "9292d54b7dmsh374c9307057c0bfp10518ajsna2efc9e925c7",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();