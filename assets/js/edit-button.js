const editButton = document.querySelector(".edit-btn");
const disabledInputs = document.querySelectorAll(".input-fields");
const title = document.querySelector(".title");
const createBtn = document.querySelector(".create-btn");
const prompt = document.querySelector(".modal-message");
const heading = document.querySelector(".heading");
const date = document.querySelector(".date");

editButton.addEventListener('click', enableInput);

function enableInput(){
    console.log(disabledInputs);
    for(let i=0; i<disabledInputs.length; i++){
        disabledInputs[i].disabled = false;
    }

    editButton.classList.toggle("d-none");
    title.classList.toggle("invisible");
    createBtn.classList.toggle("d-none");
    createBtn.innerText = "Save";
    prompt.innerText="Customer details updated successfully!";
    heading.innerText ="Edit Customer";
    date.classList.toggle("d-none");

}