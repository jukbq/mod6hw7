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
    private blogservice: BlogService
  ) { }

  public post!: BlogResponse[];


  public title = '';
  public text = '';
  public author = '';
  public addButton = false;
  public editID!: number;
  public imagNum!: number;
  public numImage = '';

  public imgSrc = `/src/app/image/img-${this.imagNum}.jpg`


  ngOnInit(): void {
    this.getPost()
    this.imagrNum()
    console.log(this.numImage);
    
  }


  getPost(): void {
    this.blogservice.getAll().subscribe(data => {
      this.post = data

    })
  }

  clear(): void {
    this.title = '';
    this.text = '';
    this.author = '';

  }

  editPost(post: BlogResponse) {
    this.title = post.title;
    this.text = post.text;
    this.author = post.author;
    this.addButton = true;
    this.editID = post.id;
  }

  editSave() {
    const edit_post = {
      title: this.title,
      text: this.text,
      author: this.author,
      image: this.imgSrc
    }
    this.blogservice.editPost(edit_post, this.editID).subscribe(() => {
      this.getPost()
      this.clear()
      this.addButton = false
    })
  }

  addPOst() {
    const new_post = {
      title: this.title,
      text: this.text,
      author: this.author,
      image: this.imgSrc
    }
    this.blogservice.addPOst(new_post).subscribe(() => {
      this.getPost()
      this.clear()
    })
  }

  imagrNum() {
    let num = Math.floor(Math.random() * 10)
    this.numImage = String(num)
  }

  delPost(index: BlogResponse) {
    if (confirm('Are you sure?')) {
      this.blogservice.delPost(index.id).subscribe(() => {
        this.getPost()
      })
    }
  }


}
