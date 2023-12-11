import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  public produtos: Produto[]= [];
  
  constructor(private _produtoService : ProdutoService){}
  
  ngOnInit(): void { //ngOnInit Serve para que tudo oque estiver dentro dele seja inicializado junto com o Componente.
    this.listarProdutos();
  }

  listarProdutos(): void{
    this._produtoService.getProdutos().subscribe(
      //Arrow Functions - Função Anônima
      retornaProduto => {
        this.produtos =retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        )
      }
    )
  }
  
}
