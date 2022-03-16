import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetalsComponent } from './post-detals.component';

describe('PostDetalsComponent', () => {
  let component: PostDetalsComponent;
  let fixture: ComponentFixture<PostDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
