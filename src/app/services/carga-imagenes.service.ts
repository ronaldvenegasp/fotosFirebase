import { Injectable } from '@angular/core';
import { FileItem } from '../models/file-item';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  // constructor() { }
  constructor(private db: AngularFirestore) { }

  cargarImagenesFirebase(imagenes: FileItem[]) {
    console.log(imagenes);
  }

  private guardarImagen(imagen: { nombre: string, url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}
