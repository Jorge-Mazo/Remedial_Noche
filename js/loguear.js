
// Credenciales para inicial sesion correo: admin@gmail.com contraseña:123456
        
var trioulantes = [{"Correo":"admin@gmail.com", "password_tripulantes":"123456"}]
console.log(trioulantes);


function validarUser(){

    var sw = false
    var correo = document.getElementById('correo').value 
    var Password = document.getElementById('password').value 

    trioulantes.forEach(function(x){
        
        if(x.Correo==correo & x.password_tripulantes==Password){
         
            location.href='main.html'
            sw= true
        
        }

        if(sw == false){
            alert('El usuario y/o contraseña no coinciden')
        }

    })
}