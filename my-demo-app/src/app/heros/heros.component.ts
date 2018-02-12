import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes : Hero[];

  selectedHero : Hero;

  onSelect(hero :Hero) : void {
   this.selectedHero = hero;
  }

  getHeroes() :void {
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService : HeroService) { 
    this.heroes = heroService.getHeroes();
  }

  ngOnInit() {
   this.getHeroes();
  }

}
