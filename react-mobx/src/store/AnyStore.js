import {makeAutoObservable} from "mobx";

class AnyStore {
    numb = 23
    constructor() {
        makeAutoObservable(this)
    }
    increase () {
        this.numb += 1
    }
    get nnumb () {
        return this.numb
    }
}
export default new AnyStore