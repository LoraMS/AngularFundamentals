export interface RecipeInterface {
    title: string;
    author: string;
    userId: string;
    category: string;
    createdOn: number;
    description: string;
    ingradients: any;
    steps: string;
    image: string;
    likes: number;
    userLiked: Array<string>;
    comments?: any;
}
