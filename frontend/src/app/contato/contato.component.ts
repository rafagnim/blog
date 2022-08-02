import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Contato } from '../model/Contato';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  name!: string;
  email!: string;
  message!: string;
  contato!: Contato;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  cadastrarContato() {
    this.contato = new Contato(this.name, this.email, this.message);
    console.log(this.contato);
    this.postService.postContato(this.contato).subscribe((data => {
      console.log(data);
    }))
  }
}
