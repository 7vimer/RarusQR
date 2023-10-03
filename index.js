const input = document.getElementById("file-uploader");
const preview = document.querySelector(".listFile");
const clue = document.getElementById("clue");
var files = new Array();
count = 0;

const fileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/pjpg",
    "video/mp4"
  ];

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
    
    const curFiles = input.files;
    if (curFiles.length === 0) {
      //const para = document.createElement("p");
      //para.textContent = "No files currently selected for upload";
      //preview.appendChild(para);
    }
    else if (checkCount() == 5){
      return;  
    }
    else {
      
      for (const file of curFiles) {
        if (checkCount() > 4){
          return;
        } 
        if (validFileType(file)) {
          count = count + 1;
          //para.textContent = `File name ${file.name}, file size ${returnFileSize(
           // file.size,
          //)}.`; Имя и размер файла
          
          
          if(screen.width <= 1240){

            row = document.createElement("div");
            row.classList.add("row");
            row.style = "margin-bottom: 6px; margin-top: 0; margin-right: 0; margin-left: 0;";
            row.id = String(count);

            foo = document.createElement("div");
            foo.classList.add("col-2");
            row.appendChild(foo);

            cendiv = document.createElement("div");
            cendiv.classList.add("col-8");
            row.appendChild(cendiv);

            wrapDiv = document.createElement("div");
            wrapDiv.classList.add("wrapIMG");
            cendiv.appendChild(wrapDiv);
            
            img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            wrapDiv.appendChild(img);
            

            trashdiv = document.createElement("div");
            trashdiv.classList.add("col-2");
            row.appendChild(trashdiv);

            wrapTrash = document.createElement("div");
            wrapTrash.classList.add("wrap");
            trashdiv.appendChild(wrapTrash);

            trashimg = document.createElement("img");
            trashimg.src = "image/trash.svg";
            trashimg.id = "_" + String(count);
            trashimg.setAttribute("onclick", "removeRow(id)");
            wrapTrash.appendChild(trashimg);
          }
          else{
            row = document.createElement("div");
            row.setAttribute("class", "row addFileBlock");
            row.style = "margin-top: 10px; margin-right: 2%; margin-left: 2%;";
            row.id = String(count);

            cendiv = document.createElement("div");
            cendiv.classList.add("col-4");
            row.appendChild(cendiv);

            wrapDiv = document.createElement("div");
            wrapDiv.classList.add("wrapIMG");
            cendiv.appendChild(wrapDiv);
            
            img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            wrapDiv.appendChild(img);

            namediv = document.createElement("div");
            namediv.classList.add("col-7");
            row.appendChild(namediv);

            filename = document.createElement("div");
            filename.classList.add("nameFile");
            namediv.appendChild(filename);

            textdiv = document.createElement("div");
            textdiv.classList.add("textFile");
            textdiv.innerHTML = file.name;
            filename.appendChild(textdiv);

            trashdiv = document.createElement("div");
            trashdiv.classList.add("col-1");
            row.appendChild(trashdiv);

            wrapTrash = document.createElement("div");
            wrapTrash.classList.add("wrap");
            trashdiv.appendChild(wrapTrash);

            trashimg = document.createElement("img");
            trashimg.src = "image/trash.svg";
            trashimg.id = "_" + String(count);
            trashimg.setAttribute("onclick", "removeRow(id)");
            wrapTrash.appendChild(trashimg);
          }
          files.push(file);
          preview.appendChild(row);
        } 
        else {
          para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
          listItem.appendChild(para);
        }
        checkCount();
      }
    }
  }
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

  function returnFileSize(number) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  }

  function checkCount(){
    childrens = preview.childElementCount;
    if(preview.children.length == 1){
      document.querySelector('.outer').style.display = "block";
    }
    else{
      document.querySelector('.outer').style.display = "none";
    }
    return childrens;
  }

  function removeRow(id){
    id = id.replace("_", "");
    preview.removeChild(document.getElementById(id));
    //files.splice(Number(id) - 1);
    delete files[Number(id) - 1];
    console.log(files);
    checkCount();
  }


function addSelectionOptions(dataJson) {
  createSelectionLineBulding(dataJson.Builds);
  createSelectionLineRoom(dataJson.Rooms);
  createSelectionLineExercise(dataJson.ServiceTypes);
}

function createSelectionLineBulding(building) {
  let divBuld = document.getElementById('building');
  for (i in building) {
    let option = document.createElement("option");
    option.value = building[i].name;
    option.id =  building[i].guid;
    option.innerHTML = building[i].name;
    divBuld.append(option);
  }
   
}

function createSelectionLineRoom(room) {
  let divRoom = document.getElementById('room');
  for (i in room) {
    let option = document.createElement("option");
    option.value = room[i].name;
    option.id =  room[i].guid;
    option.innerHTML = room[i].name;
    divRoom.append(option);
  }
}

function createSelectionLineExercise(exercise) {
  let divExercise = document.getElementById('exercise');
  for (i in exercise) {
    let option = document.createElement("option");
    option.value = exercise[i].name;
    option.id =  exercise[i].guid;
    option.innerHTML = exercise[i].name;
    divExercise.append(option);
  }
}