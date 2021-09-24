export default class Product{

    constructor(code, name, quantity, cost){
        this._code = parseInt(code);
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
        return this._cost;
    }

    _getTotalCost(){
        return this._cost * this._quantity;
    }

}