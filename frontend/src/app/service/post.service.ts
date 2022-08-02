import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';
import { Contato } from '../model/Contato';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }

  getByName(nome: string) {
    return this.http.get('http://localhost:3000/posts?nome=' + nome );
  }

  postMensagem(post: Post) {
    return this.http.post<Post>('http://localhost:3000/posts', post);
  }

  postContato(contato: Contato) {
    return this.http.post<Contato>('https://formsubmit.co/COLOQUE_AQUI_O_TOKEN_OBTIDO_NO_SITE_DO_formsubmit', contato);
  }
}
