import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post }from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPosts!: Post[];
  post: Post = new Post;

  nome!: string;
  listPostsName!: Post[];
  escondeNome: boolean = true;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts(): any {
    this.postService.getPosts().subscribe((data: any) => {
      this.listPosts = data;
    });
  }

  cadastrarMensagem() {
    this.postService.postMensagem(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign('/feed');
    })
  }

  pesquisarNome() {
    this.postService.getByName(this.nome).subscribe((data: any) => {
      this.listPostsName = data;
      this.escondeNome = false;
    })
  }
}
