import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFromApiComponent } from './upload-from-api.component';

describe('UploadFromApiComponent', () => {
  let component: UploadFromApiComponent;
  let fixture: ComponentFixture<UploadFromApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFromApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
