const personagens = [
  {
    nome: "Dragon ball",
    descricao: "Uma saga lendária que atravessa gerações. 'Dragon Ball' acompanha Goku desde sua infância até se tornar um guerreiro incomparável, enfrentando inimigos cada vez mais poderosos e desafiando os limites do impossível.",
    imagemDesktop: "src/imagens/DRAGONBALL-DESKTOP.jpg",
    imagemMobile: "src/imagens/DRAGONBALL-MOBILE.jpg"
  },
  {
    nome: "Jujutsu kaisen",
    descricao: "Em um mundo onde maldições aterrorizam a humanidade, Yuji Itadori, seu sensei e seus amigos mergulham em batalhas sombrias para proteger os inocentes — mesmo que isso custe suas próprias almas.",
    imagemDesktop: "src/imagens/JUJUTSUKAISEN-DESKTOP.jpg",
    imagemMobile: "src/imagens/JUJUTSUKAISEN-MOBILE.jpg"
  },
  {
    nome: "Tokyo ghoul",
    descricao: "Tóquio é palco de uma guerra silenciosa entre humanos e ghouls — criaturas que só podem sobreviver se alimentando de carne humana. Quando Kaneki se torna meio-ghoul, ele se vê dividido entre dois mundos em conflito.",
    imagemDesktop: "src/imagens/TOKYOGHOUL-DESKTOP.jpg",
    imagemMobile: "src/imagens/TOKYOGHOUL-MOBILE.jpg"
  },
  {
    nome: "Atack on titan",
    descricao: "Cercados por muralhas e assombrados por Titãs gigantes devoradores de humanos, Eren Yeager e seus amigos juram destruir cada um deles. Mas o verdadeiro inimigo pode estar mais perto do que eles imaginam...",
    imagemDesktop: "src/imagens/ATACKONTITAN-DESKTOP.jpg",
    imagemMobile: "src/imagens/ATACKONTITAN-MOBILE.jpg"
  },
  {
    nome: "Naruto",
    descricao: "Naruto Uzumaki é um ninja órfão e cheio de energia, ignorado por todos por carregar uma fera dentro de si. Mas com coragem e determinação, ele transforma dor em força e conquista o coração de seus companheiros e inimigos.",
    imagemDesktop: "src/imagens/NARUTO-DESKTOP.jpg",
    imagemMobile: "src/imagens/NARUTO-MOBILE.jpg"
  },
  {
    nome: "Solo leveling",
    descricao: "Sung Jin-Woo era apenas um caçador de nível E, considerado o mais fraco de todos. Mas após sobreviver a uma missão mortal, ele desperta uma habilidade única: a capacidade de se tornar mais forte sem limites. Em um mundo onde monstros invadem a Terra, ele embarca em uma jornada solitária rumo ao topo, enfrentando inimigos cada vez mais poderosos — e descobrindo verdades sombrias que podem mudar tudo.",
    imagemDesktop: "src/imagens/SOLOLEVELING-DESKTOP.jpg",
    imagemMobile: "src/imagens/SOLOLEVELING-MOBILE.jpg"
  },
   
];

function trocarPersonagem(indice) {
  const personagem = personagens[indice];
  const imagem = document.getElementById("imagem-personagem");
  const imagemSource = document.querySelector("picture > source");
  const nome = document.getElementById("nome");
  const descricao = document.getElementById("descricao");

  if (!imagem || !imagemSource || !nome || !descricao) return;

  // Aplica fade-out antes de trocar a imagem
  imagem.style.opacity = 0;

  // Aguarda a transição antes de trocar o conteúdo
  setTimeout(() => {
  imagem.src = personagem.imagemMobile;
  imagem.alt = personagem.nome;
  imagemSource.srcset = personagem.imagemDesktop;

  imagem.classList.add("fade");
  imagem.style.opacity = 1;
}, 200);


   // Atualiza os textos
  nome.textContent = personagem.nome;
  descricao.textContent = personagem.descricao;

  // Atualiza o título da aba
  document.title = `Personagem - ${personagem.nome}`;

  // Atualiza os botões
  document.querySelectorAll(".botao").forEach(btn => btn.classList.remove("selecionado"));
  document.querySelectorAll(".botao")[indice].classList.add("selecionado");

  // Remove o efeito após a animação
  setTimeout(() => imagem.classList.remove("fade"), 600);

  
}
