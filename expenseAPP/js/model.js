export default class Model{
    constructor(){
        this.view=null;
        this.toPays=JSON.parse(localStorage.getItem('toPays'));
        if(!this.toPays || this.toPays.length<1){
            this.toPays=[
                {
                    id:0,
                    title:'Test Tittle',
                    description:'Test Description',
                    value: Math.floor(Math.random()*(10000-1+1)+1),
                    date: new Date().toISOString().slice(0, 10),
                    paid:false,
                }
            ]
            this.currentId=1;
        }else{
            this.currentId=this.toPays[this.toPays.length - 1].id + 1 ;
        }
        
    }

    setView(view){
        this.view = view;
    }

    save(){
        localStorage.setItem('toPays',JSON.stringify(this.toPays));
    }

    getToPays(){
        return this.toPays.map((toPay)=>({... toPay})) ;
    }

    findToPay(id){
        return this.toPays.findIndex((toPay)=>toPay.id===id);
    }
    
    togglePaid(id){   
        const index =this.findToPay(id);
        const toPay = this.toPays[index];
        toPay.paid = !toPay.paid;
        this.save();
    }
    
    editToPay(id,values){
        const index = this.findToPay(id);
        Object.assign(this.toPays[index],values);
        this.save(); 

    }

    addToPay(title,description,value,date){
        const toPay = {
            id: this.currentId++,
            title,
            description,
            value,
            date,
            paid: false,
        }

        this.toPays.push(toPay);
        console.log(this.toPays);

        this.save();
        return {... toPay}; 
    }

    removeToPay(id){
        const index = this.findToPay(id);
        this.toPays.splice(index,1)
        this.save();
    }}