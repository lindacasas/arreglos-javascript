let array = [];

function ejercicio1() {
    for(let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100)); 
    }
    console.log(array);
    alert("Arreglo: \n [ " + array + " ]");
    array = [];
}

function ejercicio2() {
    let str = "";
    do {
        str = prompt("Ingresa valores separados por coma");
        if (str === null) {
            return;
        }
    } while (str.length===0);
    array = str.split(',');
    console.log(array);
    alert("Arreglo: \n [ " + array + " ]");
}

function ejercicio3() {
    const inputValue = document.getElementById("ex3-input").value.trim(); 
    if(inputValue === "") { 
        alert("Debe ingresar numeros al arreglo");
        return;
    }
    array = inputValue.split(',');
    array.sort((a, b) => a - b);
    console.log("Arreglo ordenado:", array);
    console.log("Valor mínimo:", Math.min(...array));  
    console.log("Valor máximo:", Math.max(...array));

    alert("Arreglo ordenado: [ "+ array + " ]"+ "\n Valor mínimo: " + Math.min(...array) + "\n Valor máximo: " + Math.max(...array));
}

function filterInput(event) {
    const input = event.target;
    const value = input.value;
    const keyPressed = event.data;
    if (/^\d$/.test(keyPressed) || keyPressed === ",") {
        return;
    } else {
        input.value = value.slice(0, -1);
    }
}