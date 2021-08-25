import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCheckComponent } from './favorite-check.component';

describe('FavoriteCheckComponent', () => {
  let component: FavoriteCheckComponent;
  let fixture: ComponentFixture<FavoriteCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
