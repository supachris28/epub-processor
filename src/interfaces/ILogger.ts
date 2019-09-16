export interface ILogger {
    (content: string, level?: string): void;
}