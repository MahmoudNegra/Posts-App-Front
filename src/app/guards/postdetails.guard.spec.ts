import { TestBed, async, inject } from '@angular/core/testing';

import { PostdetailsGuard } from './postdetails.guard';

describe('PostdetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostdetailsGuard]
    });
  });

  it('should ...', inject([PostdetailsGuard], (guard: PostdetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
