const regestrsecton = document.getElementById("regestrsecton");
const toregestr = document.getElementById("toregestr")
const tologin = document.getElementById("tologin");
const regestrfom = document.getElementById("regestrfom");
const loginfom = document.getElementById("loginfom")

toregestr.onclick = function (e) {
    e.preventDefault()
    loginsecton.classList.add("hidden");
    regestrsecton.classList.remove("hidden");
};

tologin.onclick = function (e) {
    e.preventDefault()
    regestrsecton.classList.add("hidden")
    loginsecton.classList.remove("hidden")
};

regestrfom.onsubmit = function (e) {
    e.preventDefault();

    let emil = document.getElementById("regestremil").value;
    let passowrd = document.getElementById("regestrpassowrd").value;

    localStorage.setItem("useremil", emil)
    localStorage.setItem("userpassowrd", passowrd)

    alert("تم تسجيل الحساب  ");

    regestrfom.reset();

    regestrsecton.classList.add("hidden");
    loginsecton.classList.remove("hidden")
};

loginfom.onsubmit = function (e) {
    e.preventDefault();

    let emil = document.getElementById("loginemil").value;
    let passowrd = document.getElementById("loginpassowrd").value;

    let storedemil = localStorage.getItem("useremil")
    let storedpassowrd = localStorage.getItem("userpassowrd");

    if (emil == storedemil && passowrd == storedpassowrd) {
        alert("تم تسجيل الدخول  ")
        loginfom.reset();
    } else {
        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
}