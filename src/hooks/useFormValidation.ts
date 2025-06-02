import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'


interface FormValues {
  email: string
}

export function useFormValidation () {
  const {
    register, handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>()

  const [success, setSuccess] = useState('')

  useEffect(() => {
    if(errors.email) {
      setSuccess('')
    }
  }, [errors.email])

  return { register, handleSubmit, errors, success, setSuccess, reset}
}