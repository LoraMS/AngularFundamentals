export interface RecipeInterface {
    title: string;
    author: string;
    userId: string;
    category: string;
    createdOn: number;
    description: string;
    ingredients: string;
    steps: string;
    image: string;
    likes: number;
    userLiked: Array<string>;
    comments?: any;
}
