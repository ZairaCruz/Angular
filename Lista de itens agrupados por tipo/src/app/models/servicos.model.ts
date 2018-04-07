export class Servicos {

    agendado: boolean;
    codigoServico: string;
    descricao: string;
    celulaResponsavel: string;
    liberado: boolean;

    constructor(agendado: boolean = null,
        codigoServico: string = null,
        descricao: string = null,
        celulaResponsavel: string = null,
        liberado: boolean = null) {
    }
}
