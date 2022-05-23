import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'reverse',
    pure: false
})
export class Reverse implements PipeTransform {
    transform(value: any): any {
        return value.split('').reverse().join('');
    }
}