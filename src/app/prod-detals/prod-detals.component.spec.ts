import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetalsComponent } from './prod-detals.component';

describe('ProdDetalsComponent', () => {
  let component: ProdDetalsComponent;
  let fixture: ComponentFixture<ProdDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDetalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
