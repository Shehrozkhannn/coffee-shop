const about = [
    {
        image: './Images/coffee4-removebg-preview.png',
        title: 'Lattee Coffee',
        Rs: '200Rs',
        description: 'Lattee coffee is one of the most popular coffee in the Pakistan.latte are coffee beverages that are made starting with the same espresso coffee.To make latte, espresso and steamed milk are poured simultaneously in a cup and topped with a small layer ...'

    },
    {
        image: './Images/coffee7-removebg-preview.png',
        title: 'Expresso Coffee',
        Rs: '500Rs',
        description: 'Expresso coffee the best kinds of coffee blends for espresso creation are the dark roast aromatic beans from Latin America, although this is still subject for debate among coffee lovers. Espresso is created by subjecting the beans to high-pressure steam treatment.'
    },
    {
        image: './Images/coffee3.png',
        title: 'Black Coffee',
        Rs: '1000Rs',
        description: 'We are excited to be back and have implemented new systems to keep everyone safe and healthy. Carry-out or dine in is available every day from 8AM-4PM. While you can always stop by and order with us at the counter, we are also offering online ordering and contact-free pick up through our website.'
    },
    {
        image: './Images/coffee5-removebg-preview.png',
        title: 'Decaf Coffee',
        Rs: '2000Rs',
        description: 'Decaf is short for decaffeinated coffee. It’s coffee from coffee beans that have had at least 97% of their caffeine removed. There are many ways to remove caffeine from coffee beans. Most of them include water, organic solvents, or carbon dioxide (1).'
    },
    {
        image: './Images/coffee6-removebg-preview.png',
        title: 'Cappuccino Coffee',
        Rs: '1500Rs',
        description: 'Cappuccino is a coffee drink which is made with hot milk, coffee and steamed milk foam. The micro foam has thick layer. It is served in the cup of 150 to 180 ml having a handle. It has rich texture and flavor'
    },
    {
        image: './Images/coffee8-removebg-preview.png',
        title: 'Macchiato Coffee',
        Rs: '2500Rs',
        description: 'A macchiato is often mentioned in the same sentence as an espresso and a cappuccino, two of the most popular and well-known coffee orders. The macchiato is essentially an espresso with a spot of milk. The milk creates a different flavor complex to the espresso, but the small quantity means that the coffee tastes very different to the cappuccino.'
    },
    {
        image: './Images/coffee10-removebg-preview.png',
        title: 'Ristretto Coffee',
        Rs: '4500Rs',
        description: 'Ristretto is strongly related to Italy. This short coffee comes with a strong taste and is nothing like your regular dose of coffee. Thanks to its unique extraction process, true coffee fans consider it the best type of coffee to have for rejuvenating all senses. The word ristretto means restricted in Italian.'
    },
    {
        image: './Images/coffee11-removebg-preview.png',
        title: 'Flat White Coffee',
        Rs: '5000Rs',
        description: 'What is a flat white coffee? The flat white coffee is an espresso -based coffee drink accompanied with steamed milk and microfoam. This microfoam is made up of steamed milk which is gently infused with air. This results in silky, textured milk containing tiny air bubbles'
    },



]

const img = document.querySelector('.modal-image')
const ti = document.querySelector('.modal-title')
const price = document.querySelector('.modal-rs')
const details = document.querySelector('.modal-description')

function showItem(index) {
    img.src = about[index].image
    ti.innerText = about[index].title
    price.innerText = "Price " + about[index].Rs
    details.innerText = about[index].description
}
let index = 0;
let errorEl = "";
function setError(id, error) {
    // element = document.getElementById(id);
    // let errorEl = document.getElementsByClassName("error1")[index];
    // errorEl.innerHTML = error;

    // index = index + 1

    if (id === "name") {
        errorEl = document.querySelectorAll(".error1")[0];
    } else {
        errorEl = document.querySelectorAll(".error1")[1];
    }
    errorEl.innerHTML = error;



    //     element = document.getElementById(id);
    //    let a = element.getElementsByClassName("error1")[0];
    //    a.innerHTML = error;

}

function validateForm(event) {
    event.preventDefault();

    let name = document.forms['myForm']['username'].value;
    let passWord = document.forms['myForm']['pass'].value;

    if (name.length === 0 && passWord.length === 0) {
        alert("Please Fill all the fields!");
    }
}

function checkUserName() {
    console.log('a');
}


function signUp(event) {
    event.preventDefault();
    let username = document.querySelector('#name').value;
    let password = document.querySelector('#password').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone-number').value;
    if (username === "" || password === "" || email === "" || phone === "")
        alert("Please fill all the required fields")
    else {
        const userDetail = {
            userName: username,
            passWord: password,
            email: email,
            phoneNumber: phone
        }
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
        // window.open("signin.html", "_self");
        document.querySelector('#name').value = ""
        document.querySelector('#password').value = ""
        document.querySelector('#email').value = ""
        document.querySelector('#phone-number').value = ""
        // bootstrap-Alerbox
        var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        alertPlaceholder.innerHTML = '<div class="fade show alert alert-success alert-dismissible" role="alert">' + "Registered Successfully" + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        setTimeout(() => {
            var element = document.querySelector(".alert");
            var myAlert = new bootstrap.Alert(element);
            myAlert.close();
        }, 3000);
    }
}

function login(){
    let user = document.querySelector('#name').value;
    let pass = document.querySelector('#password').value;
    let userDetail = JSON.parse(localStorage.getItem("userDetail"));
    if(!userDetail){
        alert("Please Sign Up First!")
    }
    else if (user == userDetail.userName && pass == userDetail.passWord){
        window.open("index.html","_self");
    }
    else {
        alert("Incorrect Username or password!")
    }
}
// contact form

function contactFormSubmit(event) {
    event.preventDefault();
    const form = document.querySelector("#contactForm");
    let usersInfo = [];
    let userDetailNewObject = {
        fName: form[0].value,
        lName: form[1].value,
        age: form[2].value,
    }
    if (localStorage.getItem("contact-user-info")) {
        usersInfo = JSON.parse(localStorage.getItem("contact-user-info"));
    }
    usersInfo.push(userDetailNewObject);
    alert("your form submitted successfully")
    localStorage.setItem('contact-user-info', JSON.stringify(usersInfo));
    document.querySelector("#contactForm").reset();
}
function getUsersInfo(){
    let usersList = JSON.parse(localStorage.getItem("contact-user-info"));
    let usersUlElement = document.querySelector(".users-container");
    if (!usersList) {
        let container = document.querySelector(".container");
        let div = document.createElement("div");
        div.textContent = "Did not find any user";
        container.appendChild(div);
    } else {
        usersList.map((user) => {
            let li = document.createElement("li");
            li.textContent = "Name: " + user.fName + " " + user.lName;
            usersUlElement.appendChild(li);
            console.log(li);
        });
    }
}

