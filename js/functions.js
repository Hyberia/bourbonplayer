// Common functions
function apiBuildURI (config, path, options) {
    opts = (options) ? "&" + options : "";
    url = config[0] + path + "?api_key=" + config[1] + opts + "&format=json";
    if (debug) console.log("API: " + url);
    if (pipe_json && !isBlackBerryPlayBook())
        return pipe_url + escape(url);
    else
        return url
}

function populateSelect(el, items) {
    el.options.length = 0;
    if (items.length > 0)
        el.options[0] = new Option("please select", "NULL");
    $.each(items, function (i) {
        el.options[el.options.length] = new Option(items[i].name, items[i].value);
    });
}

function populateContentPane(vid) {
    // Get the video
    $.getJSON(apiBuildURI(configs, "/video/"+vid+"/"), function(json) {
        if (apiError(json)) {
            alert("A error occur while loading information from the API.\n\n" + json["error"]);
        }
        video_info = json["results"];
        if (debug) console.log(video_info);
        
        video = document.getElementById("videoplayer");
        // Clear the content
        $("#title").empty();
        $("#video").empty();
        $("#deck").empty();
        // Display information
        $("#title").append("<h1>" + video_info.name + "</h1>");
        $("#video").append("<video id=\"videoplayer\" controls></video>");
        $("#videoplayer").attr("src", video_info.low_url);
        $("#deck").append("<h4>" + video_info.deck + "</h4>");
    });
}

function apiError (json) {
    /**
     * Return true if there is an error.
     */
    var error, error_text;
    if (json["status_code"] != 1) {
        if (debug) console.log("API ERROR: " + json["error"]);
        return true
    }
    else {
        return false;
    }
}

function isBlackBerryPlayBook()
{
    var ua = navigator.userAgent.toLowerCase();     
    var isWebKit     = (ua.indexOf("webkit") >= 0);
    var isTablet     = (ua.indexOf("playbook") >= 0);
    return (isWebKit && isTablet);
}