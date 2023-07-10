import { io } from 'socket.io-client';

// Socket initialization
export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    return io( window.location.origin , options);
    
};
