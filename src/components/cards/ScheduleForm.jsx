import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../styles/Form.module.css';
// * Bootstrap components
import Button from 'react-bootstrap/Button';

export default function ScheduleForm() {
	const [submited, setSubmited] = useState(true);
	const successMessageRef = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		if (!data) alert('Please fill the required fields in form');
		console.log(errors);
		console.log(data);
		// TODO: send data to backend here

		setSubmited(true);
		successMessageRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<h2 className={`text-center text-break ${styles.heading}`}>Schedule a demo</h2>

			<form onSubmit={handleSubmit(onSubmit)} className={`${styles.formContainer}`}>
				<div className={styles.formRow}>
					<input
						type="name"
						placeholder="Full Name*"
						className={`${styles.inputTag}`}
						required
						{...register('fullname', { minLength: { value: 3, message: 'Invalid Name!' } })}
					/>

					<input
						type="email"
						placeholder="Email*"
						className={`${styles.inputTag}`}
						required
						{...register('email', { minLength: { value: 7, message: 'Invalid Email!' } })}
					/>
				</div>

				<div className={styles.formRow}>
					<input
						type="tel"
						placeholder="Phone No*"
						className={`${styles.inputTag}`}
						required
						{...register('phoneNo', { minLength: 10, maxLength: 13 })}
					/>

					<input type="company" placeholder="Company" className={`${styles.inputTag}`} {...register('company')} />
				</div>

				<input type="position" placeholder="Position in Company" className={`${styles.inputTag}`} {...register('position')} />

				<input type="text" placeholder="How can we help?" className={`${styles.inputTag}`} {...register('subject')} />

				<textarea
					name="message"
					id="message"
					cols="30"
					rows="7"
					placeholder="Write your message.........*"
					className={`${styles.inputTag}`}
					{...register('message', {
						required: { value: true, message: 'Please enter a message' },
						minLength: { value: 50, message: 'Message too short!' },
					})}
				/>
				{errors.message && <span className={`${styles.error} `}>{errors.message.message}</span>}

				<div className="d-grid">
					<Button size="lg" type="submit" onClick={() => console.log('submit')} className={`${styles.btn}`}>
						Submit
					</Button>
				</div>
			</form>

			{submited && (
				<div className={`text-center ${styles.successMessage}`} ref={successMessageRef}>
					*The form is submited. Our team will get back to you soon.
				</div>
			)}
		</>
	);
}

/*
* Notes
React-hook-form library is used to validate the form.
the form is validated on submit.

TODO: displaying error message in either a Toast component or below the input field.
*/
