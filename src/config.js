let host ;
if (process.env.NODE_ENV === 'development') {
    host = 'http://localhost';
} else {
    host = 'https://andrejground.com';
}

export default host;