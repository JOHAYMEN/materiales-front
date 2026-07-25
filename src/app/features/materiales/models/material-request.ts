export interface MaterialRequest {

  nombre: string;

  descripcion: string;

  tipo: string;

  precio: number;

  fechaCompra: string;

  fechaVenta: string | null;

  estado: string;

  ciudadId: number;

}