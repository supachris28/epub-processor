import { IFile } from '../../interfaces/IFile';
import { IToc } from '../../interfaces/IToc';
import { ITocChapter } from '../../interfaces/ITocChapter';

export class Epub2TocNcx implements IToc {
    private ncx: IFile;
    private chapters: ITocChapter[];

    public constructor(ncx: IFile) {
        this.ncx = ncx;

        this.chapters = [];
        // To-do: process chapters
    }

    public getChapters(): ITocChapter[] {
        return this.chapters;
    }
}