import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BikeService } from './bike.service';
import { PostService } from './post.service';
import { SessionService } from './session.service';


@NgModule({
	declarations: [],
	imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        BikeService,
        PostService,
        SessionService
    ]
})
export class ServiceModule { }
