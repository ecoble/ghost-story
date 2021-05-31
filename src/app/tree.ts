export interface Tree {
    text: string;
    button_text: string;
    left: Tree;
    right: Tree;
    background_url?: string
}