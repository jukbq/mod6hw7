export interface BlogRequest {
    title: string;
    text: string;
    author: string;
    image: string;
   
}

export interface BlogResponse extends BlogRequest {
    id: number;
  
}

