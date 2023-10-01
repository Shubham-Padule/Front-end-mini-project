let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");

function GenerateQR() {
    if(qrtext.value.length > 0){
    // Encode the user input and construct the URL
    let encodedText = encodeURIComponent(qrtext.value);
    let qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedText}`;
    
    imgbox.classList.add("show-img");
    // Update the QR code image source
    qrimage.src = qrCodeURL;
    }else{ 
        qrtext.classList.add('error');
        setTimeout(() => {
            qrtext.classList.remove('error');
            
        }, 1000);
    }
}
