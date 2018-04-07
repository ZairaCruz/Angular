import { Servicos } from './models/servicos.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  servicos: Servicos[] = [];
  grupoDeServicos: Servicos[] = [];

  constructor() { }

  ngOnInit() {
    this.agrupar(this.getServicos());
  }

  agrupar(servicos: Servicos[]): any[] {
    this.grupoDeServicos = _.chain(servicos).groupBy('celulaResponsavel')
      .toPairs().map(function (currentItem) {
        return _.fromPairs(_.zip(['celulaResponsavel', 'servicos'], currentItem));
      }).value();
    return this.grupoDeServicos;
  }

  getServicos(): Servicos[] {
    this.servicos = [
      {
        agendado: false,
        codigoServico: 'F5',
        descricao: 'Liberar entradas bloqueadas (todos produtos)',
        celulaResponsavel: 'COMPRAS',
        liberado: false
      },
      {
        agendado: true,
        codigoServico: 'F10',
        descricao: 'Recálculo do contas a pagar previsto',
        celulaResponsavel: 'VENDAS',
        liberado: false
      },
      {
        agendado: true,
        codigoServico: 'F9',
        descricao: 'Agendar Fornecedor',
        celulaResponsavel: 'FINANCEIRO',
        liberado: false
      },
      {
        agendado: false,
        codigoServico: 'G5',
        descricao: 'Excluir produto fora de linha e sem estoque (preenche Dt. Exclusão)',
        celulaResponsavel: 'COMPRAS',
        liberado: false
      },
      {
        agendado: false,
        codigoServico: 'Z5',
        descricao: 'Direcionar Títulos Vencidos entre agentes de cobrança',
        celulaResponsavel: 'FINANCEIRO',
        liberado: false
      },
      {
        agendado: false,
        codigoServico: 'F01',
        descricao: 'Consolidação de dados',
        celulaResponsavel: 'VENDAS',
        liberado: false
      },
      {
        agendado: true,
        codigoServico: 'H10',
        descricao: 'Recálculo do contas a pagar previsto',
        celulaResponsavel: 'FISCAL',
        liberado: false
      },
      {
        agendado: true,
        codigoServico: 'G89',
        descricao: 'Agendar Fornecedor',
        celulaResponsavel: 'COMPRAS',
        liberado: false
      },
      {
        agendado: false,
        codigoServico: 'G3',
        descricao: 'Excluir produto',
        celulaResponsavel: 'COMPRAS',
        liberado: false
      },
      {
        agendado: false,
        codigoServico: 'A5',
        descricao: 'Direcionar Títulos',
        celulaResponsavel: 'FINANCEIRO',
        liberado: false
      }
    ];
    return this.servicos;
  }

}

