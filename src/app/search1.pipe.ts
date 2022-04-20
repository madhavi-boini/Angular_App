import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search1'
})
export class Search1Pipe implements PipeTransform {

  transform(data:any[],searchTerm1:number):any[]
   {
    if(!data||!searchTerm1)
    return data;
    else
    return data.filter(obj=>obj.id==searchTerm1);  
    }
}