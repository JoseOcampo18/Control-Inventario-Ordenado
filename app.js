import Inventory from "./inventory.js";
import Product from "./product.js";

class App{
    constructor(){
        this._inventory = new Inventory();

        let btnAdd = document.getElementById('btnAdd');
        btnAdd.addEventListener('click',this._addProduct);

        let btnDelete = document.getElementById('btnDelete');
        btnDelete.addEventListener('click',this._deleteProduct);

        let btnFind = document.getElementById('btnSearch');
        btnFind.addEventListener('click',this._findProduct);

        let btnList = document.getElementById('btnList');
        btnList.addEventListener('click',this._listProduct);

        let btnInvert = document.getElementById('btnInvertList');
        btnInvert.addEventListener('click',this._invertProduct);
    }

    _addProduct = () => {
        let code = document.getElementById('txtCode').value; 
        let name = document.getElementById('txtName').value; 
        let quantity = document.getElementById('txtQuantity').value; 
        let cost = document.getElementById('txtCost').value;

        let product = new Product(code, name, quantity, cost);
        this._inventory.add(product);
        console.log(this._inventory);
    }

    _deleteProduct = () => {
        let code = document.getElementById('txtCode').value; 

        this._inventory.delete(code);
    }

    _findProduct = () => {
        let code = document.getElementById('txtCode').value; 

        this._inventory.search(code);
    }

    _listProduct = () => {
        console.log(this._inventory.list());
    }

    _invertProduct = () => {
        console.log(this._inventory.invertList());
    }


}

new App();