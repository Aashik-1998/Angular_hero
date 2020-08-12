import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes-list';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;
  
  hero: Hero = {
    id: 1,
    name: 'Iron Man'
  };

  constructor() { }

  ngOnInit(): void {
    
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
