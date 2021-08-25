import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCheckComponent } from './private-check.component';

describe('PrivateCheckComponent', () => {
  let component: PrivateCheckComponent;
  let fixture: ComponentFixture<PrivateCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
