let host ;
if (process.env.NODE_ENV === 'development') {
    host = 'http://localhost';
} else {
    host = 'https://andrejground.com';
}

export default host;

let resumePath;
if (process.env.NODE_ENV === 'development') {
    resumePath =  `${host}:8800/assets/resume/AndrejForgacCV.pdf`;
} else {
    resumePath = `${host}/assets/resume/AndrejForgacCV.pdf`;
}

let imagesPath;
if (process.env.NODE_ENV === 'development') {
    imagesPath =  `${host}:8800/assets/images/`;
} else {
    imagesPath = `${host}/assets/images/`;
}


export { resumePath, imagesPath };
