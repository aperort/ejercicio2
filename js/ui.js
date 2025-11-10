export const UI = {
    status: null,
    table: null,
    sizes: null,
    init: (config) => {
        UI.status = config.status;
        UI.table = config.table;
        UI.sizes = config.sizes;
    },
    setStatus: (message) => {
        UI.status.innerHTML = message;
    }
}