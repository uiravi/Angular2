import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
    
    transform(searchData:any[], searchValue:string){

        if (!searchValue) return searchData;

        return searchData.filter(function(listItem){
            return listItem.name.toLowerCase().includes(searchValue.toLowerCase());
        })

    }

}