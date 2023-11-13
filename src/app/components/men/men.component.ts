import { Component } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent {
  mens_clothing = [
    { image: "../../../assets/images/men-dress.jpg", description: 'Men 1', title:'Mens Check square Shirt' },
    { image: "../../../assets/images/mens-shoe.jpg", description: 'Men 2', title:'Woodworld Leather Shoe'},
    { image: "../../../assets/images/levis-shoe.jpg", description: 'Men 3', title:'Levis Casual Shoe'},
    { image: "../../../assets/images/men-fashion.jpg", description: 'Men 3', title:'Levis Casual Shoe'},
    { image: "../../../assets/images/yellow casual shirt.jpg", description: 'Men 3', title:'Levis Casual Shoe'}
  ]
}
