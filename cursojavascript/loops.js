 var  estudiantes = ["María", "Sergio", "Rosa", "Daniel"]

 function saludarEstudents(estudiantes)
 {
    console.log(`hola ${estudiantes}`);
 }
 
 for(var i=0; i < estudiantes.length; i++)
 {
    console.log(estudiantes[i])
 }

 for(var estudiante of estudiantes)
 {
     saludarEstudents(estudiante);
 }

 ///////
 function saludarEstudents(estudiantes)
 {
    console.log(`hola ${estudiantes}`);
 }
 
 while(estudiantes.length > 0)
 {
     console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudents(estudiante);
 }

  