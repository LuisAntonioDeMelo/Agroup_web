import { HttpHeaders } from '@angular/common/http';

export const url:string = "http://localhost:5000"; 

export const headers = new HttpHeaders({
    'Content-Type':'Application/json',
    //'Authorization':'Basic dHlsdWlzMjBAZ21haWwuY29tOmx1aXM3NDEw'
})