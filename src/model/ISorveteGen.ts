// export default interface ISorvete {
//     tipo?: "Picolé" | "Paleta" | "Moreninha";
//     valor: number;
// }

export default interface ISorveteGen<T> {
    tipo: T;
    valor: number;
}
