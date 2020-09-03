import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService.heroes
      .subscribe(h => this.heroes = h);
  }

  onSelect(hero: Hero): void {
    if (hero === this.selectedHero) {
      this.selectedHero = null;
      this.messageService.add(`user deselected hero ${hero.name}`);
      return;
    }

    this.selectedHero = hero;
    this.messageService.add(`user selected hero ${hero.name}`);
  }

}
