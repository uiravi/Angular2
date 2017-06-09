import {Component} from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    constructor(private headerService: CommonService){}

    headerMenuList: any[];
    dpContainer: boolean = false;

    toggleMenu(){
        this.dpContainer == true ? this.dpContainer = false : this.dpContainer = true;
    }

    headerMenu(){
        this.dpContainer = false;
    }

    ngOnInit(){
        this.headerService.getHeaderMenu()
            .subscribe(data => this.headerMenuList = data.headerMenu);
    }


    
}