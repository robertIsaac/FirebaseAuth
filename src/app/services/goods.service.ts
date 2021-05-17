import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Goods } from '../interface/goods';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {

  constructor(private fs: AngularFirestore) {
  }
  getAllGoods(): Observable<unknown[]> {
    return this.fs.collection(`goods`).snapshotChanges();
  }
}
