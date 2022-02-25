import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpProvaComponent } from './http-prova.component';

describe('HttpProvaComponent', () => {
  let component: HttpProvaComponent;
  let fixture: ComponentFixture<HttpProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpProvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
