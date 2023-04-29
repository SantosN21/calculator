const result = document.querySelector(".result");
const allButtons = document.querySelectorAll(".button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.value;
    result.innerText += value;
    if (value === "." && (result.innerText.match(/\./g) || []).length > 1) {
      result.innerText = result.innerText.slice(0, -1);
    }
    if (value == "=") {
      if (result.innerText.includes("/")) {
        const splitStuff = result.innerText.split("/");
        operate("/", splitStuff[0], splitStuff[1]);
      }
      if (result.innerText.includes("-")) {
        const splitStuff = result.innerText.split("-");
        operate("-", splitStuff[0], splitStuff[1]);
      }
      if (result.innerText.includes("+")) {
        const splitStuff = result.innerText.split("+");
        operate("+", splitStuff[0], splitStuff[1]);
      }
      if (result.innerText.includes("*")) {
        const splitStuff = result.innerText.split("*");
        operate("*", splitStuff[0], splitStuff[1]);
      }
      if (result.innerText.includes("%")) {
        const splitStuff = result.innerText.split("%");
        operate("%", splitStuff[0], splitStuff[1]);
      }
    }
    if (value === "C") {
      result.innerText = "";
    }
    if (value === "+/-") {
      if (result.innerText && !isNaN(parseFloat(result.innerText))) {
        result.innerText = parseFloat(result.innerText) * -1;
      }
    }
  });
});

const operate = (operator, valueOne, valueTwo) => {
  const numOne = parseFloat(valueOne);
  const numTwo = parseFloat(valueTwo);
  switch (operator) {
    case "/":
      result.innerText = numOne / numTwo;
      break;
    case "-":
      result.innerText = numOne - numTwo;
      break;
    case "+":
      result.innerText = numOne + numTwo;
      break;
    case "*":
      result.innerText = numOne * numTwo;
      break;
    case "%":
      result.innerText = numOne % numTwo;
      break;
  }
};
