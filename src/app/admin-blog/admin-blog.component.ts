import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogComponent } from '../blog/blog.component';
import { BlogResponse } from '../shared/interfaces/blog';


import { BlogService } from '../shared/services/blog.service';


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  constructor(
  private bloservice: BlogService
  ) { }

  public post!: BlogResponse[];


  public title = '';
  public text = '';
  public author = '';

  ngOnInit(): void {

  }

  clear(){
    this.title = '';
    this.text = '';
    this.author = '';

  }

addPOst(){
  const new_post = {
    title: this.title,
  text: this.text,
  author: this.author
   }
this.bloservice.addPOst(new_post).subscribe(() =>{
  this.getPost()
  this.clear()
  
})

}


  getPost(): void {
    this.bloservice.getAll().subscribe(data => {
     this.post = data
   
      
    })
  }

}
