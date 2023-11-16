import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrls: ['./reciver.component.css']
})

export class ReciverComponent implements OnInit  {
@Input() reciver:any;

ngOnInit(): void {
 console.log(this.reciver,"This is reciver from jobComponent");
}


}
