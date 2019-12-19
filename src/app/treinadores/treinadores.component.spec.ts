import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadoresComponent } from './treinadores.component';

describe('TreinadoresComponent', () => {
  let component: TreinadoresComponent;
  let fixture: ComponentFixture<TreinadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
