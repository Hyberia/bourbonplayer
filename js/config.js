// JavaScript Document

// Sites Configuration with API key
var sites = [
	{ name: "Giant Bomb", configs: [
		"http://api.giantbomb.com",
		"fbf5f21d4d477e2da35a1eb5391340e197ed5d68"
	]},
	{ name: "Tested", configs: [
		"http://api.tested.com",
		"9ac07c06b6e449c46d175ba97acb0712838f7b1f"
	]},
	{ name: "Screened", configs: [
        "http://api.screend.com",
        "fbf5f21d4d477e2da35a1eb5391340e197ed5d68" // Invalid API Key
    ]}
];
var configs = [];

// Enable Debug at certain location
var debug = 1;

// Enable JSON piping to work around Access-Control-Allow-Origin
// You need to be able run run PHP on your test server
var pipe_json = 1;
var pipe_url = "./json_pipe.php?url=";

