class Persona {
    #nombre;
    #edad;
    #dni;;
    #peso;
    #altura;
    #anioNacimiento;
    #sexo
    constructor(nombre, edad, dni, peso, altura, anioNacimiento, sexo) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNacimiento = anioNacimiento;
        this.#sexo = sexo;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(newNombre) {
        this.#nombre = newNombre;
    }
    get edad() {
        return this.#edad;
    }

    set edad(newEdad) {
        this.#edad = newEdad;
    }

    get dni() {
        return this.#dni;
    }

    set dni(newDni) {
        this.#dni = newDni;
    }

    get peso() {
        return this.#peso;
    }

    set peso(newPeso) {
        this.#peso = newPeso;
    }

    get altura() {
        return this.#altura;
    }

    set altura(newAltura) {
        this.#altura = newAltura;
    }
    get anioNacimiento() {
        return this.#anioNacimiento;
    }

    set anioNacimiento(newAnioNacimiento) {
        this.#anioNacimiento = newAnioNacimiento;
    }

    get sexo() {
        return this.#sexo;
    }

    set sexo(newSexo) {
        this.#sexo = newSexo;
    }

    mostrarGeneracion() {

        let mensaje = '';
        let anio = this.anioNacimiento;
        switch (true) {
            case anio >= 1994 && anio <= 2010:
                mensaje = `------Nombre de la generación: Generación Z------
                    Rasgos característicos: Irreverencia`;
                break;
            case anio >= 1981 && anio <= 1993:
                mensaje = `------Nombre de la generación: Generación Y - Millennials------
                    Rasgos característicos: Frustración`;
                break;
            case anio >= 1969 && anio <= 1980:
                mensaje = `------Nombre de la generación: Generación X------
                    Rasgos característicos: Obseción por el éxito`;
                break;
            case anio >= 1949 && anio <= 1968:
                mensaje = `------Nombre de la generación: Baby Boom------
                    Rasgos característicos: Ambición`;
                break;
            case anio >= 1930 && anio <= 1948:
                mensaje = `------Nombre de la generación: Silent Generation------
                Rasgos característicos: Austeridad`;
                break;

            default:
                mensaje = `No pertenece a ninguna generación`

        }
        return mensaje;
    }
    esMayorDeEdad() {
        console.log('hola')
        if (this.edad >= 18) {
            alert('Es mayor de edad')
        } else {
            alert('Es menor de edad')
        }
    }
    mostrarDatos() {
        document.write('<h2>Datos Personales</h2>')
        document.write(`
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de Nacimientos: ${this.anioNacimiento}</li>
        </ul>
        `);
    }

}

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', capturaDatos);


function capturaDatos(e) {
    e.preventDefault();
    console.log('desde la función adivinar');

    let nombre = document.getElementById('inputNombre').value;


    let edad = parseInt(document.getElementById('inputEdad').value);


    console.log(typeof edad);
    ;

    let dni = document.getElementById('inputDNI').value;


    let peso = parseFloat(document.getElementById('inputPeso').value);


    let altura = parseFloat(document.getElementById('inputAltura').value);

    console.log(typeof altura);

    let anioNacimiento = parseFloat(document.getElementById('inputNacimiento').value);

    let sexo = document.querySelector('input[name="sexo"]:checked').value;

    let datosPersona = new Persona(nombre, edad, dni, peso, altura, anioNacimiento, sexo);
    console.log(datosPersona);

    formulario.reset();
}

let btnMostrarGeneracion = getElementById('btnMostraGeneracion');
btnMostrarGeneracion.addEventListener('submit', generacion);

function generacion(e) {
    e.preventDefault();
    const nombre = document.getElementById('inputNombre').value;
    const anioNacimiento = parseInt(document.getElementById('inputNacimiento').value);

    const persona1 = new Persona(nombre, 0, '', 0, 0, '', anioNacimiento);
    console.log(persona1.anioNacimiento);
    let resultado = persona1.mostrarGeneracion();
    alert(resultado);

}

function esMayor(e) {
    e.preventDefault();
    const nombre = document.getElementById('inputNombre').value;
    const edad = parseInt(document.getElementById('inputEdad').value);

    const persona2 = new Persona(nombre, edad, '', 0, 0, '', 0);
    console.log(edad);
    persona2.esMayorDeEdad(edad);

}
