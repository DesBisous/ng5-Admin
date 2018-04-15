import { TestBed, inject } from '@angular/core/testing';

import { FormValidatorsService } from './form-validators.service';

describe('FormValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormValidatorsService]
    });
  });

  it('should be created', inject([FormValidatorsService], (service: FormValidatorsService) => {
    expect(service).toBeTruthy();
  }));
});
