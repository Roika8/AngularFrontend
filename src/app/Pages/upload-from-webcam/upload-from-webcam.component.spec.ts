import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFromWebcamComponent } from './upload-from-webcam.component';

describe('UploadFromWebcamComponent', () => {
  let component: UploadFromWebcamComponent;
  let fixture: ComponentFixture<UploadFromWebcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFromWebcamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFromWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
