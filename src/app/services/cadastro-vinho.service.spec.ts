import { TestBed } from '@angular/core/testing';

import { CadastroVinhoService } from './cadastro-vinho.service';

describe('CadastroVinhoService', () => {
  let service: CadastroVinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroVinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
