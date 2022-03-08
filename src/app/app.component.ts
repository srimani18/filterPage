import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  books: any;
  book: any;
  chapters: any;
  chapter: any;
  movies: any;
  movie: any;
  characters: any;
  character: any;
  quotes: any;
  quote: any;

  selectedBook: any;
  selectedChapter: any;
  selectedMovie: any;
  selectedCharacter: any;
  selectedQuote: any;
  bookName: any;
  chapterName: any;
  movieName: any;
  hasCharacters: boolean;
  hasQuotes: any;
  characterName: any;
  quoteName: any;
  id: string;

  constructor(private title: Title, private service: AppService) { }
  ngOnInit(): void {
    this.title.setTitle('Lord of the rings');
    this.getBooks();
    this.getMovies();
  }

  getBooks() {
    this.service.getBooks().subscribe(data => {
      this.books = data;
      this.book = this.books.message.docs;
    });
  }

  getMovies() {
    this.service.getMovies().subscribe(data => {
      this.movies = data;
      this.movie = this.movies.message.docs;
    });

  }

  getQuotes() {
    this.service.getQuotes().subscribe(data => {
      this.quotes = data;
      this.quote = this.quotes.message.docs;
    });
  }

  getCharacters() {
    this.service.getCharacters().subscribe(data => {
      this.characters = data;
      this.character = this.characters.message.docs;
      console.log(this.character);
    });
  }

  changeBook(bookId: any): void {
    this.service.getBook(bookId.target.value).subscribe(data => {
      this.selectedBook = data.message.docs[0].name;
      if(this.selectedBook){
        this.service.getAllChaptersByBookID(bookId.target.value).subscribe(chapters => {
          this.chapter = chapters.message.docs;
        });
      }
        
    });
  }

  changeMovie(MovieById: any) {
    this.service.getMovieById(MovieById.target.value).subscribe(movieId => {
      const movieData = movieId;
      this.movieName = movieData.message.docs[0].name;
        this.service.getAllQuotesByMovieId(MovieById.target.value).subscribe(movieQuote => {
          this.quote = movieQuote.message.docs;
        });
    });
  }

  changeChapter(event: any) {
    console.log(event.target.value, this.selectedChapter);
  }
}
