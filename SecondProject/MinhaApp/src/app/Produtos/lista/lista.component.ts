import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto";
import { ProdutoService } from "../produto.service";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      result => {
        this.produtos = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
