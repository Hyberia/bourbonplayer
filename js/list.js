// Parse and build the list
function buildApiUrl (config, path, option) {
    if (pipe_json) {
        url = config[0] + path + "?api_key=" + config[1] + "&format=json";
        return pipe_url + escape(url);
    }
    else
        return config[0] + path + "?api_key=" + config[1] + "&format=json";
}

$(document).ready(function () {
    // Bind to the section dropdown
    $("#section").bind("change", function() {
        if (debug) console.log("selected " + this.value)
        
    });
});
