import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFromLocalComponent } from './upload-from-local.component';

describe('UploadFromLocalComponent', () => {
  let component: UploadFromLocalComponent;
  let fixture: ComponentFixture<UploadFromLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFromLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFromLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
