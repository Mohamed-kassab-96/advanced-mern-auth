import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

// export const client = new MailtrapClient({
export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
	email: "hello@demomailtrap.com",
	// email: "mailtrap@demomailtrap.com",
	name: "Moha Kassab",
	// name: "Burak",
};

// const recipients = [
//     {
//       email: "mohamedhosny6055@gmail.com",
//     }
// ];
  
// client
//     .send({
//       from: sender,
//       to: recipients,
//       subject: "You are awesome!",
//       text: "Congrats for sending test email with Mailtrap!",
//       category: "Integration Test",
//     })
//     .then(console.log, console.error);
//////////////////////-------------------///////////////// from الموقع mailtrap بال api بتاعي 

// const { MailtrapClient } = require("mailtrap");

// const TOKEN = "296918d2786c138222835ab6ceae8b57";

// const client = new MailtrapClient({
//   token: TOKEN,
// });

// const sender = {
//   email: "hello@demomailtrap.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   {
//     email: "mohamedhosny6055@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

////////////------------------------//////////////////////// from burak

// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";

// dotenv.config();

// export const mailtrapClient = new MailtrapClient({
// 	endpoint: process.env.MAILTRAP_ENDPOINT,
// 	token: process.env.MAILTRAP_TOKEN,
// });

// export const sender = {
// 	email: "mailtrap@demomailtrap.com",
// 	name: "Burak",
// };
