import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  @Input() sender:any
  
  ngOnInit(): void {
    console.log(this.sender,"This is sender from jobComponent");  
}

}
