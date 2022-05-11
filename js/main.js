/*function turno(dia, hora) {
  this.dia = dia;
  this.hora = hora;

  this.hablar = () => {
    console.log(
      "Tu turno queda asi: " +
        "" +
        this.dia +
        "" +
        ", a las " +
        "" +
        this.hora +
        "" +
        "hs."
    );
  };
}*/

class Clienta {
  constructor(nombre, telefono, servicio, abonada) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.servicio = servicio;
    this.abonada = abonada;
  }
}
const clientas = [];
clientas.push(
  new Clienta(
    prompt("Ingresa nombre"),
    prompt("Ingresa telefono: "),
    "Depilacion",
    false
  )
);
clientas.push(new Clienta("Maria", "4555 - 1855", "Belleza de pies", false));
clientas.push(new Clienta("Carolina", "3412 - 4458", "Depilacion", true));
clientas.push(new Clienta("Elena", "38546 - 1122", "Cosmetologia", false));
clientas.push(new Clienta("Belen", "4784 - 4584", "Manos", false));
console.log(clientas);
