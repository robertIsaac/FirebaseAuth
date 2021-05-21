import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../interface/question';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {

  constructor(private fs: AngularFirestore, private storage: AngularFireStorage) {
  }

  getAllQuestion(): Observable<unknown[]> {
    return this.fs.collection(`questions`).snapshotChanges();
  }

  addNewQuestion(form: Question): void {
    this.fs.collection(`questions`).add(form);
  }
}
