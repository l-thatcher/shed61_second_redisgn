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


    const handleSubmit = async (e : any) => {
        e.preventDefault();
        console.log('Sending')


        if (firstName != '' && lastName != '' && email != '' && message != ''){
            handlePost(e)
        } else {
            showEmptyFieldToast()
        }
    };

    const handlePost = async (e : any) => {
        let data = {
            firstName,
            lastName,
            email,
            message
        }
    
        fetch('/app/pages/api/contact', {
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
        <div className='w-[80vw] flex justify-center rounded-xl backdrop-brightness-275'>
                <motion.div
                    className='absolute -top-7 right-44 z-[100] hidden'
                    animate={goodToastIsOpen ? "open" : "closed"}
                    variants={variants}>
                    <GoodToast></GoodToast>
                </motion.div>
                <motion.div
                    className='absolute -top-7 right-44 z-[100] hidden'
                    animate={badToastIsOpen ? "open" : "closed"}
                    variants={variants}>
                    <BadToast></BadToast>
                </motion.div>
                <motion.div
                    className='absolute -top-7 right-44  z-[100] hidden'
                    animate={emptyFieldToastIsOpen ? "open" : "closed"}
                    variants={variants}>
                    <EmptyFieldToast></EmptyFieldToast>
                </motion.div>


                <div className='m-auto pointer-events-auto p-5'>
                    <form className="w-[80vw]"
                          onSubmit={handleSubmit}
                    >
                        <div className="flex justify-between ">
                            <div className="w-1/2 -mt-14 bg-[#232E4D] p-8 rounded-tl-lg">
                                <label className="w-fit block uppercase tracking-wide font-light text-white bg-[#F4706C] rounded-t-lg text-md px-5 py-2.5"
                                       htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-r-lg rounded-b-lg py-3 px-4 mb-3 leading-tight  focus:border-gray-200"
                                    id="grid-first-name" type="text" placeholder="Jane" value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);}}>
                                </input>
                            </div>
                            <div className="w-1/2 -mt-14 bg-[#232E4D] p-8 rounded-tr-lg">
                                <label className="w-fit block uppercase tracking-wide font-light text-white bg-[#F4706C] rounded-t-lg text-md px-5 py-2.5"
                                       htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-r-lg rounded-b-lg py-3 px-4 leading-tight  focus:border-gray-200"
                                    id="grid-last-name" type="text" placeholder="Doe" value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}>
                                </input>
                            </div>
                        </div>
                        <div className="flex justify-between  ">
                            <div className="w-full bg-[#232E4D] p-8 shadow-md">
                                <div className="w-full px-3">
                                    <label className="w-fit block uppercase tracking-wide font-light text-white bg-[#F4706C] rounded-t-lg text-md px-5 py-2.5"
                                        htmlFor="grid-password">
                                        E-mail
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-b-lg rounded-r-lg py-3 px-4 mb-3 leading-tight  focus:border-gray-200"
                                        id="email" type="email" value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}>
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between -mb-14">
                            <div className="w-full bg-[#232E4D] p-8 rounded-b-lg shadow-md">
                                <div className="w-full px-3 ">
                                    <label className="w-fit block uppercase tracking-wide font-light text-white bg-[#F4706C] rounded-t-lg text-md px-5 py-2.5"
                                        htmlFor="grid-password">
                                        Message
                                    </label>
                                    <p className="w-fill italic tracking-wide font-light text-white bg-[#F4706C] rounded-tr-lg text-sm px-5 py-2.5">Please briefly describe the work you would like doing.</p>
                                    <textarea
                                        className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:border-gray-200 h-48 resize-none"
                                        id="message" value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                        }}>
                                    </textarea>
                                    {/*<p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none*/}
                                    {/*    / resize-y / resize-x / resize</p>*/}
                                    <div className="w-full">
                                        <button
                                            className="shadow w-full block uppercase tracking-wide font-light text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-b-lg text-md px-5 py-2.5 focus:shadow-outline focus:outline-none"
                                            type="submit">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
    )
}