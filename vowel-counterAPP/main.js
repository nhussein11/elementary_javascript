const input = document.querySelector('input')
const countButton = document.getElementById('count')
const cleanButton = document.getElementById('clean')
const vowels = ['a','e','i','o','u']

var vowels_presents = [];
var consonants_presents = [];

countButton.addEventListener('click',(e)=>{
    var text = input.value;
    if (text!=""){
        var count=0;
        text=text.replace(/\s/g,'');
        text.split('').filter(function(e){return e!='';}).forEach(function(c){
            if (vowels.includes(c)){
                count++;
                vowels_presents.push(c.toUpperCase())
            }else{consonants_presents.push(c.toUpperCase())}
        })
        
        document.getElementById("vowels").textContent="You have "+count+" vowels";
        document.getElementById("vowels_p").textContent="Your vowels: "+[... new Set(vowels_presents)];
    
        const consonants = text.length - count;
        document.getElementById("consonants").textContent="You have "+consonants+" consonants";
        document.getElementById("consonants_p").textContent="Your consonants: "+[... new Set(consonants_presents)];
    }else{alert("Empty input!")}
    
})

cleanButton.addEventListener('click',(e)=>{
    input.value="";
    document.getElementById("vowels").textContent="You have 0 vowels";
    document.getElementById("vowels_p").textContent="";
    document.getElementById("consonants").textContent="You have 0 consonants";
    document.getElementById("consonants_p").textContent="";
    window.vowels_presents=[];
    window.consonants_presents=[];
})