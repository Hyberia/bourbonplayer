// JavaScript Document
$(document).ready(function() {
    if (debug) console.log(sites);
    // Polulate sites list
    populateSelect($("#site").get(0), $.map(sites, function(sites) { return { name: sites.name, value: sites.name} }));
    
    // Populate video sections
    $("#site").bind("change", function() {
        if (this.value != "NULL") {            
            var site = this.value;
            $.each(sites, function(i) {
                if (sites[i].name == site)
                    configs = sites[i].configs
            });

            $.getJSON(apiBuildURI(configs, "/video_types/"), function(json) {
                if (apiError(json)) {
                    alert("A error occur while loading information from the API.\n\n" + json["error"]);
                }
                else {
                    var sections = json["results"];
                    if (debug) console.log(sections);
                    populateSelect($("#section").get(0), $.map(sections, function(sections) { return {name: sections.name, value: sections.id}}));
                    $("#section").removeAttr("disabled");
                }
            });
        }
        else
        {
            $("#section").attr("disabled", "disabled");
            populateSelect($("#section").get(0), {});
        }
    });
});