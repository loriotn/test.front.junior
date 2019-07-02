import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IActivity } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';

@Injectable()
export class ActivityResolver implements Resolve<IActivity> {
	constructor(
		protected activityService: ActivityService,
	) {}
	resolve(route: ActivatedRouteSnapshot) {
		const id = route.paramMap.get('id');
		return this.activityService.getActivityByDestinationId(id);
	}
}
