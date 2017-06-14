import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
    selector: 'dropdown',
    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.css']
})

export class DropdownComponent{
    constructor(private dropDownService : CommonService){}

    dropdown_list = [];
    seletedValue = "Select Your Career Field"
    lists = false;
    selectedClass: boolean;
    optionValue;
    
    showList(){ 
        this.lists == true ? this.lists = false : this.lists = true;
    }

    updateData(e){
        console.log(e);
        console.log(e.target.attributes[1].nodeValue);
        this.seletedValue = e.target.innerText;
        this.lists = false;
    }

    scroll(e: KeyboardEvent){
        e.preventDefault();
        if (e.keyCode === 40) {
            console.log("Down");
        } else if (e.keyCode === 38) {
            console.log("UP");
        } else if(e.keyCode === 27){
            this.lists = false;
        } else return;
    }

    ngOnInit(){
        this.dropDownService.getDropDownList()
            .subscribe(data => this.dropdown_list = data,
            error => console.log("Error : " + error));
    }
 

}