import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
  ) {
  }

  get heroes(): Observable<Hero[]> {
    this.messageService.add('fetched HEROES');
    return of(HEROES);
  }
}
