function validar(){
  var cedula, nombre, apellido, telefono, email, password, verificar, registrador;

  cedula = document.getElementById("cedula").value;
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  telefono = document.getElementById("telefono").value;
  email =document.getElementById("email").value;
  password = document.getElementById("password").value;
  verificar = document.getElementById("verificar").value;
  registrador = document.getElementById("registrador").value;
    
  expresion = /\W+@\W+\.+[a-z]/;
    
  if(cedula == "" || nombre == "" || apellido == "" || telefono == "" || email == "" || password == "" || verificar == "" || registrador == ""){
    alert("Por favor llenar todos los datos");
    return false;
  }else if(cedula.length>45){
    alert("Cedula demasiada larga");
    return false;
  }else if (isNaN(cedula)){
    alert("En el campo de cedula se agrega el numero de la cedula");
    return false;
  }else if(nombre.length>45){
    alert("Nombre demasiado largo");
    return false;
  }else if(apellido.length>45){
    alert("Apellido demasiado largo");
    return false;
  }else if(telefono.length>45){
    alert("Telefono demasiado largo");
    return false;
  }else if(isNaN(telefono)){
    alert("En el campo de telefono solo se puede introducir numeros");
    return false;
  }else if(expresion.test(email)){
    alert("En el campo de Correo inserte un correo existente");
    return false;
  }else if(password.length<6){
    alert("Password demasiado corto");
    return false;
  }else if(verificar<>password){
    alert("Verificar la contraseña, llenar el campo nuevamente");
      return false;
  }else if(isNaN(registrador)){
    alert("numero de cedula de la persona que esta realizando la inscripción");
    return false;
  }
}
