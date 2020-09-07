import { Component, OnInit } from '@angular/core';
import {Project} from '../project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [
    {name: 'Getting Started', location: './getting-started/'},
    {name: 'Tour of Heroes', location: './tour-of-heroes/'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
