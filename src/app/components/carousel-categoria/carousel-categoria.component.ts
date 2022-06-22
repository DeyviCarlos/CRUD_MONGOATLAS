import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-categoria',
  templateUrl: './carousel-categoria.component.html',
  styleUrls: ['./carousel-categoria.component.css']
})
export class CarouselCategoriaComponent implements OnInit {

  @Input() categorias:any[] = [];
  //indicadores inferiores
  @Input() indicators = true;
  //flechas de paso
  @Input() controls = true;
  //avance automatico
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; //3 secons

  constructor() { }

  selectedIndex = 0;

  ngOnInit(): void {
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval);
  }
  autoSlideImages(): void{
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number): void{
    this.selectedIndex = index;
  }
  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.categorias.length - 1;
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick(): void{
    if(this.selectedIndex ===  this.categorias.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }

}
