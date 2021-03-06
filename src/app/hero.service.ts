import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './heroes-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes() : Observable<Hero[]> {
    
    return of(HEROES);
  }
}