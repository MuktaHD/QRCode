//these are required first install qrcode
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



