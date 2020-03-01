import { Component } from "@angular/core";
import { faUserSecret, faHome, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  faUserSecret = faUserSecret;
  faHome = faHome;
  faTimesCircle = faTimesCircle;
}
