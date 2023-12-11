import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit{
  public produtos: Produto[]= [];

  constructor(
    private _produtoService : ProdutoService, 
    private _router: Router,
    private _loginService : LoginService
    ){}

  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostraMenu(false);
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

  excluir(id: number) {
    this._produtoService.removerProduto(id).subscribe( //subscribe para atualizar na API
      produto => {
        this.listarProdutos(); // Se der certo a remoçao ele lista novamente os produtos atualizado.
      },
      err => {alert("Erro ao excluir.")}
    );
      this._router.navigate(['/restrito/lista'])
  }

}
