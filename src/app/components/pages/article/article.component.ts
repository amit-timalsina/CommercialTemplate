import { BlogService } from './../blog-two/blog.service';
import { Blog } from './../blog-two/blog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  blog: Blog = undefined;
  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.blogService.getArticle(key).subscribe(blog => {
        if ( blog === undefined) {
          this.router.navigateByUrl('error');
        }
        this.blog = blog;
      });
    });
  }

}
