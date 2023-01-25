export class ElementList{
    constructor(domList){
        this.domList = domList
    }
    targetElement(){
        return this.domList.querySelector('.list-container')
    }
    inputElement(el){
        return this.domList.querySelector(el)
    }
}