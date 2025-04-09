let string = "";

function reverseString(string){

    if (string.length === "") {
        return string;
    } else{
        return string.split('').reverse().join('');
    }
}
console.log(reverseString("hello"));
console.log(reverseString("cat"));
console.log(reverseString("stacey"));
