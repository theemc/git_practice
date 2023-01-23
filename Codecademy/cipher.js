class ShiftCipher {
  constructor(key) {
    this.key = key;
    };
    encrypt(message) {
      message = message.toString().toUpperCase();
      const encryptedMessage = [];
      for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
          encryptedMessage.push(message.charCodeAt(i));
        } else if (message.charCodeAt(i) + this.key > 90) {
          encryptedMessage.push(message.charCodeAt(i) + this.key - 26);
        } else {
          encryptedMessage.push(message.charCodeAt(i) + this.key);
        };
      };
      return console.log(String.fromCharCode.apply(null,encryptedMessage));
    };

    decrypt(encryption) {
      encryption = encryption.toString()
      const decryptedMessage = [];
      for (let i = 0; i < encryption.length; i++) {
        if (encryption.charCodeAt(i) < 65 || encryption.charCodeAt(i) > 90) {
         decryptedMessage.push(encryption.charCodeAt(i));
        } else if (encryption.charCodeAt(i) - this.key < 65) {
          decryptedMessage.push(encryption.charCodeAt(i) - this.key + 26);
        } else {
          decryptedMessage.push(encryption.charCodeAt(i) - this.key);
        };
      };
      return console.log(String.fromCharCode.apply(null,decryptedMessage).toLowerCase());
    };
};
  
  const cipher = new ShiftCipher(2);
  cipher.encrypt('ABC!');
  cipher.decrypt('CDE!');

cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'

  /*

  class ShiftCipher {
    constructor(key) {
      this.key = key;
    };
    encrypt(message) {
      message = message.toString().toUpperCase();
      for (let i = 0; i < message.length - 1; i++) {
        console.log(message.charCodeAt(i) + this.key);
        };
    };
    decrypt(message) {
      message = message.toString().toLowerCase();
      return console.log(message);
    };
  };
  
  const cipher = new ShiftCipher(2);
  cipher.encrypt('ABC!');
  //cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
  //cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'

  */