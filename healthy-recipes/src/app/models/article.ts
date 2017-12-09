export class Article {
    title: string;
    author: string;
    userId: string;
    createdOn: number;
    description: string;
    image: string;
    comments?: any;

    constructor(
        title: string, author: string, userId: string, createdOn: number, description: string, image: string, comments: any) {
            this.title = title;
            this.author = author;
            this.userId = userId;
            this.createdOn = createdOn;
            this.description = description;
            this.image = image;
            this.comments = comments;
    }
}
