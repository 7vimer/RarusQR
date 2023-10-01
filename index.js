
const input = document.getElementById("file-uploader");
const preview = document.querySelector(".content-list");
const clue = document.getElementById("clue");
var files;


const fileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/pjpg",
    "video/mp4"
  ];

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
    //while (preview.firstChild) {
      //preview.removeChild(preview.firstChild);
    //}
  
    const curFiles = input.files;
    files = curFiles;
    if (curFiles.length === 0) {
      const para = document.createElement("p");
      para.textContent = "No files currently selected for upload";
      preview.appendChild(para);
    }
    else if (checkCount() == 6){
      return;  
    }
    else {
      
      //const list = document.createElement("ol");
      //preview.appendChild(list);
  
      for (const file of curFiles) {
        //const listItem = document.createElement("li");
        //const para = document.createElement("p");
        if (checkCount() > 5){
          return;
        } 
        if (validFileType(file)) {
          //para.textContent = `File name ${file.name}, file size ${returnFileSize(
           // file.size,
          //)}.`; Имя и размер файла
          
          count = 0;
          if(screen.width <= 1240){

            row = document.createElement("div");
            row.classList.add("row");
            row.style = "margin-bottom: 6px;";
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
            trashimg.addEventListener("onclick", removeRow(id));
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
          count++;
          preview.appendChild(row);
          //const image = document.createElement("img");
          //image.style.width = "40%";

          //image.src = URL.createObjectURL(file);
  
          //listItem.appendChild(image);
          //listItem.appendChild(para);
        } else {
          para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
          listItem.appendChild(para);
        }
  
        
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
    count = preview.childElementCount;
    if(preview.childElementCount != 1){
      clue.style.display = "none";
    }
    else{
      clue.style.display = "";
    }
    return count;
  }

  function removeRow(id){
    id = id.replace("_", "");
    preview.removeChild(document.getElementById(id));
    checkCount();
  }