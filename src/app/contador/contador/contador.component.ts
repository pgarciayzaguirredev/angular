import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  contador: string = "Contador Caca"
  num: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    return this.num++;
  }

  restar(){
    return this.num--;
  }

}
