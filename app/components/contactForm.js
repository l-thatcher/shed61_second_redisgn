import { motion } from "framer-motion"
import GoodToast from "../components/goodToast";
import BadToast from "../components/badToast";
import EmptyFieldToast from "../components/emptyFieldToast";
import {useState} from "react";


export default function ContactForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false)


    const handleSubmit = async (e) => {
        event.preventDefault();

        if (firstName != '' && lastName != '' && email != '' && message != ''){
            handlePost()
        } else {
            showEmptyFieldToast()
        }
    };

    const handlePost = async (e) => {
        let data = {
            firstName,
            lastName,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                showGoodToast()
                setFirstName('')
                setLastName('')
                setEmail('')
                setMessage('')
            } else {
                showBadToast()
            }
        })
    }

    const [goodToastIsOpen, goodToastSetIsOpen] = useState(false)
    const [badToastIsOpen, badToastSetIsOpen] = useState(false)
    const [emptyFieldToastIsOpen, emptyFieldToastSetIsOpen] = useState(false)


    function showGoodToast() {
        goodToastSetIsOpen(true)
        setTimeout(() => {
            goodToastSetIsOpen(false)
        }, 3000);
    }

    function showBadToast() {
        badToastSetIsOpen(true)
        setTimeout(() => {
            badToastSetIsOpen(false)
        }, 3000);
    }

    function showEmptyFieldToast() {
        emptyFieldToastSetIsOpen(true)
        setTimeout(() => {
            emptyFieldToastSetIsOpen(false)
        }, 3000);
    }

    const variants = {
        open: {x: '0', display: "block",},
        closed: {x: '50vw', display: 'none',
            transition: {
                display: {
                    delay: 1,
                }
            }},
    }

    return (
        <div className='h-fit md:h-full bg-white flex justify-center border-2 border-t-gray-700 md:border-0'>
                <motion.div
                    className='absolute bottom-2 right-5 md:top-10 md:right-10 z-[100] hidden'
                    animate={goodToastIsOpen ? "open" : "closed"}
                    variants={variants}>
                    <GoodToast></GoodToast>
                </motion.div>
                <motion.div
                    className='absolute bottom-2 right-5 md:top-10 md:right-10 z-[100] hidden'
                    animate={badToastIsOpen ? "open" : "closed"}
                    variants={variants}>
                    <BadToast></BadToast>
                </motion.div>
                <motion.div
                    className='absolute bottom-2 right-5 md:top-10 md:right-10 z-[100] hidden'
                    animate={emptyFieldToastIsOpen ? "open" : "closed"}
                    variants={variants}>
                    <EmptyFieldToast></EmptyFieldToast>
                </motion.div>
                <div className='m-auto pointer-events-auto p-5'>
                    <form className="w-full max-w-lg"
                          onSubmit={handleSubmit}
                    >
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-inherit"
                                    id="grid-first-name" type="text" placeholder="Jane" value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);}}></input>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-inherit focus:border-gray-500"
                                    id="grid-last-name" type="text" placeholder="Doe" value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}>
                                </input>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-password">
                                    E-mail
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-inherit focus:border-gray-500"
                                    id="email" type="email" value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}>
                                </input>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-password">
                                    Message
                                </label>
                                <p className="text-gray-600 text-xs italic pb-1">Please briefly describe the work you would like doing.</p>
                                <textarea
                                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-inherit focus:border-gray-500 h-48 resize-none"
                                    id="message" value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}>
                                    </textarea>
                                {/*<p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none*/}
                                {/*    / resize-y / resize-x / resize</p>*/}
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button
                                    className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    type="submit">
                                    Send
                                </button>
                            </div>
                            <div className="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>
    )
}