const eyeIcon = document.querySelector(".fa-eye");
const password = document.querySelector("#password-input");
const btnGroup = document.querySelector(".gen-btns-grp");
const changeReceiptColor = document.querySelector("#change-color-btn");
const changeTemplate = document.querySelector("#change-temp-btn");
const receiptColorDiv = document.querySelector("#receipt-color-div");
const changeTemplateDiv = document.querySelector("#change-template-div");


eyeIcon.addEventListener('click', showPassword);

changeReceiptColor.addEventListener('click', closeChangeTemplate);
changeTemplate.addEventListener('click', closeChangeReceiptColor);


function showPassword(){
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute("type", type);
    eyeIcon.classList.toggle('fa-eye-slash')
}

function closeChangeReceiptColor(){
    receiptColorDiv.classList.remove("show");
    changeReceiptColor.classList.add("collapsed");
    if(!changeTemplate.classList.contains("collapsed")){
        btnGroup.classList.remove("d-none");
    }
    else{
        btnGroup.classList.add("d-none");
    }

}

function closeChangeTemplate(){
    changeTemplateDiv.classList.remove("show");
    changeTemplate.classList.add("collapsed");
    btnGroup.classList.remove("d-none");
    if(!changeReceiptColor.classList.contains("collapsed")){
        btnGroup.classList.remove("d-none");
    }
    else{
        btnGroup.classList.add("d-none");
    }

}
