import { TestBed } from '@angular/core/testing';

import { PessoalService } from './pessoal.service';

describe('PessoalService', () => {
  let service: PessoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
