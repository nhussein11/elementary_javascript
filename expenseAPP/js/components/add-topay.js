import Alert from "./alert.js";
export default class AddToPay{
    constructor(){
        this.btn = document.getElementById('add');
        this.title=document.getElementById('title');
        this.description=document.getElementById('description');
        this.value=document.getElementById('value');
        this.date=document.getElementById('date');
        this.alert = new Alert('alert');
    }

    onClick(callback){
        this.btn.onclick = () => {
            if (!title.value  || !description.value || !value.value || !date.value){
                this.alert.show('Title, description, value and date are required');
            }else{
                this.alert.hide();
                callback(this.title.value, this.description.value,this.value.value,this.date.value);
            }
        }
    }
}