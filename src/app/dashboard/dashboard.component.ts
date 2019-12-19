import { Component, OnInit } from '@angular/core';
import { Treinador } from '@angular/cli/bin/angular-pokemon-league/src/app/treinador';
import { TreinadorService } from '@angular/cli/bin/angular-pokemon-league/src/app/treinador.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  treinadores: Treinador[];

  constructor(private treinadorService: TreinadorService) { }

  ngOnInit() {
    this.getTrainers();
  }

  getTrainers(): void {
    this.treinadorService.findAll()
      .subscribe(data => {
        this.treinadores = data.slice(0, 4);
      });
  }
}
