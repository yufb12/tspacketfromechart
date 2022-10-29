
 
function delInstance(id: number) {
 
}

 
class ZRender {
    /**
     * Not necessary if using SSR painter like svg-ssr
     */
    dom?: HTMLElement

    id: number
 
    constructor(id: number, dom?: HTMLElement, opts?: ZRenderInitOpt) {
        opts = opts || {};

        /**
         * @type {HTMLDomElement}
         */
        this.dom = dom;

        this.id = id;

 
 
    }

    /**
     * 添加元素
     */
    add(el: Element) {
        if (!el) {
            return;
        }
 
    }

    /**
     * 删除元素
     */
    remove(el: Element) {
        if (!el) {
            return;
        }
 
        this.refresh();
    }

 
 
    getBackgroundColor() { 
    }

    /**
     * Force to set dark mode
     */
    setDarkMode(darkMode: boolean) {
 
    }

    isDarkMode() { 
    }

    /**
     * Repaint the canvas immediately
     */
    refreshImmediately(fromInside?: boolean) {
  
    }

    /**
     * Mark and repaint the canvas in the next frame of browser
     */
    refresh() {
 
    }

    /**
     * Perform all refresh
     */
    flush() {
        this._flush(false);
    }

    private _flush(fromInside?: boolean) {
 
    }

    /**
     * Set sleep after still for frames.
     * Disable auto sleep when it's 0.
     */
    setSleepAfterStill(stillFramesCount: number) {
  
    }

    /**
     * Wake up animation loop. But not render.
     */
    wakeUp() {
 
    }

    /**
     * Refresh hover in next frame
     */
    refreshHover() {
 
    }

    /**
     * Refresh hover immediately
     */
    refreshHoverImmediately() {
 
    }

    /**
     * Resize the canvas.
     * Should be invoked when container size is changed
     */
    resize(opts?: {
        width?: number| string
        height?: number | string
    }) {
 
    }

    /**
     * Stop and clear all animation immediately
     */
    clearAnimation() {
 
    }

    /**
     * Get container width
     */
    getWidth(): number {
 return 0;
    }

    /**
     * Get container height
     */
    getHeight(): number {
        return 0;
    }

    /**
     * Set default cursor
     * @param cursorStyle='default' 例如 crosshair
     */
    setCursorStyle(cursorStyle: string) {
 
    }
  
    /**
     * Dispose self.
     */
    dispose() {
   
    }
}


export interface ZRenderInitOpt {
    renderer?: string   // 'canvas' or 'svg
    devicePixelRatio?: number
    width?: number | string // 10, 10px, 'auto'
    height?: number | string
    useDirtyRect?: boolean
    useCoarsePointer?: 'auto' | boolean
    pointerSize?: number
    ssr?: boolean   // If enable ssr mode.
}

/**
 * Initializing a zrender instance
 *
 * @param dom Not necessary if using SSR painter like svg-ssr
 */
export function init(dom?: HTMLElement | null, opts?: ZRenderInitOpt) {
    const zr = new ZRender( 1, dom, opts);
  
    return zr;
}

/**
 * Dispose zrender instance
 */
export function dispose(zr: ZRender) {
    zr.dispose();
}

/**
 * Dispose all zrender instances
 */
export function disposeAll() {
 
}

 
/**
 * @type {string}
 */
export const version = '5.4.0';


export interface ZRenderType extends ZRender {};