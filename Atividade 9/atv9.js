function maior(a, b, c){
    return ordena(a,b,c)[2];
}

function ordena(a, b, c){
    var x = [a,b,c];
    x = x.sort(function(a,b){return a-b});
    return x;
}

console.log(ordena(33, 4, 10));

console.log(maior(232,11,100));