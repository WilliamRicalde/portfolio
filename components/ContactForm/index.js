import { useState } from 'react'

import style from './Form.module.css'

const ContactForm = () => {
  // const apiUrl = process.env.NEXT_PUBLIC_API

  const initialState = {
    name: '',
    email: '',
    message: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const contactMutation = (name, email, message) => {
    // eslint-disable-next-line no-undef
    fetch(process.env.NEXT_PUBLIC_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',
      body: JSON.stringify({
        query: `
        mutation {
          createContact(data: { name: "${name}", message: "${message}", email: "${email}" }) {
            id
            name
          }
        }
        `
      })
    }).then(res => console.log(res))
      .catch(e => console.log(e))
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const { name, email, message } = formValues
    contactMutation(name, email, message)
    setFormValues(initialState)
  }

  const handleChange = evt => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value
    })
    console.log('cambiando...')
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label>Nombre Completo</label>
      <input
        type='text'
        name='name'
        value={formValues.name || ''}
        onChange={handleChange}
      />
      <label>Correo Electronico</label>
      <input
        type='email'
        name='email'
        value={formValues.email || ''}
        onChange={handleChange}
      />
      <label>Mensaje</label>
      <textarea
        name='message'
        cols='30'
        rows='10'
        value={formValues.message || ''}
        onChange={handleChange}
      />
      <button>Enviar Mensaje</button>
    </form>
  )
}

export default ContactForm
