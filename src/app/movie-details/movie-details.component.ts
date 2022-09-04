import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/movies.json'
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movies: any = (data as any).default;
  details :any

  constructor(private route: ActivatedRoute , private _location:Location) { 
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id",id);
    console.log(this.movies,"movies");
    this.details = this.movies.filter( (x:any) => x.id == id)
    console.log(this.details);
    
  }

  goBack(){
    this._location.back()
  }

  ngOnInit(): void {
  }

}
