+++
title = "Tourist Sight Viewer Component"

linktitle = "tourist-sight-viewer"
description = "Tourist Sight Viewer"
weight = "70"

tags = [
    "javascript",
    "Wikipedia and Google Map APIs",
    "JSON"
]

+++

The [Tourist Sight Viewer](https://basiccreation.github.io/reimagined-fortnight) is a standalone component. It can be used for any range of places that you would need to put on one map. 

For example, a campus map for back to school night, area map for Artist's Open Studio Weekends or First Friday in a downtown area, showing which ships has what events. 

The user has the ability to filter to narrow down potential places to go. 

## Process and Challenges

 Then we'll add in a few pages and posts. With small variations on that, you will be able to create many different types of web sites.

 Below is an example of one location:

        title: "Roskilde Cathedral",
    website: "http://www.roskildedomkirke.dk/",
    location: {
        lat: 55.6426,
        lng: 12.0804

This will then be mapped to the Google Map marker

     //loops through locationlist and sets marker

    self.locationList().forEach(function(location) {

        // defines  marker
        var marker = new google.maps.Marker({
            map: map,
            position: location.location,
            website: location.website,
            title: location.title,
            animation: google.maps.Animation.DROP,
        }); //end marker

        location.marker = marker;

Then the link to Wikipedia is put together:

            var wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&callback=wikiCallback&srsearch=" +
            searchterm.replace(" ", "%20");

And finally, the info window that will pop up when you click on a marker is marked up:

     infowindow.setContent(
                    "<h2>" + result[0].title + "</h2>" +
                    "<p>The <a href = '" + url + "'>Wikipedia article</a> about " + result[0].title + " contains " + result[0].wordcount + " words.</p>" +
                    "<p>Website for <a href = '" + marker.website + "'>" + result[0].title + "</a></p>"
                );