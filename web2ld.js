function beforesubmit(){
    console.log('inisde function ');
    let inputdat=document.querySelector(".inputdate");
    console.log('input date ',typeof inputdat);
    let outputdat=document.querySelector(".outputdate");
    console.log('input date ',inputdat);

let convertstrtolocaldate=new Date(inputdat.value).toLocaleDateString("en-IN");

outputdat.value=convertstrtolocaldate;

}