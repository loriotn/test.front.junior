import { TestBed, inject } from '@angular/core/testing';

import { ActivityService } from './activity.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { marseilleActivity } from './activity.mock.spec';

describe('ActivityService', () => {
  let httpCtrl: HttpTestingController;
  let service: ActivityService;
  beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				ActivityService,
			]
		});
		httpCtrl = TestBed.get(HttpTestingController);
  });
  beforeEach(inject([ActivityService], (_service: ActivityService) => {
		service = _service;
	}));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
	describe('getActivityByDestinationId', () => {
		it('should call http.get', () => {
			const id = '3';

			service.getActivityByDestinationId(id).subscribe(d => d);

			const req = httpCtrl.expectOne(`/api/activities?destinationId=${id}`);
			expect(req.request.method).toEqual('GET');
			req.flush(marseilleActivity);
		});
		it('should return the result unscathed', () => {
			const id = '3';

			service.getActivityByDestinationId(id).subscribe(d => {
				expect(d).toBe(marseilleActivity);
			});

			const req = httpCtrl.expectOne(`/api/activities?destinationId=${id}`);
			req.flush(marseilleActivity);
		});
	});
});
