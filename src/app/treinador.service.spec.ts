import { TestBed } from '@angular/core/testing';

import { TreinadorService as TreinadorService } from '@angular/cli/bin/angular-pokemon-league/src/app/treinador.service';

describe('TreinadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreinadorService = TestBed.get(TreinadorService);
    expect(service).toBeTruthy();
  });
});
