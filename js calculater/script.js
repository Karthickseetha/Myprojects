function appendCharacter(character) {
    const result = document.getElementById("result");
    result.value += character;
}

function clearResult() {
    const result = document.getElementById("result");
    result.value = "";
}

function deleteCharacter() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    const result = document.getElementById("result");
    const expression = result.value;
    result.value = eval(expression);
}
