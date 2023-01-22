
// obj1 passo 1

const botaoTrailer =  document.querySelector('.botao-trailer');

const video = document.getElementById("video");

const modal = document.querySelector(".modal");

const linkDoVideo = video.src;


function alternarModal() {
    modal.classList.toggle("aberto");

}
botaoTrailer.addEventListener("click", () => {
    alternarModal(); 
   video.setAttribute("src", linkDoVideo);
});
    
//obj2

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    
    alternarModal();
    video.setAttribute("src", "");
});
