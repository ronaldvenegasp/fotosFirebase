import { Injectable } from '@angular/core';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  // constructor(private db: AngularFirestore) { }
  constructor() { }

  // cargarImagenesFirebase(imagenes: FileItem[]) {
  //   console.log(imagenes);
  // }

  // private guardarImagen(imagen: { nombre: string, url: string }) {
  //   this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  // }
}
