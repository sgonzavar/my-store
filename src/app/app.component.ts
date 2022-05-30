import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageParent = '';
  sizeImg:number = 0;
  showImage: boolean = true;



  onLoaded(image: string){
    // console.log('loaded padre', image);
  }

  onSize(size: number){
    this.sizeImg = size;
  }

  toogleImage() {
    this.showImage = !this.showImage;
  }
}
