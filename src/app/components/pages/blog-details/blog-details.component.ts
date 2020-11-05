import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from './../blog-two/blog.service';
import { Blog } from './../blog-two/blog';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
    blog: Blog = undefined;
    constructor(
        private blogService: BlogService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const key = params.key;
            this.blogService.getArticle(key).subscribe((blog) => {
                this.blog = blog;
            });
        });
    }
}
