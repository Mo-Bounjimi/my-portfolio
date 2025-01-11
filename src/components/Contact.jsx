import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_myminue',
        'template_gq8yy38',
        form.current,
        'IPfdIcxt-arTUuESX'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log('Success:', result.text);
        },
        (error) => {
          alert('An error occurred. Please try again.');
          console.log('Error:', error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div id='Contact' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8'>
      <h1 className='text-center text-6xl font-light text-teal-600'>Get in Touch</h1>

      <form ref={form} onSubmit={sendEmail} className='flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl'>

        <div className='flex flex-col gap-4'>
          <input type="text" name="first_name" placeholder='First Name' className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg
          outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500' required />

          <input type="text" name="last_name" placeholder='Last Name' className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg
          outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500' required />

          <input type="email" name="email" placeholder='Email' className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg
          outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500' required />
        </div>
        
        <textarea name="message" placeholder='Your Message' className='h-32 w-full resize-none rounded-lg border-2 border-teal-400 px-4 py-3 text-lg
        outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500' required ></textarea>
        <button type="submit" className='rounded-lg border-2 border-teal-400 bg-teal-500 px-6 py-3 font-semibold text-white transition-all
        duration-200 hover:bg-teal-600'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact