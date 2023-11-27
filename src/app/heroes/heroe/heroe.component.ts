import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  name: string = "Ironman";
  age: number = 45;
  power: string = "Pichulón";

  constructor() { }

  ngOnInit(): void {
  }

  changeName(){
    return this.name = "Cacaman";
  }

  changeAge(){
    return this.age = 100;
  }
}
