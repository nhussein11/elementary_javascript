import Modal from './components/modal.js';
import Filters from './components/filters.js'; 
import AddToPay from './components/add-topay.js';

export default class View{
    constructor(){
        this.model= null;
        this.table= document.getElementById('table');
        this.addToPayForm = new AddToPay();
        this.modal = new Modal();
        this.filters=new Filters();

        this.addToPayForm.onClick((title,description,value,date) => this.addToPay(title, description,value,date));
        this.modal.onClick((id,values)=>this.editToPay(id,values));
        this.filters.onClick((filters)=>this.filter(filters));
    }

    setModel(model){
        this.model=model;
    }

    render(){
        const toPays = this.model.getToPays();
        toPays.forEach((toPay)=>this.createRow(toPay));
    }

    filter(filters){
        const {type, words} = filters;
        const [, ... rows] = this.table.getElementsByTagName('tr');
        
        for (const row of rows){
            const [title,description,value,date,paid]=row.children;
            let shouldHide = false;
            if (words){
                shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words) && !value.innerText.includes(words) && !date.innerText.includes(words)
            }

            const shouldBePayOff = type === 'pay_for';
            const isPaid = paid.children[0].checked;

            if (type !== 'all' && shouldBePayOff !==isPaid){
                shouldHide=true;
            }
            if (shouldHide){
                row.classList.add('d-none');
            }else{
                row.classList.remove('d-none');
            }
        }
    }

    addToPay(title,description,value,date){
        const toPay= this.model.addToPay(title,description,value,date);
        this.createRow(toPay);
    }

    togglePaid(id){
        this.model.togglePaid(id);
    }

    editToPay(id,values){
        this.model.editToPay(id,values);
        const row =document.getElementById(id);
        row.children[0].innerText = values.title;
        row.children[1].innerText = values.description;
        row.children[2].innerText = values.value;
        row.children[3].innerText = values.date;
        row.children[4].children[0].checked  = values.paid;

    }

    removeToPay(id){
        this.model.removeToPay(id);
        document.getElementById(id).remove();
    }

    createRow(toPay){
        const row = table.insertRow();
        row.setAttribute('id',toPay.id);
        row.innerHTML = `
            <td>${toPay.title}</td>
            <td>${toPay.description}</td>
            <td>${toPay.value}</td>
            <td>${toPay.date}</td>
            <td class="text-center">
            </td>
            <td class="text-right">
            </td>
        `;
        const checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.checked=toPay.paid;
        checkbox.onclick = ()=>this.togglePaid(toPay.id);
        row.children[4].appendChild(checkbox);

        const  editBtn  = document.createElement('button');
        editBtn.classList.add('btn','btn-primary','mb-1');
        editBtn.innerHTML='<i class="fa fa-pencil"></i>';
        editBtn.setAttribute('data-toggle','modal');
        editBtn.setAttribute('data-target','#modal');
        editBtn.onclick = () => this.modal.setValues({
            id:toPay.id,
            title: row.children[0].innerText,
            description: row.children[1].innerText,
            value: row.children[2].innerText,
            date: row.children[3].innerHTML,
            paid: row.children[4].children[0].checked,
        });
        row.children[5].appendChild(editBtn);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn','btn-danger','mb-1','ml-1');
        removeBtn.innerHTML='<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeToPay(toPay.id);
        row.children[5].appendChild(removeBtn);
    }
}