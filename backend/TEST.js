import FormData from 'form-data';
import Mailgun from 'mailgun.js';

  const mailgun = new Mailgun(FormData);
  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;

  
  mg.messages.create('sandbox01d43b4f73f84d8cb01fae14dddc7d57.mailgun.org', {
  	from: "Excited User <mailgun@sandbox01d43b4f73f84d8cb01fae14dddc7d57.mailgun.org>",
  	to: ["paras.jain.real@gmail.com"],
  	subject: "Hello",
  	text: "Testing some Mailgun awesomeness!",
  	html: "<h1>Testing some Mailgun awesomeness!</h1>"
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error