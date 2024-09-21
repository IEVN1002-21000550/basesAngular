import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf=true, o false

  imageWidth:number=60;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  muestImg():void{
    this.muestraImg=!this.muestraImg
  }
productos:IProductos[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":"febrero 2 2023",
    "Marca":"NISSAN",
    "Color":"Azul",
    "ImagenUrl":"https://th.bing.com/th/id/R.6e61cbff23d37bac659a4ef0fce86495?rik=F9YXBJ11Ymmj6g&pid=ImgRaw&r=0"

  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":"marzo 23 2022",
    "Marca":"AUDI",
    "Color":"Blanco",
    "ImagenUrl":"https://th.bing.com/th/id/R.f7c1cf9df5f4944abacfcf2b47e64c82?rik=4Tk2C0E0dO7IEg&pid=ImgRaw&r=0"

  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"4 puertas",
    "Precio":15000,
    "Year":"septiembre 5 2020",
    "Marca":"KIA",
    "Color":"Azul",
    "ImagenUrl":"https://th.bing.com/th/id/OIP.3ks8xUVABp_cbYx7sksl2gAAAA?rs=1&pid=ImgDetMain"

  }
]
}
