import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedR: ActivatedRoute,
                private _heroesService: HeroesService ) {
      this.activatedR.params.subscribe( param => {
      this.heroe = this._heroesService.getHeroe(param['id']);
    });
  }
}
