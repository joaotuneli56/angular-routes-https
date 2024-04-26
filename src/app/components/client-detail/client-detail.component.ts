import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {

  constructor(private route: ActivatedRoute){
    this.getClientById()
  }
  id?:string;
  getClientById(){
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(this.id);
  }

}
