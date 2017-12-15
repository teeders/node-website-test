var age = prompt('Enter your age');

//can use "" below because ' is messing up code

if (age < 15) {
    alert('You\'re too young to drive!');

} else if (age >= 18) {
    alert('You\'re already driving');

} else if (age < 18) {
    alert('Drive safely');
} else {
    alert('You entered in a word?')
}
;

function add(first, second) {
    var sum = first + second;
    alert(sum);
};

function add() {
    var first = parseInt(prompt('enter first number'));
    var second = parseInt(prompt('enter second number'));
    var sum = first + second;
    alert(sum);
};

// var third = prompt('enter third number'); returns string needs to be parse Int to be number