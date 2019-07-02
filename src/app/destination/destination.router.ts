import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationComponent } from './destination.component';
import { DestinationResolver } from './resolvers/destination.resolver';
import { ActivityResolver } from './resolvers/activity.resolver';

const routes = [
	{ path: ':id', component: DestinationComponent, resolve: { destination: DestinationResolver, activities: ActivityResolver }},
] as Routes;

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [
		RouterModule,
	],
})
export class DestinationRoutingModule {}
