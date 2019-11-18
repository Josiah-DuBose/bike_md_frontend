import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class NavBarService {
	visible: Boolean = false;

	constructor() { }

	show() { this.visible = true; }
}
