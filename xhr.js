const RequstURL = 'https://rarus-dfis.corp.rarus-cloud.ru/rarusQR/hs/api/'

let queryString = window.location.search;
//queryString = 'https://rarus-dfis.corp.rarus-cloud.ru/rarusQR/hs/api/?&building=11&room=11&exercise=11'
const urlParams = new URLSearchParams(queryString);
const building = urlParams.get('building');
const room = urlParams.get('room');
const exercise = urlParams.get('exercise');

const data = {
    "building": building,
    "room": room,
    "exercise": exercise
};


let divRoom = document.getElementById('room');

let option = document.createElement("option");
option.value = data.room;
option.id = data.room;
option.innerHTML = data.room;
option.selected = "selected";
divRoom.append(option);
divRoom.disabled = true;

function CheckConnection(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        url += quid
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }
        if (body == null) {
            xhr.send()
        } else {
            xhr.send(JSON.stringify(body))
        }

    })

}

function GetList() {
    url = RequstURL + `?building=${data.building}&room=${data.room}&exercise=${data.exercise}`;
    CheckConnection('GET', url)
        .then(function (response) {
            addSelectionOptions(response);
        })
        .catch(err => console.log(err));
}

function postApplication(body) {
    url = RequstURL + 'sendRequest';
    CheckConnection('GET', url, body)
        .then(function (response) {
            console.log(response.status);
        })
        .catch(err => console.log(err));
}