const registerForm = document.getElementById("form");

registerForm.addEventListener("submit", function (event) {
event.preventDefault();
});

const register = () => {
const inputName = document.getElementsByClassName("input-name")[0];
const inputEmail = document.getElementsByClassName("input-email")[0];
if (inputName.value === "" || inputEmail.value === "") {
    alert("Não foi possível efetivar seu cadastro.");
} else {
    alert("Cadastro efetuado com sucesso");
}
};