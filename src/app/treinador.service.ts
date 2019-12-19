import { Injectable } from '@angular/core';
import { Treinador } from '@angular/cli/bin/angular-pokemon-league/src/app/treinador';
//import { TREINADORES } from '@angular/cli/bin/angular-pokemon-league/src/app/mock-treinadores';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '@angular/cli/bin/angular-pokemon-league/src/app/message.service'
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})  
export class TreinadorService {
  
  private treinadorUrl: string = "http://localhost:8080/treinador";

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  public findAll(): Observable<Treinador[]> {
    return this.http.get<Treinador[]>(this.treinadorUrl );
  }

  public getTrainer(id: number): Observable<Treinador> {
    return this.http.get<Treinador>(this.treinadorUrl + `/${id}`);
  }

  updateTreinador (treinador: Treinador): Observable<any> {
    return this.http.put(this.treinadorUrl, treinador, this.httpOptions).pipe(
      tap(_ => this.log(`updated treinador id=${treinador.id}`)),
      catchError(this.handleError<any>('updateTreinador'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteTreinador (treinador: Treinador | number): Observable<Treinador> {
    const id = typeof treinador === 'number' ? treinador : treinador.id;
    const url = `${this.treinadorUrl}/${id}`;

    return this.http.delete<Treinador>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Treinador>('deleteTreinador'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };   
  }

  /** POST: add a new hero to the server */
  addTreinador (treinador: Treinador): Observable<Treinador> {
    return this.http.post<Treinador>(this.treinadorUrl, treinador, this.httpOptions).pipe(
      tap((newTreinador: Treinador) => this.log(`added treinador w/ id=${newTreinador.id}`)),
      catchError(this.handleError<Treinador>('addTreinador'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
