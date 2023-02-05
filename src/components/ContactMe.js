import {useState} from 'react'

const ContactMe = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    //sending the email

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await fetch("http://localhost:8000/send", {
            method: "POST",
            headers: {
                    "Content-type": "application/json",
                },
            body: JSON.stringify({name, email, message}),
        })
        .then((res)=> res.json())
        .then((data)=> {
            if(data.status === 200){
                setName("");
                setEmail("");
                setMessage("");
                setEmailSent(true);
                alert("Message Sent 😀");  
            } else if(data.status === 424){
                alert("Message failed to send");
            }
        })
        .catch((err)=> console.log(err));
        
    }
return(
    //have linked in and socials on there
    <div className="section-contact">
        <div className="contact-me-background"></div>
        <div className="contact-form-display position">
            <h2 className="capital small-section">
            LETS CONNECT!
        </h2>
        <div className="big-section">
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='section1'>
                    <div>
                        <input className='width100 form-format' type="text" name="name" placeholder="name" value={name} required onChange={(ev)=> setName(ev.target.value)}/>
                    </div>
                    <div>
                        <input className='width100 form-format' type="email" name="email" placeholder="your email address" value={email} required onChange={(ev)=> setEmail(ev.target.value)}/>
                    </div>
                </div>
                
                <div className='section2'>
                    <textarea type="text-area" className='width100 height100 padding2' name="message" placeholder="message" value={message} required onChange={(ev)=> setMessage(ev.target.value)}/>
                </div>
                <div>
                    <button className="padding2" type="submit" value="submit">Send</button> 
                </div>
            </form>
        </div>
        </div>
    </div>
);
}
export default ContactMe;