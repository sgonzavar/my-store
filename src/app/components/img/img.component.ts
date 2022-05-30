import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  image: string = '';

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>(); //se puede tipar en cualquier tipo de dato
  // @Output() size = new EventEmitter<number>();

  @Input('image') 
  set changeImage(newImage: string){
    this.image = newImage;
    // console.log('change image', this.image);
  }

  imageDefault: string = './assets/image/default.png';
  // counter: number = 0;
  // counterF: undefined | number;
  // counterSetTimeOut: undefined | number;

  constructor() { 
    //BEFORE RENDER 
    //NO ASYNC -- ONCE TIME
    // console.log('constructor', 'imageValue => ', this.image);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //BEFORE - DURING RENDER
    // //CHANGES INPUTS -- MULTIPLES TIMES
    // console.log('ngOnChanges', 'imageValue =>', this.image);
    // console.log(changes);
  }

  ngOnInit(): void {
    //BEFORE  RENDER
    //ASYNC - FETCH -- ONCE TIME
    // console.log('ngOnInit', 'imageValue =>', this.image);
    // this.counterF = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // },1000);

    // this.counterSetTimeOut = window.setTimeout(() => {
    //   console.log('message', this.counter += 2);
    // }, 500);
  }

  ngAfterViewInit(): void {
    //AFTER RENDER
    //HANDLER CHILDREN -- ONCE TIME
    // console.log('ngAfterViewInit', 'imageValue =>', this.image);
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
    // window.clearInterval(this.counterF);
    // window.clearTimeout(this.counterSetTimeOut);
  }

  imageError() {
    this.image = this.imageDefault;
  }

  imageLoaded() {
    // console.log("loaded hijo");
    this.loaded.emit(this.image); // envio de info
    // this.size.emit(this.image.length);  
  }

}
