import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Universidad ESAN";
  fullName = "Edson Morales";
  objCurso: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>("https://UESAN2021.edson18100.repl.co")
      .subscribe((data) => {
        console.log(data);
        this.objCurso = data;
      });
  }
}
