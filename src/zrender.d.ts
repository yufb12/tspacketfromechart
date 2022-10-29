declare class ZRender {
    dom?: HTMLElement;
    id: number;
    constructor(id: number, dom?: HTMLElement, opts?: ZRenderInitOpt);
    add(el: Element): void;
    remove(el: Element): void;
    getBackgroundColor(): void;
    setDarkMode(darkMode: boolean): void;
    isDarkMode(): void;
    refreshImmediately(fromInside?: boolean): void;
    refresh(): void;
    flush(): void;
    private _flush;
    setSleepAfterStill(stillFramesCount: number): void;
    wakeUp(): void;
    refreshHover(): void;
    refreshHoverImmediately(): void;
    resize(opts?: {
        width?: number | string;
        height?: number | string;
    }): void;
    clearAnimation(): void;
    getWidth(): number;
    getHeight(): number;
    setCursorStyle(cursorStyle: string): void;
    dispose(): void;
}
export interface ZRenderInitOpt {
    renderer?: string;
    devicePixelRatio?: number;
    width?: number | string;
    height?: number | string;
    useDirtyRect?: boolean;
    useCoarsePointer?: 'auto' | boolean;
    pointerSize?: number;
    ssr?: boolean;
}
export declare function init(dom?: HTMLElement | null, opts?: ZRenderInitOpt): ZRender;
export declare function dispose(zr: ZRender): void;
export declare function disposeAll(): void;
export declare const version = "5.4.0";
export interface ZRenderType extends ZRender {
}
export {};
