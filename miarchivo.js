

let numero1 = parseInt(prompt("Ingrese un numero")); 

let operacion = (prompt("Ingrese una operacion"))

let numero2 = parseInt(prompt("Ingrese un numero")); 



switch (operacion) {
    case "+": numero1 + numero2  
    alert ("El resultado de tu operacion es: " + (numero1 + numero2))
    break;

    case "-": numero1 - numero2  
    alert ("El resultado de tu operacion es: " + (numero1 - numero2))
        break;
    
    case "*": numero1 * numero2  
    alert ("El resultado de tu operacion es: " + (numero1 * numero2))
    
    break;

    case "/": if (numero2!=0){ numero1 / numero2  

    alert ("El resultado de tu operacion es: " + (numero1 / numero2))}
    else{alert ("No se puede dividir por cero")
    }

}

