export interface Detalledos {
    detid?: number; // Este campo puede ser opcional dependiendo de la lógica en tu backend
    orden_oid: number;
    producto_pid: number;
    cantidad: number;
    fecha?: string; // Puedes ajustar el tipo de datos según lo que esperas para la fecha
  }
  