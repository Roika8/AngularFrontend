import { TestBed } from '@angular/core/testing';

import { ImageSetupService } from './image-setup.service';

describe('ImageSetupService', () => {
  let service: ImageSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
