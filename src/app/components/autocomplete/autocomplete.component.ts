import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
    selector: 'autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css']
})

export class AutocompleteComponent{
    showClear: boolean = false;

    private searchStr: string;
    private dataService: CompleterData;
    private searchData = []
    
    clearSearch(){
        this.searchStr = "";
        this.showClear = false;
    }

    onKeyup(e){
        this.searchStr == "" ? this.showClear = false : this.showClear = true;
    }

    ngOnInit(){
        this.searchService.getSearchData()
            .subscribe(data => {
                this.searchData = data.searchData;
                console.log(this.searchData);
                this.dataService = this.completerService.local(this.searchData);
            });
    }

    constructor(private searchService: CommonService, private completerService: CompleterService){}
}