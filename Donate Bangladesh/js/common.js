document.getElementById('home-info').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('home-info')
    window.location.href = './index.html';
})
// -------------------------------------------


// -------------------------------------------

// function of getting input field of write donation amount //
function getInputAmount(id) {
    const inputField = document.getElementById(id).value;
    const inputFieldAmount = parseFloat(inputField);
    return inputFieldAmount;
}
// -------------------------------------------

// function of getting total amount and total donation amount //
function getTextValue(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueAmount = parseFloat(textValue);
    return textValueAmount;
}