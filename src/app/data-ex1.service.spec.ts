import { TestBed, inject } from '@angular/core/testing';

import { DataEx1Service } from './data-ex1.service';

describe('DataEx1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataEx1Service]
    });
  });

  it('should be created', inject([DataEx1Service], (service: DataEx1Service) => {
    expect(service).toBeTruthy();
  }));
});
