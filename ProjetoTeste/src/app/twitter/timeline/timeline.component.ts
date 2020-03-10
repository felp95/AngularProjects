import { Component } from "@angular/core";
import {
  faHeart,
  faEnvelope,
  faComment
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"]
})
export class TimelineComponent {
  faHeart = faHeart;
  faEnvelope = faEnvelope;
  faComment = faComment;
}
