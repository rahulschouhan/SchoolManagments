import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teachersPipe'
})
export class TeachersPipePipe implements PipeTransform {

 transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.lName.toLowerCase().includes(searchText);
    });
   }

}
