import { TestTask } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestTask.configureTestingModule({});
    service = TestTask.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
