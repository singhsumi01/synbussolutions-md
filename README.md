# Whatsapp Multi Session - Connect More WhatsApp Sessions in 1 Application

Connecting your app with Whatsapp

Lightweight library for WhatsApp. You don't need to use Selenium or other browsers.

Standing on [Baileys](https://github.com/WhiskeySockets/Baileys) Library.

## Installation

Install the package using the npm

```
npm install synbussolutions-md
```

Then import your code

Use JS Module

```ts
import * as whatsapp from "synbussolutions-md";
```

or use CommonJS

```ts
const whatsapp = require("synbussolutions-md");
```

## Session Usage/Examples

Start New Session

```ts
const session = await whatsapp.startSession("sumit");
// Create session with ID: synbussolutions
// Then, scan the QR in the terminal
```

Get All Session ID

```ts
const sessions = whatsapp.getAllSession();
// Returns all session IDs that have been created
```

Get Session Data By ID

```ts
const session = whatsapp.getSession("sumit");
// Return session data
```

Load Session From Storage / Load Saved Session

```ts
whatsapp.loadSessionsFromStorage();
// Start a saved session without scanning again
```

## Messaging Usage/Examples

Send Text Message

```ts
await whatsapp.sendTextMessage({
  sessionId: "sumit", // session ID
  to: "917838343515", // always add country code (example: 91)
  text: "Hi. This is a message from Server.", // message you want to send
});
```

Send Image

```ts
const image = fs.readFileSync("./myimage.png"); // return Buffer
const send = await whatsapp.sendImage({
  sessionId: "sumit",
  to: "917838343515",
  text: "My Image Caption",
  media: image, // can from URL too
});
```

Send Video

```ts
const video = fs.readFileSync("./video.mp4"); // return Buffer
const send = await whatsapp.sendVideo({
  sessionId: "sumit",
  to: "917838343515",
  text: "My video caption",
  media: video, // can from URL too
});
```

Send Document File

```ts
const filename = "file.pdf";
const document = fs.readFileSync(filename); // return Buffer
const send = await whatsapp.sendDocument({
  sessionId: "sumit",
  to: "917838343515",
  filename: filename,
  media: document,
  text: "Hi check this Document",
});
```

Read a Message

```ts
await whatsapp.readMessage({
  sessionId: "sumit",
  key: msg.key,
});
```

Send Typing Effect

```ts
await whatsapp.sendTyping({
  sessionId: "sumit",
  to: "917838343515",
  duration: 3000,
});
```

## Listener Usage/Examples

Add Listener/Callback When Receive a Message

```ts
whatsapp.onMessageReceived((msg) => {
  console.log(`New Message Received On Session: ${msg.sessionId} >>>`, msg);
});
```

Add Listener/Callback When QR Printed

```ts
whatsapp.onQRUpdated(({ sessionId, qr }) => {
  console.log(qr);
});
```

Add Listener/Callback When Session Connected

```ts
whatsapp.onConnected((sessionId) => {
  console.log("session connected :" + sessionId);
});
```

## Handling Incoming Message Examples

```ts
whatsapp.onMessageReceived(async (msg) => {
  if (msg.key.fromMe || msg.key.remoteJid.includes("status")) return;
  await whatsapp.readMessage({
    sessionId: msg.sessionId,
    key: msg.key,
  });
  await whatsapp.sendTyping({
    sessionId: msg.sessionId,
    to: msg.key.remoteJid,
    duration: 3000,
  });
  await whatsapp.sendTextMessage({
    sessionId: msg.sessionId,
    to: msg.key.remoteJid,
    text: "Hello!",
    answering: msg, // for quoting message
  });
});
```

## Save Media Message (Image, Video, Document)

```ts
wa.onMessageReceived(async (msg) => {
  if (msg.message?.imageMessage) {
    // save image
    msg.saveImage("./image.jpg");
  }

  if (msg.message?.videoMessage) {
    // save video
    msg.saveVideo("./video.mp4");
  }

  if (msg.message?.documentMessage) {
    // save document
    msg.saveDocument("./file"); // without extension
  }
});
```

## Optional Configuration Usage/Examples

Set custom credentials directory

```ts
// default dir is "wa_credentials"
whatsapp.setCredentialsDir("my_custom_dir");
// or : credentials/mycreds
```

Set custom Browser
```ts
// Default browser is chrome
whatsapp.setBrowser("macOS");
// or any other your custom name
```

## Authors

- [@singhsumi01](https://www.github.com/singhsumi01)

## Feedback or Support

If you have any feedback or support, please contact me at support@synbussolutions.com
