export interface BlogRequest {
    title: string;
    text: string;
    author: string;
   
}


export interface BlogResponse extends BlogRequest {
    id: number;
}