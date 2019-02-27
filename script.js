var data_swapi = null;
var data_div = null;
var new_data = null;
var header = ["Name", "Rotation Period", "Orbital Period", "Diameter", "Climate", "Gravity", "Terrain", "Surface Water", "Population"];
function show() {
    var xhttp;
    var filter_data = null;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            filter_data = document.getElementById("filter_data").value;
            data_swapi = JSON.parse(this.responseText).results;

            if (filter_data == null || filter_data == "") {
                new_data = data_swapi;
            } else {
                new_data = data_swapi.filter(a =>
                    a.name.toUpperCase().indexOf(filter_data.toUpperCase()) > -1 ||
                    a.rotation_period.toUpperCase().indexOf(filter_data.toUpperCase()) > -1 ||
                    a.orbital_period.toUpperCase().indexOf(filter_data.toUpperCase()) > -1 ||
                    a.diameter.toUpperCase().indexOf(filter_data.toUpperCase()) > -1 ||
                    a.climate.toUpperCase().indexOf(filter_data.toUpperCase()) > -1 ||
                    a.gravity.toUpperCase().indexOf(filter_data.toUpperCase()) > -1 ||
                    a.terrain.toUpperCase().indexOf(filter_data.toUpperCase()) > -1 ||
                    a.surface_water.toUpperCase().indexOf(filter_data.toUpperCase()) > -1 ||
                    a.population.toUpperCase().indexOf(filter_data.toUpperCase()) > -1
                );
            }

            data_div = "<table class='table table-sm'><thead><tr>";
            for (var j = 0; j < header.length; j++) {
                data_div += "<th scope='col'>" + header[j] + "</th>";
            }
            data_div += "</tr></thead><tbody>";

            for (var i = 0; i < new_data.length; i++) {
                data_div += "<tr>";
                data_div += "<td>" + new_data[i].name + "</td>";
                data_div += "<td>" + new_data[i].rotation_period + "</td>";
                data_div += "<td>" + new_data[i].orbital_period + "</td>";
                data_div += "<td>" + new_data[i].diameter + "</td>";
                data_div += "<td>" + new_data[i].climate + "</td>";
                data_div += "<td>" + new_data[i].gravity + "</td>";
                data_div += "<td>" + new_data[i].terrain + "</td>";
                data_div += "<td>" + new_data[i].surface_water + "</td>";
                data_div += "<td>" + new_data[i].population + "</td>";
                data_div += "</tr>";
            }
            data_div += "</tbody></table>";

            document.getElementById("txtHasil").innerHTML = data_div;

        }
    };
    xhttp.open("GET", "https://swapi.co/api/planets/?format=json", true);
    xhttp.send();
}