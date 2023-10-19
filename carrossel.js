let radio = document.querySelector('.manual-btn')/*aqui chama a navegação manual*/ 
let cont = 1

document.getElementById ('radio1').checked = true/*aqui define o item como verdade,ou seja,sele vai ficar marcado */

setInterval(proximaImg,5000)/*aqui é para passar a imagem depois de um tempo.  */

// let proximaImg2=()=>{
    
// }
function proximaImg(){
    cont++

    if(cont > 5){
        cont = 1
    }

    document.getElementById ('radio'+ cont).checked = true
}



function topo() {/*função para quando clicado no rodape ele volte para o topo da pagina*/ 
    window.scrollTo({ top: 0, behavior: 'smooth' });
}