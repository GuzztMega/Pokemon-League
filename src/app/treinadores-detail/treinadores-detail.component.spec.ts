import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadorDetailComponent as TreinadoresDetailComponent } from '@angular/cli/bin/angular-pokemon-league/src/app/treinadores-detail/treinadores-detail.component';

describe('TreinadoresDetailComponent', () => {
  let component: TreinadoresDetailComponent;
  let fixture: ComponentFixture<TreinadoresDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinadoresDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinadoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
