import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {TvShowsService} from '../../services/tv-shows.service';
import {PeopleService} from '../../services/people.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private movieService:MovieService, 
    private tvService:TvShowsService,
    private peopleService:PeopleService
    ) { }

  movies:any[]= [];
  tvShows:any[]=[];
  people:any[]=[];

  ngOnInit(): void {
    this.getPopularMovies();
    this.getPopularTvShows();
    this.getPopularPeople();

  }

  getPopularMovies():void{
      console.log("In get popular Movies")
    this.movieService.getPopular().subscribe(
      (data:any)=>{
        this.movies = data.results;
        this.movies= this.movies.map((movie)=>{
          const newMovie = {
            title:movie.original_title,
            backdrop:movie.backdrop_path,
            poster:movie.poster_path,
            ratings:movie.vote_average
          }
          return newMovie;
        })
      }
      
    )
  }

  getPopularTvShows():void{
    this.tvService.getPopularTV().subscribe(
      (data:any)=>{
       this.tvShows = data.results.map((tvShow:any)=>{
         const newTvShow = {
           name:tvShow.name,
           poster:tvShow.poster_path,
           ratings:tvShow.vote_average
         }
         return newTvShow;
       })
      })
  }

  getPopularPeople():void{
    this.peopleService.getPeople().subscribe(
      (data:any)=>{
        console.log("person data", data.results)
        this.people = data.results.map((person:any)=>{
          const newPerson = {
            name:person.name,
            poster:person.profile_path,
            ratings:person.popularity
          }
          return newPerson;
        })
      })
    
  }
}
