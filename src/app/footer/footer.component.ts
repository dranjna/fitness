import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showPop :boolean =false
  constructor() { }

  ngOnInit(): void {
  }
  showHide(){
    this.showPop = !this.showPop
  }
}
