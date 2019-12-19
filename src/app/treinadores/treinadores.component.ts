import { Component, OnInit } from '@angular/core';
import { Treinador } from '@angular/cli/bin/angular-pokemon-league/src/app/treinador';
import { TreinadorService } from '@angular/cli/bin/angular-pokemon-league/src/app/treinador.service';

@Component({
  selector: 'app-treinadores',
  templateUrl: './treinadores.component.html',
  styleUrls: ['./treinadores.component.css']
})
export class TreinadoresComponent implements OnInit {

  treinadores: Treinador[];

  constructor(private treinadorService: TreinadorService) {
  }
 
  ngOnInit() {
    this.getTrainers();
  }
/*
  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.getTrainers();
  }
*/

add(nome: string): void {
  nome = nome.trim();
  if (!nome) { return; }
  this.treinadorService.addTreinador({ nome } as Treinador)
    .subscribe(treinador => {
      this.treinadores.push(treinador);
    });
}
  
  getTrainers(): void { 
    this.treinadorService.findAll().subscribe(data => {
      this.treinadores = data;
    });
  }

  delete(treinador: Treinador): void {
    this.treinadores = this.treinadores.filter(h => h !== treinador);
    this.treinadorService.deleteTreinador(treinador).subscribe();
  }
  
}
