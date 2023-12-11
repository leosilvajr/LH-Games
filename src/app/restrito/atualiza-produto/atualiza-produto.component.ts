import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit {

public produtoId: number = 0;
public produto: Produto= new Produto(0, "", "", "", 0); 

constructor(
  private _produtoService : ProdutoService, 
  private _router : Router, 
  private _activatedRoute: ActivatedRoute // Função que captura valor dentro do parametro:  ?id=
  ){
    this._activatedRoute.params.subscribe(params => this.produtoId = params['id']); //Procurar o parametro id dentro de Produto
  }
  ngOnInit(): void {
    this.listarProduto();
  }

  listarProduto(): void { //Preencher o formulario de ediçao com o produto selecionado.
    this._produtoService.getProduto(this.produtoId).subscribe(
      (res : any) => { //res é a resposta da requisição
        this.produto = new Produto(
          res[0].id,
          res[0].produto,
          res[0].descricao,
          res[0].foto,
          res[0].preco
        );
      }
    )
  }

  atualizarProduto(id: number){
    this._produtoService.atualizaProduto(id, this.produto).subscribe(
      produto => {this.produto = new Produto(0, "", "", "", 0)},
      err => {alert("Erro ao atualizar.")}
    );
    this._router.navigate(["restrito/lista"])
  }


}
