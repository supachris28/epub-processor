import { IManifest } from '../../interfaces/IManifest';
import { IFile } from '../../interfaces/IFile';

export class Epub2Manifest implements IManifest {
    private spine: string[];
    private rawFile: IFile;

    public constructor(file: IFile) {
        this.spine = [];
        this.rawFile = file;
        this.processOpf();
    }

    private processOpf() {
        // To-do: extract spine from manifest file [this.rawFile]
    }

    public getSpine(): string[] {
        return this.spine;
    }
}