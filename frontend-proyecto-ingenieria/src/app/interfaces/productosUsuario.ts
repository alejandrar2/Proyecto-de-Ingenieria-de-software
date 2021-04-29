import { ProductoInterface } from "./productos";
import { UsuarioInteface } from "./usuarios";


export interface ProductosUsuario {
    id: Number,
    productoId: Number,
    userId: Number,
    producto: ProductoInterface,
    user: UsuarioInteface
}


