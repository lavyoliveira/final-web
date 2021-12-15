import { TestBed } from '@angular/core/testing';

import { MeusVinhosService } from './meus-vinhos.service';

describe('MeusVinhosService', () => {
  let service: MeusVinhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeusVinhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
