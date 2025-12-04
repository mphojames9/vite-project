import React from 'react'


export default function ContactForm(){
function sendContact(e){
e.preventDefault()
const form = e.target
const name = form.name.value
const email = form.email.value
const subject = form.subject.value || 'New inquiry'
const message = form.message.value
const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
window.location.href = `mailto:hello@youremail.com?subject=${encodeURIComponent(subject)}&body=${body}`
}


return (
<form className="form card" onSubmit={sendContact}>
<input name="name" id="name" placeholder="Your name" required />
<input name="email" id="email" placeholder="Email" type="email" required />
<input name="subject" id="subject" placeholder="Subject" />
<textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
<button type="submit">Send message</button>
</form>
)
}