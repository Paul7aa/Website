const navSlide = () => {
    const burger = document.querySelector('.burger'); /*to get the classes from the css*/
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //event listener for burger click
    burger.addEventListener('click', ()=>{
        //toggle nav bar
        nav.classList.toggle('nav-active');
        //animate the links (ease forwards)
        navLinks.forEach((link, index)=>{
            //if the animation exists
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
        //burger animation on click
        burger.classList.toggle('toggle');
    });
}

const validateTextFields = () => {
    const inputName = document.getElementById('Name');
    const inputEmail = document.getElementById('E-mail');
    const inputSubject = document.getElementById('Subject');
    const inputMessage = document.getElementById('Message');
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = "";
    
    inputName.style.borderColor = "#777";
    inputEmail.style.borderColor = "#777";
    inputSubject.style.borderColor = "#777";
    inputMessage.style.borderColor = "#777";

    if(inputName.value == '' || inputEmail.value == '' || 
        inputSubject.value == '' || inputMessage.value ==''){
        
        errorMessage.style.color = "red";
        errorMessage.innerHTML = "Cannot leave empty fields!";
        
        if (inputName.value == ''){
            inputName.style.borderColor = "red";
        }
        if (inputEmail.value == ''){
            inputEmail.style.borderColor = "red";
        }
        if (inputSubject.value == ''){
            inputSubject.style.borderColor = "red";
        }
        if (inputMessage.value == ''){
            inputMessage.style.borderColor = "red";
        }
        
        return false;
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value))){
        errorMessage.style.color = "red";
        errorMessage.innerHTML = "Incorrect e-mail adress!";
        inputEmail.style.borderColor = "red";
        return false;
    }

    if(inputMessage.value.length < 20){
        errorMessage.style.color = "red";
        errorMessage.innerHTML = "Message must be at least 20 characters long!";
        inputMessage.style.borderColor = "red";
        return false;
    }

    errorMessage.style.color = "green";
    errorMessage.innerHTML = "Message sent!";
    return true;
}


const sendMessage = ()=>{
    const sendButton = document.getElementById('sendDiv');

    sendButton.addEventListener('click', () => {
        if(validateTextFields()){
            //function
        }

    });
}

const app = ()=>{
    /*add functions here*/
    navSlide();
    sendMessage();
}

app();