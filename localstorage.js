   let email = document.getElementById("email");
   let password = document.getElementById("password");
   
    function store()
    {
        localStorage.setItem('email',email.value)
        localStorage.setItem('password', password.value)
    }

    var abc = localStorage.getItem('email');
    var xyz = localStorage.getItem('password');
    // console.log(xyz);

    function check()
    {
        let user_email = document.getElementById('email1');
        let user_password = document.getElementById('password1');
      
        if(email1.value !== abc && password1.value!== xyz ){
            alert("email & pswd incorrect");
        }
        else{
            alert('pswd,email correct');
        }

    }