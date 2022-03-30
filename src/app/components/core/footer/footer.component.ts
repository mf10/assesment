import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  public currentYear = "";

  constructor() {
    this.getCurrentYear();
  }

  private getCurrentYear(): void {
    const date = new Date();
    const currentYear = date.getFullYear();
    this.currentYear = `${currentYear}`;
  }
}
