const qr = require('qrcode');
const readlineSync = require('readline-sync');
const fs = require('fs');


async function QRCode() {
    //Enter data for the QR code
    const data = readlineSync.question('Enter data for QR code: ');

    // Generate the QR code
    const qrCode = await qr.toDataURL(data);

    // Save the QR code as an image file
    const imageName = `${data.replace(/\s/g, '_')}.png`;
    fs.writeFileSync(imageName, qrCode.split(';base64,').pop(), { encoding: 'base64' });

    console.log(`QR code generated and saved as ${imageName}`);
}
QRCode();



// const QrCode=require('qrcode');
// const path=require('path');
// // QrCode.toString('data goes here',(err,data)=>{
// //     if(err) throw err;
// //     console.log(data);
// // })

// QrCode.toFile(path.join(__dirname,'qrCode.png'),'random data here',(err)=>{
//     if(err) throw err;
//     console.log('QR code generated and saved as qrCode.png');
// })

// const QrCode = require('qrcode');
// const path = require('path');
// const readlineSync = require('readline-sync');

// // Prompt the user to enter data for the QR code
// const data = readlineSync.question('Enter data for QR code: ');

// // Generate and save the QR code as an image file
// QrCode.toFile(path.join(__dirname, 'qrCode.png'), data, (err) => {
//     if (err) throw err;
//     console.log('QR code generated and saved as qrCode.png');
// });
