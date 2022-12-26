$(function() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    $.ajax({
        url: "URL",
        type: "GET",
        dataType: "json",
        success: function(res) {
            const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const html = `<div class="d-flex flex-column block"><small class="text-muted mb-0">`;
            const html2 = `</small><div class="text-center"><img class="symbol-img" src="`;
            const html3 = `"></div><h6><strong>`;
            const html4 = `&#176;</strong></h6>`;
            let week_html = '';
            $('#city_name').html(res.records.locations[0].locationsName);
            $('#district').html(res.records.locations[0].location[0].locationName);
            $('#tempture').html(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;");

            for (var i = 1; i < 6; i += 2) {
                let j = 0;
                let degree = res.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                icon = (degree > 18) ? "https://i.imgur.com/Shrg84B.png" : "https://i.imgur.com/BeWfUuG.png";
                week_html += html1 + week[j] + html2 + icon
                week_html += html3 + degree + html4;
                console.log(week_html);
                j++;
            }
        },

        error: function() {
            alert("ERROR!!!");
        }
    });
});