import Alert from "./alert.js";

export default class Modal{
    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn= document.getElementById('modal-btn');
        this.paid = document.getElementById('modal-paid');
        this.toPay=null;
        this.alert=new Alert('modal-alert');
    
    }

    setValues(toPay){
        this.toPay=toPay;
        this.title.value=toPay.title;
        this.description.value=toPay.description;
        this.paid.checked=toPay.paid;
    }

    onClick(callback){
        this.btn.onclick = () => {
            if (!this.title.value  || !this.description.value){
                this.alert.show('Title and description are required');
                return;
            }
            $('#modal').modal('toggle'); 

            callback(this.toPay.id,{
                title: this.title.value,
                description: this.description.value,
                paid: this.paid.checked,
            });
        }
    }
}
