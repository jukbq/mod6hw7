import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BlogResponse } from '../shared/interfaces/blog';
import { BlogService } from '../shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private blogservice: BlogService
  ) { }

  public post!: BlogResponse[];
 
 

  ngOnInit(): void {
    this.getPost()
  
  }

  getPost(): void {
    this.blogservice.getAll().subscribe(data => {
      this.post = data
 
    })
  }

/*   imagrNum(){
   let num = Math.floor(Math.random() * 10)
    this.numImage = num
   
  } */

}
