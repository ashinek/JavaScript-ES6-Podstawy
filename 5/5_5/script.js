//Args musi pojawić się na końcu.
function getValues(a,...Args){
    var values = Args.sort();
    return values;
    //return console.log(Args);
    
    
}

// getValues(10,20,30,40);
console.log(getValues('JS','React','Ember','Ionic','Angular','Webpack'));
