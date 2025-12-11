//Validación de acceso: 
//Solicita usuario, contraseña y rol (admin, editor, visitante). Verifica si las credenciales 
//son válidas y muestra los permisos disponibles según el rol. Usa múltiples condicionales 
//y lógica anidada. 
const usuarios={
    admin:{
        contraseña:"admin123",
        permisos:["Lectura","Escritura","Eliminación","Edición"],
    },
    editor:{
        contraseña:"editor123",
        permisos:["Lectura","Edición"],
    },
    visitante:{
        contraseña:"visitante123",
        permisos:["Lectura"],
    }
}
const usuario= prompt("Usuario: ")
const password= prompt("Contraseña: ")
const rol= prompt("Rol (admin/editor/visitante): ")
if(usuarios[rol]){
    if(usuarios[rol].contraseña===password){
        console.log(`Acceso concedido como ${rol.toLowerCase()}`)
    } else{
        console.log("Contraseña incorrecta")
    }
} else{
    console.log("Rol inválido")
}