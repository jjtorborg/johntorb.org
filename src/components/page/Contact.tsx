'use client'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_scbhz6d',
                'template_2pj5u8m',
                form.current
            );
        }
    };

    const labelClassName = 'block text-sm md:text-base font-medium mb-1';
    const inputClassName = 'mt-1 p-3 block w-full rounded-md border border-(--alt-border) bg-(--alt-background) shadow-sm focus:outline-(--blue-500) focus:outline-2 sm:text-sm';

    return (
        <div id='contact' className='pb-40 sm:pb-64'>
            <h1 className='mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl md:pt-32 md:text-7xl font-bold'>
                Contact Me
            </h1>
            <form ref={form} onSubmit={sendEmail} className='mx-auto px-12 max-w-[90%] sm:max-w-[80%] lg:max-w-4xl'>
                <div className='mb-4'>
                    <label htmlFor='name' className={labelClassName}>
                        Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='John Smith'
                        className={inputClassName}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='email' className={labelClassName}> 
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='example@example.com'
                        className={inputClassName}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='message' className={labelClassName}>
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        rows={7}
                        placeholder='Type your message here.'
                        className={inputClassName}
                        required
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-(--hoverable) py-2 px-4 my-2 cursor-pointer text-sm md:text-base font-medium mb-1 shadow-sm hover:bg-blue-500 focus:bg-blue-500 ransition-transform hover:scale-105 ease-in-out duration-300'
                >
                    Send
                </button>
            </form>
        </div>
    );
}