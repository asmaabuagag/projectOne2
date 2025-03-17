
const signIn = () => {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let users = localStorage.getItem("user"); 

    if (!users) {
        alert("No users found. Please sign up first.");
        return;
    }

    users = JSON.parse(users); 

    let userFound = users.find(user => user.email === email && user.password === pass);

    if (userFound) {
        alert("Login successful! Welcome, " + userFound.email);
    } else {
        alert("Invalid email or password. Please try again.");
    }
};





const signUp = () => {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let ConPass = document.getElementById("Confirm").value;

    if (pass !== ConPass) {
        alert("Password and confirmation do not match!");
        return;
    }

    let newUsers = {
        email: email,
        password: pass,
        ConPass: ConPass 
    };

    let users = localStorage.getItem("user");
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    users.push(newUsers);

    localStorage.setItem("user", JSON.stringify(users));

    alert("User data saved successfully!");
};
