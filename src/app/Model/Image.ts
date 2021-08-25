import { Categorie as Category } from "./Category";
export class Image {
    id?: string
    title: string;
    location?: number[];
    isPrivate: boolean;
    isFavorite: boolean;
    description?: string;
    imageUrl: string;
    category: Category[];
    constructor(title: string, isPrivate: boolean, isFavorite: boolean, imageUrl: string, category: Category[], description?: string, location?: number[], id?: string) {
        this.id = id;
        this.isPrivate = isPrivate;
        this.isFavorite = isFavorite;
        this.title = title;
        this.imageUrl = imageUrl;
        this.location = location;
        this.description = description;
        this.category = category;

    }
}