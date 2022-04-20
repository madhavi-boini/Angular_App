import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search2'
})
export class Search2Pipe implements PipeTransform {

  transform(data:any[],searchTerm2:string):any[]
   {
    if(!data||!searchTerm2)
    return data;
    else
    return data.filter(obj=>obj.name.toLowerCase().indexOf(searchTerm2.toLowerCase())!=-1); 
    }

}
