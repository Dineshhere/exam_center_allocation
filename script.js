let cities = [
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Mumbai",
  "Pune",
  "New Delhi",
  "Coimbatore",
  "Madurai",
  "Gurgagaon",
  "Kolakata",
];

let users_list = [];

function displaying_users() {
  let alluserscontainer = document.getElementById("users");
  alluserscontainer.innerHTML = "";

  users_list.map((useronmap) => {
    let newuserdiv = document.createElement("div");
    newuserdiv.classList.add("user");

    let nameelement = document.createElement("p");
    nameelement.innerText = useronmap.user_name;
    nameelement.classList.add("name");

    let emailelement = document.createElement("p");
    emailelement.innerText = useronmap.user_email;
    emailelement.classList.add("email");

    let cityelement = document.createElement("p");
    cityelement.innerText = useronmap.city;
    cityelement.classList.add("city");

    alluserscontainer.appendChild(newuserdiv);
    newuserdiv.appendChild(nameelement);
    newuserdiv.appendChild(emailelement);
    newuserdiv.appendChild(cityelement);
  });
}

function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return pattern.test(email);
}

function checking_user(currentuser) {
  //for checking username
  let user_exist = users_list.filter((eachdata) => {
    return currentuser.user_email == eachdata.user_email;
  });

  if (user_exist.length == 0) {
    return true;
  } else {
    return false;
  }
}

function check_user_exist() {
  let username = document.getElementById("user-name");
  let user_mail = document.getElementById("user-e-mail");

  let new_obj = {
    user_name: username.value,
    user_email: user_mail.value,
  };

  let random_number = Math.floor(Math.random() * cities.length + 1);

  if (checking_user(new_obj)) {
    if (username.value.length > 1 && validateEmail(user_mail.value)) {
      new_obj.city = cities[random_number];
      users_list.push(new_obj);
      displaying_users();
      username.value = "";
      user_mail.value = "";
    } else {
      alert(
        "Your Name must Be greater than the length of 2 and your email must contain domain like .com .co and must contain @"
      );
    }
  } else {
    alert("User Already exist try with different mail id");
  }
}
