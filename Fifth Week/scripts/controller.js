function validateForm() {
    var flag = true;

    var email = document.forms["myForm"]["email"].value;

    if (email == "" || email == null) {
      var node = document.getElementById("errors");
      var content = document.createTextNode("Empty email");
      node.appendChild(content);
      flag = false;                              
    }
    if(!email.includes("@")) {
        var node = document.getElementById("errors");
        var content = document.createTextNode("Doesnt include @");
        node.appendChild(content);
        flag = false;                              
    }
    if(!email.includes(".")) {
        var node = document.getElementById("errors");
        var content = document.createTextNode("Doesnt include .");
        node.appendChild(content);
        flag = false;                               
    }
    if(email.length < 5) {
        var node = document.getElementById("errors");
        var content = document.createTextNode("Not enough symbols");
        node.appendChild(content);
        flag = false;                               
    }

    var password = document.forms["myForm"]["password"].value;

    if(password.length < 6) {
        var node = document.getElementById("errors");
        var content = document.createTextNode("Not enough symbols");
        node.appendChild(content);
        flag = false;  
    }
    if(!/[A-Z]/.test(password)) {
        var node = document.getElementById("errors");
        var content = document.createTextNode("Doesnt includes capital letter");
        node.appendChild(content);
        flag = false;  
    }
    if(!/[0-9]/.test(password)) {
        var node = document.getElementById("errors");
        var content = document.createTextNode("Doesnt includes number");
        node.appendChild(content);
        flag = false;  
    }
    if(!/[!@#$%^&]/.test(password)) {
        var node = document.getElementById("errors");
        var content = document.createTextNode("Doesnt include special symbol");
        node.appendChild(content);
        flag = false;  
    }
    return flag;
  }

    function registerUser() {
        if(validateForm() == true) {
            let email = document.forms["myForm"]["email"].value;
            let username = document.forms["myForm"]["username"].value;
            let password = document.forms["myForm"]["password"].value;
            window.auth.register(username, email, password, function (successful, errorCode, errorMessage) {
                if (successful) {
                    alert("Успешна регистрация");
                    console.log("Sregister");
                    window.location.href = "posts.html";
                } else {
                    var node = document.getElementById("errors");
                    var content = document.createTextNode(errorMessage);
                    node.appendChild(content);
                    alert("Неуспешна регистрация");
                }
            });
        } else {
            alert("Неуспешна регистрация");
        }
    }
    function loginUser() {
        if(validateForm() == true) {
            let email = document.forms["myForm"]["email"].value;
            let password = document.forms["myForm"]["password"].value;
            console.log(email + "  " + password);
            window.auth.login(email, password, function (successful, errorCode, errorMessage) {
                if (successful) {
                    window.location.href = "posts.html";
                } else {
                    var node = document.getElementById("errors");
                    var content = document.createTextNode(errorMessage);
                    node.appendChild(content);
                    alert("Неуспешен вход");
                }
            });
        } else {
            alert("Неуспешен вход");
        }
    }
