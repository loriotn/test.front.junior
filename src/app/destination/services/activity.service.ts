import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity } from '../models/activity.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(protected http: HttpClient) {}
	getActivityByDestinationId(destinationId: string): Observable<IActivity> {
		return this.http.get<IActivity>(`/api/activities?destinationId=${destinationId}`);
	}
}
