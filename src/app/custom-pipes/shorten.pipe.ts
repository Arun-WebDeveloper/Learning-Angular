import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'customPipe'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number) {
        if (value.length > limit){
            return value.substring(0, 10) + ' ...';
        }
           return value;
    }

}