import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'personsFilter'})

export class PersonsFilterPipe implements PipeTransform {
    transform(items: any[], criteria: string): any {
        if(criteria === 'all') {return items}
        else return items.filter(item => {
            return item.type === criteria;
        });
    }
} 