// JavaScript Document

// Sites Configuration with API key
var sites = [
	{ name: "Giant Bomb", configs: [
		"http://api.giantbomb.com",
		""
	]},
	{ name: "Tested", configs: [
		"http://api.tested.com",
		""
	]},
	{ name: "Screened", configs: [
       "http://api.screend.com",
        "" // Invalid API Key
    ]}
];
var configs = [];
var nbs_entries = 40;
// Enable Debug at certain location
var debug = true;

// Enable JSON piping to work around Access-Control-Allow-Origin
// You need to be able run run PHP on your test server
var pipe_json = true;
var pipe_url = "./json_pipe.php?url=";

