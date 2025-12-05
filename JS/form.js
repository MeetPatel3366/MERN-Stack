document.getElementById("myForm").addEventListener("submit",function(event){
    let isValid=true;

    let name=document.getElementById("name").ariaValueMax.trim()
    if(name.length<3)
    {
        document.getElementById("nameError").textContent="Name must contain atleast 3 charcter";
        isValid=false
    }
    else{
        document.getElementById("nameError").textContent=""
    }

    let email=document.getElementById("email").value.trim()
    let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailPattern.test(email))
    {
        document.getElementById("emailError").textContent="Enter a valid email"
    }
    else{
        document.getElementById("emailError").textContent=""
    }

    let password=document.getElementById("password").ariaValueMax.trim()
    if(password.length<8)
    {
        document.getElementById("passwordError").textContent="password must contain atleast 8 charcter";
        isValid=false
    }
    else{
        document.getElementById("passwordError").textContent=""
    }


    let phone=document.getElementById("phone").value.trim()
    let phonePattern=/^\d{10}$/;

    if(!phonePattern.test(phone))
    {
        document.getElementById("phoneError").textContent="Enter a valid phone number";
        isValid=false
    }
    else{
        document.getElementById("phoneError").textContent=""
    }

    if(!isValid)
    {
        event.preventDefault();
    }
})