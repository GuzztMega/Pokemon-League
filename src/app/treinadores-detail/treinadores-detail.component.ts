import { Component, OnInit, Input } from '@angular/core';
import { Treinador } from '@angular/cli/bin/angular-pokemon-league/src/app/treinador';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TreinadorService }  from '@angular/cli/bin/angular-pokemon-league/src/app/treinador.service';

@Component({
  selector: 'app-treinador-detail',
  templateUrl: './treinadores-detail.component.html',
  styleUrls: ['./treinadores-detail.component.css']
})
export class TreinadorDetailComponent implements OnInit {

  @Input() treinador: Treinador;
  
  constructor(
    private location: Location,
    private route: ActivatedRoute, 
      private router: Router, 
        private treinadorService: TreinadorService)
        { this.treinador = new Treinador(); } 


  ngOnInit(): void {
    this.getTrainer()  ;
  }

  getTrainer(): void{
    const id = +this.route.snapshot.paramMap.get('id');    
    this.treinadorService.getTrainer(id)
    .subscribe(treinador => this.treinador = treinador);
  }

  goBack(): any {
    this.treinadorService.updateTreinador(this.treinador).subscribe();
    this.location.back();
  }

}
