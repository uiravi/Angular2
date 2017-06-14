import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { FilterPipe } from'./search.pipe';

@Component({
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css']
})

export class AutocompleteComponent implements OnInit{
    constructor(private searchService : CommonService){}

    searchData = [];
    clearBtn: Boolean;
    showSearchResult: Boolean;
    searchValue: string;

    onKeyup(e){
        if(this.searchValue == ""){
            this.clearBtn = false;
            this.showSearchResult = false;
        }else{
            this.clearBtn = true;
            this.showSearchResult = true;
        }
    }

    selectResult(e){
        console.log(e.target.innerText);
        this.searchValue = e.target.innerText;
    }

    clearSearch(){
        this.searchValue = "";
        this.showSearchResult = false;
        this.clearBtn = false;
    }

    ngOnInit(){
        this.searchService.getCountriesList()
            .subscribe(data => this.searchData = data);
            //.subscribe(data => console.log(data));
    }

}