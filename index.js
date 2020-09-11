const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORTA = 8080;

const lanches = [
  {id: 1,
  nome: 'pastel',
  descricao: 'pastel de queijo',
  estoque: 10,
  image: 'https://erpuploads.nuvem3.com.br/Empresa/34/Produtos/44674/grd_pastel-de-queijo-41b7538772894bf680dcc9ab4c4592a1.jpg',
  categoria: 'salgado'},

  {id: 2,
  nome: 'coxinha',
  descricao: 'coxinha de frango com catupiry',
  estoque: 15,
  image: 'https://cdn.awsli.com.br/600x450/1336/1336442/produto/54141611/8770c53a9d.jpg',
  categoria: 'salgado'},

  {id: 3,
  nome: 'caldo de cana',
  descricao: 'copo de caldo de cana 500ml',
  estoque: 30,
  image: 'https://blog.guadaim.com.br/wp-content/uploads/2018/04/193088-3-receitas-com-caldo-de-cana-que-voce-precisa-conhecer-810x540.jpg',
  categoria: 'bebida'}
];

app.use(bodyParser.json());

app.get("/lanches", (req, res) => {

  // const { q } = req.query;
  // res.send(lanches.filter(lanche => lanche.nome.includes(q)));

  res.json({Lanches: lanches})

})

// app.get("/lanches/:id", (req, res) => {
//   const id = req.params.id;

//   // busca item do array por id
//   const item = items.find(pam => pam.id == id);
  
//   if(item) {
//       res.send(item);
//   } else {
//       res.sendStatus(404);
//   }
// });

// inicializa servidor http na porta PORTA
app.listen(8080, () => {
  console.log(`Servidor ouvindo na porta ${PORTA}`);
});
