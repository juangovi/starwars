import { useState } from "react"

export const useForm = ( init ) => {
  const [params, setparams] = useState( init )
  const handleChange = (e) => setparams({ ...params, [e.target.name]: e.target.value })
  return [params, handleChange]
  
}
