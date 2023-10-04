const RequstURL = 'https://rarus-dfis.corp.rarus-cloud.ru/rarusQR/hs/api/'

let queryString = window.location.search;
//queryString = 'https://rarus-dfis.corp.rarus-cloud.ru/rarusQR/hs/api/?&building=11&room=11&exercise=11'
const urlParams = new URLSearchParams(queryString);
const building = urlParams.get('building').split('_');
const room = urlParams.get('room').split('_');
const exercise = urlParams.get('exercise').split('_');

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
            if (body.Contact == '') {
                if (document.getElementById("additionallyGratitude") !== null) {
                    document.getElementById("additionallyGratitude").remove();
                }
            } else {
                let div = document.getElementById('gratitude');
                if (document.getElementById("additionallyGratitude") == null) {
                    let additionally = document.createElement('div');
                    additionally.className = 'gratitudeText';
                    additionally.id = 'additionallyGratitude';
                    additionally.innerHTML = 'Отслеживать состояние заявки Вы можете на.';
                    div.append(additionally);
                }
            }
            const modal = new bootstrap.Modal(document.querySelector('#modalGratitude'));
            modal.show();
        })
        .catch(err => console.log(err));
}