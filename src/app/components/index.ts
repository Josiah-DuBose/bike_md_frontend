import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BikeComponent } from './bike/bike.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
	declarations: [
		AboutComponent,
		BikeComponent,
		HomeComponent,
		LoginComponent,
		PostComponent,
		RegisterComponent
	],
	imports: [
		CommonModule
	]
})
export class ComponentModule { }
