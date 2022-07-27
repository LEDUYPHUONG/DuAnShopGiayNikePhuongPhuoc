import User from '../models/User.js'

document.getElementById("btnSubmitForm").onclick = (e) => {
  e.preventDefault();
//   checkGender();
  signup();

};

const signup = () => {
  let isValid = validation();
  if (!isValid) {
    return alert("Vui lòng kiểm tra lại đầu vào");
  }

  let user = new User();
  let email = document.getElementById("email");
  let name = document.getElementById("name");
  let password = document.getElementById("password");
  let phone = document.getElementById("phone");
  let gender = document.querySelector('input[name="gender"]:checked');

  user.email = email.value;
  user.name = name.value;
  user.password = password.value;
  user.phone = phone.value;
  user.gender = gender.value;

  console.log('user', user);

  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: user,
  });

  try {
    promise.then((res) => {
    //   console.log("result", res.data.message);
        alert(res.data.message);
        clearValue();
    });
    promise.catch(() => { 
      return alert('Tài khoản đã được đăng ký hoặc sai định dạng vui lòng kiểm tra lại');
     })
  } catch (err) {
    console.log(err.respond?.data);
    alert('Tài khoản đã được đăng ký hoặc sai định dạng vui lòng kiểm tra lại')
  }
};

const clearValue = () => { 
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let phone = document.getElementById("phone");
    let confirm = document.getElementById("password-confirm");
    email.value = '';
    name.value = '';
    password.value = '';
    confirm.value = '';
    phone.value = '';
 }

const validation = () => {
  var isValid = document.getElementById("registerForm").checkValidity();
  if (!isValid) {
    let txtEmail = document.querySelector("#email");
    let coverEmail = document.getElementById("register-input-email");
    let errMail = document.getElementById("txtEmail");
    if (txtEmail.validity.valueMissing) {
      errMail.style.display = "block";
      coverEmail.classList.add("alert-validate");
      errMail.innerHTML = "Giá trị không được để trống";
    } else if (txtEmail.validity.patternMismatch) {
      coverEmail.classList.add("alert-validate");
      errMail.style.display = "block";
      errMail.innerHTML = "Email không đúng định dạng";
    } else {
      coverEmail.classList.remove("alert-validate");
      errMail.style.display = "none";
      errMail.innerHTML = "";
    }

    let txtName = document.querySelector("#name");
    let coverName = document.getElementById("register-input-name");
    let errName = document.getElementById("txtName");

    if (txtName.validity.valueMissing) {
      coverName.classList.add("alert-validate");
      errName.style.display = "block";
      errName.innerHTML = "Tên không được để trống";
    } else if (txtName.validity.patternMismatch) {
      errName.style.display = "block";
      coverName.classList.add("alert-validate");
      errName.innerHTML = "Tên không không chứa số hoặc kí tự đặc biệt";
    } else {
      coverName.classList.remove("alert-validate");
      errName.style.display = "none";
      errName.innerHTML = "";
    }

    let txtPassword = document.querySelector("#password");
    let coverPassword = document.getElementById("register-input-password");
    let errPassword = document.getElementById("txtPassword");

    if (txtPassword.validity.valueMissing) {
      coverPassword.classList.add("alert-validate");
      errPassword.style.display = "block";
      errPassword.style.bottom = "16px";
      errPassword.innerHTML = "Password không được để trống";
    } else if (txtPassword.validity.patternMismatch) {
      coverPassword.classList.remove("alert-validate");
      coverPassword.style.margin = "0 0 60px";
      coverPassword.style.border = " 1px solid #fa4251";
      errPassword.style.display = "block";
      errPassword.style.bottom = "8px";
      errPassword.innerHTML =
        "Password phải ít nhất 8 kí tự, bao gồm chữ in hoa, chữ thường, và số";
    } else {
      coverPassword.classList.remove("alert-validate");
      coverPassword.style.margin = "0 0 12px";
      coverPassword.style.border = "1px solid #e6e6e6";
      errPassword.style.bottom = "16px";
      errPassword.style.display = "none";
      errPassword.innerHTML = "";
    }

    let txtPhone = document.querySelector("#phone");
    let coverPhone = document.getElementById("register-input-phone");
    let errPhone = document.getElementById("txtPhone");

    if (txtPhone.validity.valueMissing) {
      coverPhone.classList.add("alert-validate");
      errPhone.style.display = "block";
      errPhone.innerHTML = "Số điện thoại không được để trống";
    } else if (txtPhone.validity.patternMismatch) {
      coverPhone.classList.add("alert-validate");
      errPhone.style.display = "block";
      errPhone.innerHTML = "Số điện thoại không đúng định dạng";
    } else {
      coverPhone.classList.remove("alert-validate");
      errPhone.style.display = "none";
      errPhone.innerHTML = "";
    }

    let txtConfirm = document.querySelector("#password-confirm");
    let coverConfirm = document.getElementById("register-input-passConfirm");
    let errConfirm = document.getElementById("txtPass-confirm");

    if (txtConfirm.validity.valueMissing) {
      coverConfirm.classList.add("alert-validate");
      errConfirm.style.display = "block";
      errConfirm.innerHTML = "Password Confirm không được để trống";
    }else if (txtConfirm.value !== txtPassword.value && txtConfirm.validity.patternMismatch) {
      coverConfirm.classList.add("alert-validate");
      errConfirm.style.display = "block";
      errConfirm.innerHTML = "Password Confirm không khớp với password";
    }else {
      coverConfirm.classList.remove("alert-validate");
      errConfirm.style.display = "none";
      errConfirm.innerHTML = "";
    }
  }
  return isValid;
};

// function checkGender() {
//   let gender = document.querySelector('input[name="gender"]:checked');

//   if (gender != null) {
//     console.log(gender.value);
//   } else {
//     console.log("No one selected");
//   }
// }

// document.getElementById("male").addEventListener("click", () => {
// //   e.defaultPrevented();
//   document.getElementById("male").check = true;
// });

document.getElementById("female").addEventListener("click", () => {
//   e.defaultPrevented();
  document.getElementById("female").check = true;
});

window.onload = () =>{
    clearValue();
}
