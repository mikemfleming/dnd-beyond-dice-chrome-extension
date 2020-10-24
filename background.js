// start a ws server that listens to our webpack dev server

const ws = new WebSocket('ws://localhost:1337')

ws.addEventListener('message', () => {
    // detected a fs change, reload extension code
    chrome.runtime.reload()
    ws.send('reloaded chrome runtime')
})
