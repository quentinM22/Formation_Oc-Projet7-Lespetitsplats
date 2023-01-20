export class ElementList{
    constructor(domList){
        this.domList = domList
    }
    targetElement(){
        return this.domList.querySelector('.list-container')
    }
    inputElement(input){
        return this.domList.querySelector(input)
    }
}