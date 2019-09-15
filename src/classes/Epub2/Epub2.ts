import { IEpub } from '../../interfaces/IEpub';
import { IToc } from '../../interfaces/IToc';
import { IDirectory } from '../../interfaces/IDirectory';
import { IManifest } from '../../interfaces/IManifest';
import { Epub2TocNcx } from './epub2TocNcx';
import { Epub2Manifest } from './Epub2Manifest';
import { ICoverExtractor } from '../../interfaces/ICoverExtractor';
import { Epub2CoverExtractor } from './Epub2CoverExtractor';

export class EPub2 implements IEpub {
    public toc: IToc;
    public manifest: IManifest;
    public coverExtractor: ICoverExtractor;

    public constructor(dir: IDirectory) {
        this.manifest = new Epub2Manifest(dir.getFile('opf path')); // To-do: find correct path
        this.toc = new Epub2TocNcx(dir.getFile('ncx path')); // To-do: find correct path
        this.coverExtractor = new Epub2CoverExtractor();
    }
}