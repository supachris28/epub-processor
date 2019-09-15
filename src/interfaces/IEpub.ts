import { IManifest } from "./IManifest";
import { IToc } from "./IToc";
import { ICoverExtractor } from "./ICoverExtractor";

export interface IEpub {
    manifest: IManifest;
    toc: IToc;
    coverExtractor: ICoverExtractor;
}