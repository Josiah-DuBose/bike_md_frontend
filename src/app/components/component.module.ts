import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

@NgModule({
	declarations: [
		IndexComponent,
		LoginComponent,
		RegisterComponent,
		AboutComponent
	],
	imports: [
		CommonModule
	]
})
export class ComponentModule { }
