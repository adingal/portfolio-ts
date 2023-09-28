import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email is required.'),
  message: Yup.string()
    .min(15, 'Enter a minimum of 15 characters.')
    .max(200, 'Maximum characters reached.')
    .required('Message is required.'),
})

type ContactFormProps = {
  sent: boolean
  setSent: (status: boolean) => void
  setSentError: (status: boolean) => void
}

function ContactForm(props: ContactFormProps) {
  const { sent, setSent, setSentError } = props
  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      fetch('https://formspree.io/f/xdoywvbk', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            resetForm()
            setSent(!sent)
          } else {
            throw Error()
          }
        })
        .catch(() => setSentError(true))
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col space-y-4 lg:space-y-6 text-white"
    >
      <div className="relative">
        <input
          className="w-full bg-gray-600 p-2 md:p-3 outline-none border focus:border-red-600 transition delay-100"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="absolute text-xs text-gray-300">
            <span className="text-red-500">*</span>
            {formik.errors.email}
          </p>
        )}
      </div>
      <div className="relative">
        <textarea
          className="w-full bg-gray-600 p-2 md:p-3 outline-none border focus:border-red-600 transition delay-100"
          name="message"
          id="message"
          cols={5}
          rows={5}
          placeholder="Message"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.message}
        ></textarea>
        {formik.touched.message && formik.errors.message && (
          <p className="absolute -bottom-3 text-xs text-gray-300">
            <span className="text-red-500">*</span>
            {formik.errors.message}
          </p>
        )}
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 text-base md:text-lg lg:text-xl border border-zinc-600 rounded-md py-2 md:py-3 lg:py-4 px-4 md:px-5 lg:px-6 cursor-pointer transition-colors delay-100 text-white"
        type="submit"
      >
        Send
      </button>
    </form>
  )
}

export default ContactForm
