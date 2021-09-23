export default class Product{

    constructor(code, name, quantity, cost){
        this._code = code;
        this._name = name;
        this._quantity = quantity;
        this._cost = cost;
    }

    _getCode(){
        return this._code;
    }

    _getName(){
        return this._name;
    }

    _getQuantity(){
        return this._quantity;
    }

    _getCost(){
        return this.cost;
    }

    _getTotalCost(){
        return this.cost * this._quantity;
    }

}