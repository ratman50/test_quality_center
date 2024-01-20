export abstract class AbsctractEntity<T>{
    constructor(entity: Partial<T>){
        Object.assign(this, entity);
    }
}