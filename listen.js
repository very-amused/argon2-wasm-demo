const data = {};
function onWorkerMessage(evt, id) {
    data[id].push(evt.data);
}
export function initResponseListener(worker, id) {
    data[id] = [];
    worker.addEventListener('message', (evt) => {
        onWorkerMessage(evt, id);
    }, true);
}
export function removeResponseListener(worker, id) {
    worker.removeEventListener('message', (evt) => {
        onWorkerMessage(evt, id);
    }, true);
    return data[id].length;
}
export async function nextMessage(worker, id) {
    return new Promise((resolve) => {
        if (data[id].length) {
            resolve(data[id][data[id].length - 1]);
            data[id].splice(data[id].length - 1, 1);
            return;
        }
        worker.addEventListener('message', () => {
            resolve(data[id][data[id].length - 1]);
            data[id].splice(data[id].length - 1, 1);
        }, {
            once: true
        });
    });
}
