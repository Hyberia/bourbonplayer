// Parse and build the list
$(document).ready(function () {
    videolist = $("#videolist")
    // Bind to the section dropdown
    $("#section").bind("change", function() {
        if (debug) console.log("Section = " + this.value)
        
        videolist.empty();
        section = this.value
        // Get the number of result
        $.getJSON(apiBuildURI(configs, "/videos/", "video_type=" + section + "&limit=1"), function(json) {
            if (apiError(json)) {
                alert("A error occur while loading information from the API.\n\n" + json["error"]);
            }
            total_results = json["number_of_total_results"];
            offset = (total_results - nbs_entries < 0) ? 0: total_results - nbs_entries;
            
            if (debug) console.log("Number of total results = " + total_results);
            if (debug) console.log("Offset is " + offset)
            
            // Get last _nbs_entries_ entries for that video_type
            opts = "video_type="+section+"&offset="+offset+"&field_list=id,name";
            $.getJSON(apiBuildURI(configs, "/videos/", opts ), function (json) {
                if (apiError(json)) {
                    alert("A error occur while loading information from the API.\n\n" + json["error"]);
                }
                if (debug) console.log(json);
                videos = json["results"].reverse();
                
                for (i in videos) {
                    console.log(videos[i]["name"]);
                    h = "<li data=\"" + videos[i]["id"] + "\">" + videos[i]["name"] + "</li>";
                    videolist.append(h);
                }
                $("li", $("#videolist")).bind("click", function() {
                    if (debug) console.log("Data is " + $(this).attr("data"));
                    populateContentPane($(this).attr("data"));
                });
                //$("li", $("#videolist")).css({"color": "red"});
            });
        });
    });
    
});
