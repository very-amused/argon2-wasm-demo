let data = [];
function onWorkerMessage(evt) {
    data.push(evt.data);
}
export function initResponseListener(worker) {
    worker.addEventListener('message', onWorkerMessage, true);
}
export function removeResponseListener(worker) {
    worker.removeEventListener('message', onWorkerMessage, true);
    return data.length;
}
export async function nextMessage(worker) {
    return new Promise((resolve) => {
        if (data.length) {
            resolve(data[data.length - 1]);
            data.splice(data.length - 1, 1);
        }
        worker.addEventListener('message', () => {
            resolve(data[data.length - 1]);
            data.splice(data.length - 1, 1);
        }, {
            once: true
        });
    });
}
