console.log("Started practising the api");



let btn = document.getElementById("btn");
let table = document.getElementById("table");

document.getElementById("btn").addEventListener("click", getData);



function getData() {
    document.getElementById("btn").classList.add("dnone");
    document.getElementById("table_header").classList.remove("dnone");

    console.log("starting get data");
    url = "http://universities.hipolabs.com/search?country=india";
    fetch(url).then((response) => {
        console.log("Inside first then")
        return response.json();

    }).then((data) => {
        console.log("inside second then");
        console.log(data);


        for (i = 0; i < data.length; i++) {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var as = document.createElement("td");
            var alpha = document.createElement("td");
            var domains = document.createElement("td");
            var country = document.createElement("td");

            // var td = document.createElement("td");
            td.innerText = data[i].name;
            as.innerText = data[i]["state-province"];
            alpha.innerText = data[i]["alpha_two_code"];
            country.innerText = data[i]["country"];
            domains.innerText = data[i]["domains"];
            // td.innerText = data[i].country;
            // td.innerText = data[i]['state-province']; 
            // tr.appendChild(td);
            // tr.appendChild(td);
            tr.appendChild(td);
            tr.appendChild(as);
            tr.appendChild(alpha);
            tr.appendChild(domains);
            tr.appendChild(country);
            table.appendChild(tr);


        }

    })

}