import { NgModule } from '@angular/core';
import { DestinationService } from './services/destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationThumbnailComponent, DestinationGalleryComponent } from './components';
import { DestinationResolver } from './resolvers/destination.resolver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityService } from './services/activity.service';
import { ActivityResolver } from './resolvers/activity.resolver';

@NgModule({
	imports: [
		DestinationRoutingModule,
		CommonModule,
		HttpClientModule,
		ApiModule,
	],
	providers: [
		DestinationService,
		DestinationResolver,
		ActivityService,
		ActivityResolver
	],
	declarations: [
		DestinationComponent,
		DestinationThumbnailComponent,
		DestinationGalleryComponent,
		ActivityComponent,
	],
	exports: [
		DestinationThumbnailComponent,
	]
})
export class DestinationModule {}
