const contentBox = document.getElementById("contentBox");
const title = document.getElementById("title");
function generateEmail() {
  const inEmployee = document.getElementById("employee");
  const outEmail = document.getElementById("outEmail");

  const employee = inEmployee.value;

  if (employee == "" || employee.indexOf(" ") == -1) {
    alert("Enter the employee's full name...");
    document.body.style.background = "#991b1b";
    inEmployee.focus();
    return;
  }

  const parts = employee.split(" ");
  let email = "";
  const tam = parts.length;

  for (let i = 0; i < tam - 1; i++) {
    email += parts[i].charAt(0);
  }

  email += parts[tam - 1] + "@company.com.br";

  outEmail.textContent = "E-mail: " + email.toLocaleLowerCase();
  document.body.style.background = "#84cc16";
  contentBox.style.background = "#2dd4bf";
  outEmail.style.color = "#7c3aed";
}
const btGenerate = document.getElementById("btGenerate");
btGenerate.addEventListener("click", generateEmail);
console.log(contentBox);
