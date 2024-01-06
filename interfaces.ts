// neo4j-entities.ts

export interface Post {
    id: string;
    title: string;
    content: string;
    timestamp: string;
    tags: Tag[];
  }
  
  export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    posts: Post[];
    comments: Comment[];
    friends: User[];
  }
  
  export interface Comment {
    id: string;
    content: string;
    timestamp: string;
  }
  
  export interface Tag {
    id: string;
    tagName: string;
  }
  