import { IFile } from '../../interfaces/IFile';
import { IToc } from '../../interfaces/IToc';
import { ITocChapter } from '../../interfaces/ITocChapter';
import { IDirectory } from '../../interfaces/IDirectory';

export class Epub2TocNcx implements IToc {
  private ncx: IFile;
  private dir: IDirectory;
  private chapters: ITocChapter[];

  public constructor(dir: IDirectory) {
    this.dir = dir;
    this.chapters = [];
  }

  public async initialise(): Promise<void> {
    await this.extractNcx();
    await this.processChapters();
  }

  private async extractNcx(): Promise<void> {
    // To-do: get toc ncx from dir
    
  }

  private async processChapters(): Promise<void> {
    // To-do: process chapters

  }

  public getChapters(): ITocChapter[] {
    return this.chapters;
  }
}