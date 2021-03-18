const http = require("https");

const options = {
	"method": "GET",
	"hostname": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"port": null,
	"path": "/apiservices/browseroutes/v1.0/US/USD/en-US/FLN-sky/FLL-sky/2021-04-01",
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