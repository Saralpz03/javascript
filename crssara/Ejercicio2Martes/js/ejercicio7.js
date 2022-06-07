const antiguedad = prompt("Escribe tu antiguedad");

switch (true) {
    case antiguedad > 1 && antiguedad < 6:
        document.write("2000€");
        break;
    case antiguedad > 6 && antiguedad < 10:
        document.write("5000€");
        break;
    case antiguedad > 9 && antiguedad < 15:
        document.write("Viaje + 10000€");
        break;
    case antiguedad > 14:
        document.write("Viaje + 10000€");
        break;
    default:
        document.write("Lo siento no tienes incentivo");
}