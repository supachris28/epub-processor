import { ITocChapter } from "./ITocCHapter";

export interface IToc {
    getChapters(): ITocChapter[];
}