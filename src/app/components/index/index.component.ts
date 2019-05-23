import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

	constructor(public nav: NavBarService) { }

	ngOnInit() {
		this.nav.show();
	}
}
