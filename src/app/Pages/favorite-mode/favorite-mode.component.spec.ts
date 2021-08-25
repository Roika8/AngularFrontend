import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteModeComponent } from './favorite-mode.component';

describe('FavoriteModeComponent', () => {
  let component: FavoriteModeComponent;
  let fixture: ComponentFixture<FavoriteModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
