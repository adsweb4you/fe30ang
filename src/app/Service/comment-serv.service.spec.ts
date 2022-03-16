import { TestBed } from '@angular/core/testing';

import { CommentServService } from './comment-serv.service';

describe('CommentServService', () => {
  let service: CommentServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
