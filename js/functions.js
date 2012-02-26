// Common functions
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

function apiError (json) {
    /**
     * Return a associative array with the following:
     * - error: true or false
     * - error_text: contain a string if error is true
     */
    var error, error_text;
    if (debug) console.log(json);
    if (json["status_code"] != 1) {
        if (debug) console.log("API ERROR: " + json["error"]);
        return true
    }
    else {
        return false;
    }
}
