const notaMinima = 6;

///Referencias a elementos HTML
const txtNombre = document.getElementById("txtNombre");
const txtNota1 = document.getElementById("txtNota1");
const txtNota2 = document.getElementById("txtNota2");
const txtNota3 = document.getElementById("txtNota3");
const txtNota4 = document.getElementById("txtNota4");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

//Funcion para calcular el promedio
function calcularPromedio(){
    //obtener los valores del campo
    let nombre = txtNombre.value.trim();

    let nota = parseFloat(txtNota1.value);
    let nota2 = parseFloat(txtNota2.value);
    let nota3 = parseFloat(txtNota3.value);
    let nota4 = parseFloat(txtNota4.value);

    if(nombre == "" || isNaN(nota) || isNaN(nota2) ||  isNaN(nota3) || isNaN(nota4)){

        resultado.innerHTML = `<div class="alert alert-danger">
                            complete todos los campos correctamente
                        </div>`;
                        return; //evita que el codigo siga ejecutandose

    }

    const promedio = (nota + nota2 + nota3 + nota4)/4;

    let estado = promedio >= notaMinima ? "Aprobado": "Reprobado";

    //escojer color de resultado segun si aprobo o no
    let color;
    if (estado == "Aprobado") color = "success";
    else color = "danger";

    //mostrar el resultado
    //inyectamos el codigo dentro del div "resultado"

    resultado.innerHTML = `
     
                            <div class="card border-${color}">
                                <div class="card-header bg-${color} text-white">
                                   Resultado
                                </div>

                                <div class="card-body">
                                    <p>El estudiante ${nombre} tiene un promedio de ${promedio.toFixed(2)} por lo tanto
                                        se encuentra en estado de ${estado}.
                                    </p>
                                </div>
                            </div>
                       
    `;
}    
//agregarmos un Event listener para que el boton ejecute la funcion al recibir clic
    btnCalcular.addEventListener("click", calcularPromedio);
