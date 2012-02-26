// JavaScript Document

// Sites
var sites = [
	{ name: "Giant Bomb", configs: [
		"http://api.giantbomb.com",
		"fbf5f21d4d477e2da35a1eb5391340e197ed5d68-"
	]},
	{ name: "Tested", configs: [
		"http://api.tested.com",
		"9ac07c06b6e449c46d175ba97acb0712838f7b1f"
	]}
];
var debug = 1;
// Work around for the Access-Control-Allow-Origin
var pipe_json = 1;
var pipe_url = "./json_pipe.php?url=";
var configs = [];
