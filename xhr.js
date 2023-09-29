var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log("Not found");
    } else {
        console.log(xhr.responseText);
    }
};