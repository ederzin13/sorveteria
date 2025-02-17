import Router from "./control/Router";
import Client from "./model/Cliente";
import Database from "./db/Database";
import Carrinho from "./model/Carrinho";
import Endereco from "./model/Endereco";
import Pedido from "./model/Pedido";
import Picoles from "./model/Picoles";
import Pagamento from "./model/Pagamento";
import Escola from "./model/Escola";
import Pessoa from "./model/Pessoa";
import PedidoCarrinho from "./model/PedidoCarrinho";
import PedidoScreen from "./view/PedidoScreen";

let router: Router = new Router();

// let dataPedido: Date = new Date("2025-01-01");
// console.log(dataPedido);
// console.log(typeof(dataPedido));

// let janio: Pessoa = new Pessoa();
// janio.setName("Janio");
// janio.setPhone(2312345678);

// let db: Database = new Database();
// db.addClient(janio);

// let pedido: Pedido = new Pedido();
// pedido.setCliente(janio);
// pedido.setData(dataPedido);
// pedido.setQuant(10);
// console.log(pedido);

// let pagamento: Pagamento = new Pagamento(4);

// try {
//     pagamento.qualTipo(4);
// } catch (error: any) {
//     console.log(error);
// }




