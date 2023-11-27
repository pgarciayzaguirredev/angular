import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { DbzService } from '../dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 1000
  }

  constructor(private dbzService: DbzService) { }
  

  ngOnInit(): void {
  }

  add() {
    console.log(this.nuevo);
    console.log(this.dbzService);
  }

}
