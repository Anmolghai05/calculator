let first = document.getElementById('first');
buttons = document.querySelectorAll('button');
let firstValue = '';


for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log(buttonText);

        if (buttonText == 'x') {
            buttonText = '*';
            firstValue+=buttonText;
            first.value = firstValue;


        }
        else if (buttonText == '=') {
        first.value=eval(firstValue);


        }
        else if (buttonText == 'C') {
            firstValue="";
            first.value=firstValue;
        }
        else{
            firstValue+=buttonText;
            first.value = firstValue;

        }



    })
}