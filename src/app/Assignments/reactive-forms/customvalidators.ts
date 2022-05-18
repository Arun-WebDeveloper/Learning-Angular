import { FormControl } from "@angular/forms";
import { rejects } from "assert";
import { resolve } from "dns";
import { Observable } from "rxjs";

export class CustomValidators {
    static firstInvalidName(control: FormControl): { [s: string]: boolean }{
        if(control.value === "Test"){
            return{"forbidden":true};
        }else{
            return null;
        }
    }

    static asyncInvalidName(control:FormControl):Promise<any>|Observable<any> {
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value === "Test2"){
                    resolve({"forbidden":true})
                }else{
                    resolve(null);
                }
            },2000)
        });
        return promise;
    }
}