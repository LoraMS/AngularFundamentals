export class Recipe {
    title: string;
    author: string;
    userId: string;
    category: string;
    createdOn: number;
    description: string;
    ingredients: any;
    steps: string;
    image: string;
    likes?: number;
    userLiked?: any;
    comments?: any;

    constructor(
        title: string, author: string, userId: string, category: string,
        createdOn: number, description: string, ingredients: any, steps: string, image: string,
        likes: number, userLiked: any, comments: any) {
            this.title = title;
            this.author = author;
            this.userId = userId;
            this.category = category;
            this.createdOn = createdOn;
            this.description = description;
            this.ingredients = ingredients;
            this.steps = steps;
            this.image = image;
            this.likes = likes;
            this.userLiked = userLiked;
            this.comments = comments;
    }
}
