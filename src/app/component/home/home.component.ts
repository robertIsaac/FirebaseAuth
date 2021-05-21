import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../services/goods.service';
import { Question } from '../../interface/question';
import firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  question: Question[] = [];

  constructor(private gs: GoodsService, private as: AuthService) {
    this.as.user.subscribe((user) => {
      console.log(user);
    });
  }

  ngOnInit(): void {
    this.gs.getAllQuestion().subscribe(data => {
      this.question = data.map((element: any) => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
      });
    });
  }


}
