import React, { useState } from 'react';

import { useRef } from 'react';

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {};

	const handleFocus = () => {};
	const handleBlur = () => {};

	return (
		<section className="relative flex lg:flex-row flex-col max-container">
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="head-text">My contact information, resume and more!</h1>
				<form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
					<label className="text-black-500 font-semibold">
						Name
						<input
							type="text"
							name="name"
							className="input"
							placeholder="Alice"
							required
							value={form.name}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						></input>
					</label>
					<label className="text-black-500 font-semibold">
						Email
						<input
							type="email"
							name="email"
							className="input"
							placeholder="AliceDoe@gmail.com"
							required
							value={form.email}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						></input>
					</label>
					<label className="text-black-500 font-semibold">
						Your message
						<textarea
							rows={4}
							name="message"
							className="textarea"
							placeholder="I think you are great fit for the position! Let's talk!"
							required
							value={form.message}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						></textarea>
					</label>
					<button type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
						{isLoading ? 'Sending..' : 'Send Message'}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
