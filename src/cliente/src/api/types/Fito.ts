export interface Fito {
  fabrica: string;
  fabricante: string;
  formulado: string;
  nombre: string;
  registro: string;
  titular: string;
  cantidad: number;
  precio: number;

  //Campos opcionales
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}