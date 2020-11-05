import { BLOGS } from './mock-blogs';
import { Blog } from './blog';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getArticles(): Observable<Blog[]> {
    const blogs: Blog[] = BLOGS;
    return of(blogs);
  }


  getArticle(key: string): Observable<Blog> {
    const blogs: Blog[] = BLOGS.filter(blog => key === blog.key);
    return of(blogs[0]);
  }
}
