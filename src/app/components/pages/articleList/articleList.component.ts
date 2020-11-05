import { BlogService } from './../blog-two/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog-two/blog';

@Component({
  selector: 'app-article-list',
  templateUrl: './articleList.component.html',
  styleUrls: ['./articleList.component.css'],
})
export class ArticleListComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService
      .getArticles()
      .subscribe((blog) => (this.blogs = blog));
  }
}
