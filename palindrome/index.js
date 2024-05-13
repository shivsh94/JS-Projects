const input = document.getElementById("input")
const btn = document.getElementById("btn")

btn.addEventListener('click', function(){
    check();
})

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value.trim();
    if (!value) {
        alert("please enter a value");
        return;
    }
    const reversed = reverseString(value)
    if(value === reversed){
        alert("Palindrome");
    } else{
         alert("Not a palindrome");
    }
}

