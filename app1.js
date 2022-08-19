
// const big = 20;
// const middle = 15;
// let ice = 1;


// let message = big > middle && ice > 0 ? 'C вас 21 грн' : 'C вас 20 грн' ;

// let message2 = big < middle ; 

function myFunc (message, ice) {
    if (message === 'middle') {
    return '15 грн'
    }
    else {
       if (ice) {
        return 'C вас 21 грн'
       } 
       else return 'C вас 20 грн';
    }
}
console.log (myFunc ('big'));
console.log (myFunc ('big', 'ice'));
console.log (myFunc ('middle'));
    
 
 

