/**
 *  
 * @param img 
 */
const awaitImage: (img: HTMLImageElement) => Promise<void> =
    typeof HTMLImageElement !== 'undefined' && 'decode' in HTMLImageElement ?
        (img) => img.decode() :
        (img) =>
            new Promise<void>((resolve, reject) => {
                if (img.complete) {
                    resolve()
                } else {
                    img.addEventListener('load', () => resolve(), { once: true })
                    img.addEventListener('error', reject, { once: true })
                }
            })
export default awaitImage