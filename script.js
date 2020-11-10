// This challenge requires that the developer implementing it follow these constraints:

// 1.Arrays may not be used to contain the binary digits entered by the user
// 2.Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function, for example the natural logarithm. It's up to you to figure out which function to use.

const convertBtn = document.querySelector('button');
const binInput = document.querySelector('#bin');
const decInput = document.querySelector('#dec');

convertBtn.addEventListener('click', () => {
    const errorMsg = document.querySelector('.error');
    errorMsg.classList.remove('show');
    
    // get input value
    let number = binInput.value;

    if (number.length <= 8) {

        // verify each charactere(n) of input value
        number.split('').map((n) => {
            if(n != 1 && n != 0) {
                errorMsg.classList.add('show');
    
                number = '';
            }
        })

        // convert binary to decimal
        number != '' ? decInput.value = parseInt(number, 2) : decInput.value = ''
    } 
})

// my first attempt to convert

// if(number != '') {
//     let charPosition = number.length;
//     let convertion = 0;

//     for (let i = 0; i < number.length; i++) {
//         charPosition--;
//         convertion += number[i]*(2**charPosition);
//     }
    
//     // show decimal number 
//     decInput.value = parseInt(number, 2);

// } else {
//     decInput.value = '';
// }