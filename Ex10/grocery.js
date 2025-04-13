function submitForm() {
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const primaryNo = document.querySelector("#pri-number").value;
  const secondaryNo = document.querySelector("#sec-number").value;
  const email = document.querySelector("[type='email']").value;
  const apple = calcPrice("apple");
  const banana = calcPrice("banana");
  const avocado = calcPrice("avocado");

  sessionStorage.setItem("name", firstName + " " + lastName);
  sessionStorage.setItem("primaryNo", primaryNo);
  sessionStorage.setItem("secondaryNo", secondaryNo);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("apple", JSON.stringify(apple));
  sessionStorage.setItem("banana", JSON.stringify(banana));
  sessionStorage.setItem("avocado", JSON.stringify(avocado));
}

function calcPrice(prodName) {
  const prodChecked = document.querySelector(`#${prodName}`).checked;
  const unitPrice = parseInt(
    document.querySelector(`#${prodName}-price`).textContent.slice(1)
  );
  const weight = document.querySelector(`#${prodName}-weight`).value;
  return [
    prodName,
    prodChecked,
    unitPrice,
    weight === "" ? 0 : parseInt(weight),
  ];
}
