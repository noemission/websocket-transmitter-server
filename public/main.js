const socket = io();

socket.on('transmitter_clients', (transmitter_clients) => {
    console.log('transmitter_clients', transmitter_clients)
    if(transmitter_clients > 0){
        showGoodStatus();
    }else{
        showBadStatus();
    }
})

document.getElementById('send_code_btn').addEventListener('click', () => {
    socket.emit('send_code')
})

const showGoodStatus = () => {
    document.getElementById('transmitter_not_ok').style.visibility = 'hidden'
    document.getElementById('transmitter_ok').style.visibility = 'visible'
}

const showBadStatus = () => {
    document.getElementById('transmitter_ok').style.visibility = 'hidden'
    document.getElementById('transmitter_not_ok').style.visibility = 'visible'
}