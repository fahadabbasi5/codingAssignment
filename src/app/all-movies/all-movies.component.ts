import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/movies.json'

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  movies: any = (data as any).default;
  searchText :any

  constructor() { }

  ngOnInit(): void {
    console.log("data", this.movies);
    
  }

}
