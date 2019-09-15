import { ITocSection } from "./ITocSection";

export interface ITocChapter {
    title: String;
    sections: ITocSection[];
    order: number;
}
