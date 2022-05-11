class Clienta {
  constructor(nombre, telefono, servicio) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.servicio = servicio;
  }
}
const clientas = [];
clientas.push(
  new Clienta(
    prompt("Ingresa nombre"),
    prompt("Ingresa telefono: "),
    "Depilacion"
  )
);
clientas.push(new Clienta("Maria", "4555 - 1855", "Belleza de pies"));
clientas.push(new Clienta("Carolina", "3412 - 4458", "Depilacion"));
clientas.push(new Clienta("Elena", "38546 - 1122", "Cosmetologia"));
clientas.push(new Clienta("Belen", "4784 - 4584", "Manos"));
console.log(clientas);
