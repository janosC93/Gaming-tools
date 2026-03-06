
function setLang(lang){

document.querySelectorAll('[data-en]').forEach(el=>{

if(lang==='de'){
el.innerText = el.getAttribute('data-de')
}else{
el.innerText = el.getAttribute('data-en')
}

})

}
