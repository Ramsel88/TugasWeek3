function balikString(str){
    var word = "";
    for(var i = str[0].length-1 ; i>=0; i--){
        word+=str[0][i]
    }
    return word
}

console.log(balikString(['hello world!']));

