import { Component } from '@angular/core'
import { CommonService } from '../../common.service';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class Dashboard{
    constructor(private dashboardService: CommonService){}
    
    dashboardMenus: any[];

     ngOnInit(){
        this.dashboardService.getHeaderMenu()
            .subscribe(data => this.dashboardMenus = data.headerMenu);
    }



}