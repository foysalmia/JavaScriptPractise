function feetToInch(feet){
    if( feet < 0){
        const err = 'Please enter a positive number.';
        return err;
    }
    else{
        const inch = feet * 12 ;
        return inch;
    }
}
function inchToFeet(inch){
    if( inch < 0){
        const err = 'Please enter a positive number.';
        return err;
    }
    else{
        const feet = inch / 12 ;
        return feet;
    }
}

function centimeterToMeter(centi){
    if( centi < 0 ){
        const err = 'Please enter a positive number.';
        return err;
    }
    else{
        const meter = centi / 100 ;
        return meter;
    }
}
function meterToCentemeter(meter){
    if( meter < 0 ){
        const err = 'Please enter a positive number.';
        return err;
    }
    else{
        const centi  = meter * 100 ;
        return centi;
    }
}

function totalBookPage(book1,book2,book3){
    if( book1 < 0 || book2 < 0 || book3 < 0){
        const err = 'Please enter a positive book number.';
        return err;
    }
    else{
        const totalPage = ( book1 * 100 ) + ( book2 * 200 ) + ( book3 * 300 ) ;
        return totalPage ;
    }
}

function bestFriend(array){
    let friend = '';
    for (const freinds of array) {
        if(freinds.length > friend.length){
            friend = freinds ;
        }  
    }
    return friend;
}

function onlyPositive(array){
    let positiveNumber = [];
    for (const number of array) {
        if (number < 0){
            break;
        }
        else{
            positiveNumber.push(number);
        }
    }
    return positiveNumber ;
}

// const bondu = [12,-52,58,-58,25,25,48];
// const total = onlyPositive(bondu);
// console.log(total);