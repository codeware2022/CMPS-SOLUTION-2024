import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { GetOurProductById } from './product-profile.resolver';

describe('GetOurProductById', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => GetOurProductById(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
