import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'sorting',
    pure: false
})
export class Sorting implements PipeTransform {
    transform(value: any, string: any): any {
        return value.sort((a, b) => {
            if (a[string] > b[string]) {
                return 1;
            } else {
                return -1;
            }
        });
    }
}