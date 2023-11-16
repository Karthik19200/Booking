import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { JobBookingService } from 'src/app/service/job-booking.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:JobBookingService ){}

  @Input() headers:any 

  ngOnInit(): void {
  console.log(this.headers,"This is headers from jobComponent");
  console.log(this.headers.value);
  

}
  


}
