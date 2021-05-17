import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../services/goods.service';
import { Goods } from '../../interface/goods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  goods: Goods[] = [];

  constructor(private gs: GoodsService) {
  }

  ngOnInit(): void {
    this.gs.getAllGoods().subscribe(data => {
     this.goods = data.map((element: any) => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        };
      });
    });
  }

}
