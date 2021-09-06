import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T>{}

/*
Toda classe que aplicar a interface Modelo, irá puxar automaticamente as interfaces Imprimivel e Comparavel. 
 */