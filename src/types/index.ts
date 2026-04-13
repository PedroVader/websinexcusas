export interface Municipio {
  slug: string;
  nombre: string;
  comarca: string;
  poblacion: string;
  cp: string;
  datoLocal: string;
  negociosTipicos: string;
  distanciaBcn: string;
  municipiosCercanos: string[];
  excusaLocal: string;
  historia: string;
  zonaComercial: string;
  barrios: string[];
  sectoresDestacados: { sector: string; detalle: string }[];
  problemaDigital: string;
  casoExito: {
    negocio: string;
    sector: string;
    problema: string;
    solucion: string;
    resultado: string;
  };
  estadisticas: {
    comerciosOnline: string;
    busquedasMensuales: string;
    competidoresDigitales: string;
  };
  testimonioLocal: {
    nombre: string;
    negocio: string;
    texto: string;
  };
  ventajasLocales: string[];
  faqsUnicas: { pregunta: string; respuesta: string }[];
  contenidoSEO: {
    titulo: string;
    parrafos: string[];
  };
}

export interface Servicio {
  slug: string;
  nombre: string;
  descripcion: string;
  descripcionCorta: string;
  icono: string;
  precioDesde: string;
  caracteristicas: string[];
}

export interface PlanPrecio {
  nombre: string;
  precio: string;
  periodo?: string;
  descripcion: string;
  caracteristicas: string[];
  destacado?: boolean;
  cta: string;
}

export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export interface ProyectoPortfolio {
  titulo: string;
  descripcion: string;
  sector: string;
  municipio: string;
  url?: string;
  resultados: string;
}

export interface FormContactoState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export interface FormPresupuestoState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}