import { useState } from "react";
import { motion } from "motion/react"
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { contact } from "../../../../../../data/data.json";
import "./style.css";

const Contact = () => {
    const initialFormData = {
        name: "",
        subject: "",
        email: "",
        message: ""
    };

    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

    const [isSend, setIsSend] = useState(false);
    const [formData, setFormData] = useState(initialFormData);

    const handleFormData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSend(true);

        try {
            const result = await emailjs.send(
                serviceId,
                templateId,
                formData,
                publicKey
            );
            if (result.text === "OK") {
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations !',
                    text: 'Your message has been sent !',
                    confirmButtonText: 'OK'
                });
                setFormData(initialFormData);
                setIsSend(false);
            }
        }
        catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops !',
                text: `Failed to send the message !\nPlease check your connection.\nOr\n${error}`,
                confirmButtonText: 'OK'
            });
            setFormData(initialFormData);
            setIsSend(false);
        }
    }

    return (
        <div className="pt-20 md:pt-40 container flex max-md:flex-col justify-between items-center md:items-start gap-y-10" id="contact">
            <motion.div
                className="flex flex-col justify-start items-start gap-y-6 w-full sm:w-100"
                initial={{ x: -250, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-4xl lg:text-5xl text-white capitalize font-ubuntuBold leading-tight max-md:text-center">
                    {contact?.title}
                </h2>
                <p className="text-sm xs:text-base capitalize text-slate-600 font-ubuntuMedium max-md:text-center">
                    {contact?.description}
                </p>
            </motion.div>
            <motion.form
                className="flex flex-col gap-y-4 justify-start items-start *:w-full w-full sm:w-120" onSubmit={e => handleSubmit(e)}
                initial={{ x: 250, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="flex max-sm:flex-col max-sm:*:w-full gap-4 justify-between items-center">
                    <div>
                        <label htmlFor="name" className="form-label">
                            name
                        </label>
                        <input
                            type="text"
                            placeholder="your name"
                            className="form-input"
                            id="name"
                            name="name"
                            onChange={e => handleFormData(e)}
                            value={formData.name}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="form-label">
                            subject
                        </label>
                        <input
                            type="text"
                            placeholder="your subject"
                            className="form-input"
                            id="subject"
                            name="subject"
                            onChange={e => handleFormData(e)}
                            value={formData.subject}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="form-label">
                        email
                    </label>
                    <input
                        type="email"
                        placeholder="your email"
                        className="form-input"
                        id="email"
                        name="email"
                        onChange={e => handleFormData(e)}
                        value={formData.email}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="form-label">
                        message
                    </label>
                    <textarea
                        placeholder="your message"
                        className="form-input"
                        id="message"
                        name="message"
                        onChange={e => handleFormData(e)}
                        value={formData.message}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="flex justify-center items-center gap-2 text-white bg-teal-700 rounded-lg capitalize py-3 font-ubuntuBold border-1 border-teal-700 transition-all duration-300 cursor-pointer hover:bg-transparent hover:text-teal-700 hover:*:border-teal-700 hover:*:border-b-transparent"
                >
                    {isSend ?
                        <>
                            sending
                            <div className="animate-spin size-5 border-2 border-white border-b-transparent rounded-full" />
                        </>
                        : "send message"
                    }
                </button>
            </motion.form>
        </div>
    );
}

export default Contact;