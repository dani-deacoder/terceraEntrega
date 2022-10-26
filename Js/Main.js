
class Cuenta {
    constructor(titular, tipoInteres) {
        this.numeroCuenta = Math.floor(Math.random() * 10000000000);
        this.titular = new Titular(titular);
        this.saldo = 0;
        this.tipoInteres = tipoInteres;
        this.fechaCreacion = new Date();
    }
    ingresar(cantidad) {
        this.saldo += cantidad;
    }
    retirar(cantidad) {
        this.saldo -= cantidad;
    }
    consultarSaldo() {
        return this.saldo;
    }
    consultarDatos() {
        return this.titular;
    }
    consultarTipoInteres() {
        return this.tipoInteres;
    }
    consultarFechaCreacion() {
        return this.fechaCreacion;
    }
    consultarTitular() {
        return this.titular;
    }
}



class Titular {
    constructor(titular) {
        this.nombre = titular.nombre;
        this.apellidos = titular.apellidos;
        this.dni = titular.dni;
        this.direccion = titular.direccion;
        this.telefono = titular.telefono;
    }
    consultarNombre() {
        return this.nombre;
    }
    consultarApellidos() {
        return this.apellidos;
    }
    consultarDni() {
        return this.dni;
    }
    consultarDireccion() {
        return this.direccion;
    }
    consultarTelefono() {
        return this.telefono;
    }
}

function main() {
    let titular = {
        nombre: "Juan",
        apellidos: "Pérez López",
        dni: "12345678A",
        direccion: "Calle Falsa 123",
        telefono: "987654321"
    };
    let cuenta = new Cuenta(titular, 1.75);
    cuenta.ingresar(1000);
    console.log(cuenta.consultarSaldo());
    cuenta.retirar(500);
    console.log(cuenta.consultarSaldo());
    console.log(cuenta.consultarDatos());
    console.log(cuenta.consultarTipoInteres());
    console.log(cuenta.consultarFechaCreacion());
    console.log(cuenta.consultarTitular());
}

main();



