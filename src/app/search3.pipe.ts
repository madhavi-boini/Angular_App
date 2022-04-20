import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search3'
})
export class Search3Pipe implements PipeTransform {

  transform(data:any[],searchTerm3:string):any[]
   {
    if(!data||!searchTerm3)
    return data;
    else
    return data.filter(obj=>obj.email.toLowerCase().indexOf(searchTerm3.toLowerCase())!=-1); 
    }

}
