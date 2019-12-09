import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
