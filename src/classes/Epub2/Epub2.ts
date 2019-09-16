import { IEpub } from '../../interfaces/IEpub';
import { IToc } from '../../interfaces/IToc';
import { IDirectory } from '../../interfaces/IDirectory';
import { Epub2TocNcx } from './epub2TocNcx';
import { Epub2Manifest } from './Epub2Manifest';
import { Epub2CoverExtractor } from './Epub2CoverExtractor';

export class EPub2 implements IEpub {
  public toc: IToc;
  public manifest: Epub2Manifest;
  public coverExtractor: Epub2CoverExtractor;

  public constructor(dir: IDirectory) {
    this.manifest = new Epub2Manifest(dir); // To-do: find correct path
    this.toc = new Epub2TocNcx(dir); // To-do: find correct path
    this.coverExtractor = new Epub2CoverExtractor();
  }

  public async initialise() {
    this.manifest.initialise();
    this.toc.initialise();
  }
}