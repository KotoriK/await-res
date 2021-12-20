/**
 *  
 * @param imgElement 
 * @returns Event, undefined when Image is already loaded
 */
export const awaitImage = (imgElement: HTMLImageElement) =>
    new Promise<Event | void>((resolve, reject) => {
        if (imgElement.complete) {
            resolve()
        } else {
            imgElement.addEventListener('load', resolve)
            imgElement.addEventListener('error', reject)
        }
    })