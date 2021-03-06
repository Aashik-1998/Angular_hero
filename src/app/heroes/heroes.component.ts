import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../heroes-list';
import {HeroService} from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Iron Man'
  };

  constructor(private heroService : HeroService , private messageService: MessageService) { }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
