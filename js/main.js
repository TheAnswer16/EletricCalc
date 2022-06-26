let hist = []

$(".form-formula input").mask("Z0999999.00", {

    translation: {
      '0': {pattern: /\d/},
      '9': {pattern: /\d/, optional: true},
      'Z': {pattern: /[\-\+]/, optional: true}
    }
 
 });


function calculaTensao(){
    let R =  Number($('.r').val());
    let I =  Number($('.i').val());
    let result = R * I;
    let newHistItem =
        `<p>${R}Ω x ${I}A = ${result} </p>`;
    $('.hist-space').append(newHistItem);
    
    $('.result-space p').text(result + " V");
}

function calculaPotencia(){
    let iPot =  Number($('.i-pot').val());
    let uPot =  Number($('.u-pot').val());
    let result = iPot * uPot;
    $('.result-space p').text(result + " W");
    let newHistItem =
    `<p>${iPot}A x ${uPot}V = ${result} W </p>`;
    $('.hist-space').append(newHistItem);
}