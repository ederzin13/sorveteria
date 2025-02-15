import Client from "../model/Cliente"
import Endereco from "../model/Endereco";
import Escola from "../model/Escola";
import Pagamento from "../model/Pagamento";
import Pedido from "../model/Pedido";
import Picoles from "../model/Picoles";

export default class Database {
    private clientes: Client[] = [];
    private escolas: Escola[] = [];
    private enderecos: Endereco[] = [];
    private picoles: Picoles[] = [];
    private pedidos: Pedido[] = [];
    private payment: number[] = [1, 2, 3];

    public addClient(cliente: Client): void {
        this.clientes.push(cliente);
    }

    public addAddress(endereco: Endereco): void {
        this.enderecos.push(endereco);
    }

    public addPopsicle(picole: Picoles): void {
        this.picoles.push(picole);
    }

    public addSchool(escola: Escola): void {
        this.escolas.push(escola);
    }

    public addPedido(pedido: Pedido): void {
        this.pedidos.push(pedido);
    }

    //métodos para listar o conteúdo dos arrays
    public listClients(): void {
        for (let i = 0; i <= this.clientes.length; i++) console.log(this.clientes[i]); 
    }

    public listAddresses(): void {
        for (let i = 0; i <= this.enderecos.length; i++) console.log(this.enderecos[i]);
    }

    public listPopsicles(): void {
        for (let i = 0; i <= this.picoles.length; i++) console.log(this.picoles[i]);
    }

    public listSchools(): void {
        for (let i = 0; i <= this.escolas.length; i++) console.log(this.escolas[i]);
    }

    public listPedidos(): void {
        for (let i = 0; i <= this.pedidos.length; i++) console.log(this.pedidos[i]);
    }

    //

    public payments(paymentId: number): number {
        let payId: number = 0;

        for (let i = 0; i <= this.payment.length; i++) {
            if (i == paymentId) payId = paymentId;
        }

        return payId;
    }
}