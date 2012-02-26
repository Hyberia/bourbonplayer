// JavaScript Document
function filterByProperty(arr, prop, value) {
    return $.grep(arr, function (item) { return item[prop] == value });
}

function buildApiUrl (config, path, option) {
	if (pipe_json) {
		url = config[0] + path + "?api_key=" + config[1] + "&format=json";
		return pipe_url + escape(url);
	}
	else
		return config[0] + path + "?api_key=" + config[1] + "&format=json";
}

function populateSelect(el, items) {
    el.options.length = 0;
    if (items.length > 0)
        el.options[0] = new Option("please select", "");
    $.each(items, function () {
        el.options[el.options.length] = new Option(this.name, this.value);
    });
}

// Polulate sites
$(document).ready(function () {
	// Polulate sites list
	populateSelect($("#site").get(0), $.map(sites, function(sites) { return { name: sites.name, value: sites.name} }));
	
	// Populate video sections
	$("#site").bind("change", function() {
		var site = this.value,
			configs = filterByProperty(sites, 'name', site)[0].configs;

		$.getJSON(buildApiUrl(configs, "/video_types/"), function(json) {
			console.log(json);
			$("#content").html($.param(json));
		});
		
		if (debug) {
			console.log(configs[0]);
			console.log(configs[1]);
		}
	});
});