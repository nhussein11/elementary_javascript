import Alert from "./alert.js";

export default class Modal{
    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.value = document.getElementById('modal-value');
        this.date = document.getElementById('modal-date');
        this.btn= document.getElementById('modal-btn');
        this.paid = document.getElementById('modal-paid');
        this.toPay=null;
        this.alert=new Alert('modal-alert');
    
    }

    setValues(toPay){
        this.toPay=toPay;
        this.title.value=toPay.title;
        this.description.value=toPay.description;
        this.value.value=toPay.value;
        this.date.value=toPay.date;
        this.paid.checked=toPay.paid;
    }

    onClick(callback){
        this.btn.onclick = () => {
            if (!this.title.value  || !this.description.value || !this.value.value || !this.date.value){
                this.alert.show('Title, description, value and date are required');
                return;
            }
            $('#modal').modal('toggle'); 

            callback(this.toPay.id,{
                title: this.title.value,
                description: this.description.value,
                value: this.value.value,
                date: this.date.value,
                paid: this.paid.checked,
            });
        }
    }
}
