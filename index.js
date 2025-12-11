//1.  Sistema de clasificación de rendimiento: 
//Solicita al usuario su nota (0-20) y su asistencia (%). Si la nota es mayor o igual a 11 y 
//la asistencia es mayor o igual al 70%, se aprueba. De lo contrario, se desaprueba.
// Además, otorga menciones especiales para notas mayores a 17 con asistencia completa. 
let n= parseInt(prompt("Ingresa tu nota (0-20): "))
let asistencia= parseFloat(prompt("Ingresa tu porcentaje de asistencia: "))

if (n>=11 && asistencia>=70){
    console.log("Aprobado")
    if (n>=17 && asistencia==100){
        console.log("Mención Especial")
    }
}
else{
    console.log("Desaprobado")
}

