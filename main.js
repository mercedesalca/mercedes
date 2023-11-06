//OBJETO LITERAL
const Mercedes = {
    Nombre : "Mercedes",
    Apellido : "Alca",
    Edad : 20,
    CursosAprobados : ["TPW","DG",],

//CREAMOS UN METODO LLAMADO APROBAR CURSO

    AprobarCurso: function (NuevoCurso){
        this.CursosAprobados.push(NuevoCurso);
    },
}
//Mercedes.cursosAprobados.push("AR");
const Flora = {
    Nombre: "Flora",
    Apellido: "Mamani",
    Edad: 22,
    CursosAprobados: ["TPW","DG",],
    
    //CREAMOS UN METODO LLAMADO APROBARCURSO
    //AprobarCurso: function (NuevoCurso){
        //this.CursosAprobados.push(NuevoCurso);
        //}
    }

//CREAR UN PROTOTIPO A PARTIR DEL OL
function Estudiante(Nombre, Apellido, Edad, CursosAprobados){
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Edad = Edad;
    this.CursosAprobados = CursosAprobados;
}

//prototopo estudiante

Estudiante.prototype.Aprobarcurso=function(NuevoCurso){
    this.cursosAprobados.push(NuevoCurso);
}
//instanciar alex
const alex= new Estudiante(
    "alex",
    "juli",
    30,
    ["Progracion Web","Animacion de Graficos",]
);

//prototipo con sintaxix de las clases
class Estudiante1{
    //RORO: Recibe un objeto y retorna un objeto
    constructor({Nombre, Apellido, Edad, cursosAprobados=[]}){
    //constructor({Nombre, Apellido, Edad, cursosAprobados})
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Edad = Edad;
        this.CursosAprobados = CursosAprobados;
    }
    AprobarCurso(NuevoCurso){
        this.CursosAprobados.push(NuevoCurso);
    }
}

//INSTANCIAR YOSELIN
const Yoselin = new Estudiante1({Nombre:"yoselin",
Apellido:"Manzaneda",Edad:15,});