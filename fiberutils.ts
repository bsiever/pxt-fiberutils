

//% color=#FF0000 
//% icon="\uf21e"
//% block="Fiber utils"
namespace fiberutils {
    //% blockId="yield" block="yield"
    //% shim=fiberutils::yield
    export function yield() : void {
        pause(-100)
        // Per https://github.com/microsoft/pxt-microbit/issues/4292
        0;
    }

    /**
     * Forever block that doesn't block as long as the default (max of 250HZ on v2)
     */
    //% block="fast forever"
    export function fastForever(handler: () => void) {
        control.inBackground( () => {
        while (true) {
            handler()
            yield()
        }
        })
    }    
}
