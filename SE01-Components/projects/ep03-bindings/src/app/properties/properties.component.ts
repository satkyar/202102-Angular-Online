import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent  {
  hideBtn = true

  targetKeyword: string = ""

  swithchBtnState(){
    this.hideBtn = !this.hideBtn
  }

  setKeyword(input: any){
    this.targetKeyword = input.value
    input.value = ""
  }

  backGround = "yellow"
}
