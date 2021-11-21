var  UPB_tripulantes = []



function agregarRegistro() {
    
    var nombre = document.getElementById('nombre').value 
    var apellido = document.getElementById('apellido').value 
    var correo = document.getElementById('correo').value 
    var password = document.getElementById('password').value 

    persona = {"nombre": nombre,"apellido":apellido,"correo": correo, "password":password }
    UPB_tripulantes.push(persona)
    console.log(UPB_tripulantes);

    document.getElementById('nombre').value=""
    document.getElementById('apellido').value="" 
    document.getElementById('correo').value =""
    document.getElementById('password').value="" 


    if(nombre =='' || apellido=='' || correo=='' || password==''){

        alert('Completa los campos')
    }else{
        alert('Felicidades!!, ya puedes iniciar sesion')


         location.href='login.html'
         alert("Credenciales para inicial sesion correo: admin@gmail.com contraseña:123456")
    }
    // alert("Credenciales para inicial sesion correo: admin@gmail.com contraseña: 123456")


}


// function login(){

//     location.href='login.html'
// }