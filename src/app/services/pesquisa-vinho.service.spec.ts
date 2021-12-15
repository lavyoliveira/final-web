import { TestBed } from '@angular/core/testing';

import { PesquisaVinhoService } from './pesquisa-vinho.service';

describe('PesquisaVinhoService', () => {
  let service: PesquisaVinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquisaVinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
