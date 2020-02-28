import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string =
    "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";

  somarContador() {
    this.contadorClique++;
  }

  subtrairContador() {
    this.contadorClique--;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

}
