import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    constructor() {

    }

    public debounce = (func, delay) => {
        let tid;
        return () => {
            clearTimeout(tid);
            tid = setTimeout(() => {
                func.apply(this)
            }, delay)
        }
    }

}