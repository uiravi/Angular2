import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
    selector: 'custom-dropdown',
    templateUrl: './custom-dropdown.component.html',
    styleUrls: ['./custom-dropdown.component.css']
})

export class CustomDropdownComponent implements OnInit{

    public exampleData: Array<Select2OptionData>;
    public options: Select2Options;
    
    ngOnInit() {
        this.options = {
            minimumResultsForSearch: -1
        }

        this.exampleData = [
            {"id": "0", "text": "Accounting and Finance"},
            {"id": "1", "text": "Administrative Support"},
            {"id": "2", "text": "Architecture"},
            {"id": "3", "text":"Art, Fashion and Design"},
            {"id": "4", "text": "Banking and Financial Services"},
            {"id": "5", "text": "Beauty and Spa"},
            {"id": "6", "text": "Community and Public Service"},
            {"id": "7", "text": "Customer Service"},
            {"id": "8", "text": "Dental"},
            {"id": "9", "text": "Education and Training"},
            {"id": "10", "text": "Engineering"},
            {"id": "11", "text": "Entertainment and Media"},
            {"id": "12", "text": "Fitness and Recreation"},
            {"id": "13", "text": "Food and Beverage"},
            {"id": "14", "text": "Government"},
            {"id": "15", "text": "Human Resources"}
        ];
    }

    



}