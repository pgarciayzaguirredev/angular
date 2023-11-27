import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Batman', 'Superman', 'Thor'];
  deleteHeroe: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  deleteHero() {
    console.log('Borrando...');
    this.deleteHeroe = this.heroes.shift();
    console.log(this.deleteHeroe);
    console.log(this.heroes);
  }

}
