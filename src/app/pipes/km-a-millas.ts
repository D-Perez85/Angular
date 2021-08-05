import {Pipe, PipeTransform} from '@angular/core'; 

@Pipe({ name: 'kmAMillaPipe'})
export class kmAMillaPipe implements PipeTransform{
    transform(value:number) : number {
        const kilometersPerMille =  1.60934343; 
        if(!isNaN(value)){
            return value / kilometersPerMille; 
        }
        return null; 
    }
}


