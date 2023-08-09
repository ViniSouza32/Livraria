import promptSync from "prompt-sync";
const prompt = promptSync();

let livros: { nome: string; autor: string; qtdePag: string }[] = [];

function cadastroLivros(
  nome: string,
  autor: string,
  qtdePag: string
): { nome: string; autor: string; qtdePag: string } {
  return {
    nome: nome,
    autor: autor,
    qtdePag: qtdePag,
  };
}

function cadastrarLivro () {
livros.push(
        cadastroLivros(
          prompt("Digite o nome do livro"),
          prompt("Digite o autor do livro"),
          prompt("Número de paginas do livro")
        )
      );

      console.log("");
}

function exibirLivro() {
  let livroExibir: string = prompt(
    "Digite o nome do livro que deseja procurar"
  );

  for (let i = 0; i < livros.length; i++) {
    if (livros[i].nome == livroExibir) {
      console.log(livros[i]);
    }
  }

  console.log("");
}

function editarLivro() {
  let livroProcurar: string = prompt(
        "Digite o nome do livro que deseja procurar"
      );

      for (let i = 0; i < livros.length; i++) {
        if (livros[i].nome == livroProcurar) {
          livros[i].nome = prompt("Digite o nome do livro");
          livros[i].autor = prompt("Digite o nome do autor(a)");
          livros[i].qtdePag = prompt("Digite a quantidade de páginas do livro");
        }
      }

      console.log("");
}

function excluirLivro() {
  let livroProcurar2: string = prompt(
    "Digite o nome do livro que deseja excluir"
  );

  for (let i = 0; i < livros.length; i++) {
    if (livros[i].nome == livroProcurar2) {
      livros.splice(i, 1);
    }
  }

  console.log("");
}

function catalogoLivros() {
  for (let i = 0; i < livros.length; i++) {
    console.log(
      "Nome: " +
        livros[i].nome +
        " | Autor: " +
        livros[i].autor +
        " | Páginas: " +
        livros[i].qtdePag
    );
  }
}

let opcao: number = 10;

do {
  console.log(
    "1 - Cadastrar livro\n" +
      "2 - Exibir livro\n" +
      "3 - Editar livro\n" +
      "4 - Excluir livro\n" +
      "5 - Exibir catálogo de livros\n" +
      "0 - Sair\n"
  );

  opcao = Number(prompt(""));

  switch (opcao) {
    case 1:
      cadastrarLivro();
      break;
    case 2:
      exibirLivro();
      break;
    case 3:
      editarLivro();
      break;
    case 4:
      excluirLivro();
      break;
    case 5:
      catalogoLivros();
      break;
    case 0:
      console.log("Tchau! ");
      break;
    default:
      break;
  }
} while (opcao != 0)
