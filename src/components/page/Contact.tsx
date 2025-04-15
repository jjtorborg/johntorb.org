'use client'

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            setIsSending(true);
            emailjs.sendForm(
                'service_scbhz6d',
                'template_2pj5u8m',
                form.current,
                'keapoppjTdGaAG2bi'
            )
            .then((result) => {
                if (result.status === 200) {
                    toast.success('Message sent successfully!');
                } else {
                    toast.error('Message failed to send. Please try again later.');
                }
            })
            .finally(() => {
                setIsSending(false);
            });
        }
    };

    const labelClassName = 'block text-sm md:text-base font-medium mb-1';
    const inputClassName = 'mt-1 p-3 block w-full rounded-md border border-(--alt-border) bg-(--alt-background) shadow-sm focus:outline-(--blue-500) focus:outline-2 sm:text-sm';

    return (
        <div id='contact' className='pb-40 sm:pb-64'>
            <h1 className='mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl md:pt-32 md:text-7xl font-bold'>
                Contact Me
            </h1>
            <form ref={form} onSubmit={sendEmail} className='mx-auto px-12 max-w-[95%] sm:max-w-[90%] md:max-w-2xl lg:max-w-4xl'>
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
                <div className='flex flex-row items-center'>
                    <button
                        type='submit'
                        className='inline-flex items-center justify-center rounded-md border border-transparent bg-(--hoverable) py-2 px-4 my-2 cursor-pointer text-sm md:text-base font-medium mb-1 shadow-sm text-(--background) hover:text-(--foreground) hover:bg-blue-500 hover:scale-105 focus:scale-105 focus:bg-blue-500 focus:text-(--foreground) focus:outline-0 ease-in-out duration-300'
                        onClick={(e) => (e.currentTarget as HTMLButtonElement).blur()}
                    >
                        Send
                    </button>
                    {isSending && (
                            <svg
                                className='ml-4 mt-[2px] h-5 w-5 animate-spin text-(--foreground)'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <circle
                                    className='opacity-25'
                                    cx='12'
                                    cy='12'
                                    r='10'
                                    stroke='currentColor'
                                    strokeWidth='4'
                                ></circle>
                                <path
                                    className='opacity-75'
                                    fill='var(--blue-500)'
                                    d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                                ></path>
                            </svg>
                        )}
                </div>
            </form>
        </div>
    );
}