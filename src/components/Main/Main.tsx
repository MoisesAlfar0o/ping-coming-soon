import './Main.css'
import IlustrationDashboard from '../../assets/images/illustration-dashboard.png'
import { useFormValidation } from '../../hooks/useFormValidation'

export function Main () {
  const {
    register,
    handleSubmit,
    errors,
    success,
    setSuccess,
    reset
  } = useFormValidation()

  const onSubmit = handleSubmit(() => {
    setSuccess('Email send!')
    reset()
  })
  
  return (
    <main>
      <section className="soon-info">
        <h1>We are launching <span>soon!</span></h1>
        <p>Subscribe and get notified</p>
      </section>
      <form onSubmit={onSubmit} className="email-form" noValidate>
        <input 
          type="email" 
          placeholder="Your email address..." 
          className={`input ${errors.email ? 'input-error' : ''}`}
          {...register('email', {
            required: {
              value: true,
              message: 'Please enter an email!'
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: 'Please provide a valid email!'
            }
          })}  
        />
        <button type="submit">Notify Me</button>
        {errors.email && <p className="error-input">{errors.email.message}</p>}
        {success && <p className="success-input">{success}</p>}
      </form>
      <picture className="img">
        <img src={IlustrationDashboard} alt="Ilustration Image" />
      </picture>
    </main>
  )
}