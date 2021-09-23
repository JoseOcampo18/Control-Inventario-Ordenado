export default class Inventory{

    constructor() {
        this._inventory = new Array();
    }

    add(product){
        if(this.search(product._getCode()) == null && this._inventory.length < 20){
            this._inventory.push(product);
            this._order(this._inventory);            
        }
        else 
            return null;
    }

    delete(code){
        let pos = this._searchPosition(code);
        if(pos > -1){
            for(let i = pos; i < this._inventory.length - 1; i++){
                this._inventory[i] = this._inventory[i + 1];
            }
            this._inventory.pop();
        }
        else{
            return null;
        }
    }

    search(code){
        for(let i = 0; i < this._inventory.length; i++){
            if(code == this._inventory[i]._getCode()){
                return this._inventory[i];
            }
        }
        return null; 
    }

    list(){
        return this._inventory;
    }

    invertList(){
        for(let i = 0, x = this._inventory.length - 1; i < this._inventory.length/2; i++, x--){
            let var1 = this._inventory[i];
            let var2 = this._inventory[x];

            this._inventory[i] = var2;
            this._inventory[x] = var1;
        }
        return this._inventory;
    }

    _searchPosition(code){
        if(this.search(code) != null){
            for(let i = 0; i <= this._inventory.length; i++){
                if(this._inventory[i]._getCode() == code){
                    return i;
                }
            }
        }
        return -1;
    }

    _order(items){
        let length = items.length;  
            for (let i = 0; i < length; i++) { 
                for (let j = 0; j < (length - i - 1); j++) { 
                        if(items[j]._getCode() > items[j+1]._getCode()) {
                                let tmp = items[j]; 
                                items[j] = items[j+1]; 
                                items[j+1] = tmp; 
                    }
                }        
            }
    }
}