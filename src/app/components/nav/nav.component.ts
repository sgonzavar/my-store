import { StoreService } from './../../services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu: boolean = false;
  counter: number = 0;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCar$.subscribe (products => {
      this.counter = products.length;
    })
  }

  toogleModal() {
    this.activeMenu = !this.activeMenu;
  }

}
