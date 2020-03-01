import { Component } from "@angular/core";
import { faHome, faBell,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-navbartwitter",
  templateUrl: "./navbartwitter.component.html",
  styleUrls: ["./navbartwitter.component.css"]
})
export class NavbartwitterComponent {
  faHome = faHome;
  faBell = faBell;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;
}
