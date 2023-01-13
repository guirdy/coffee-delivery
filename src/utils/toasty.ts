import { toast } from 'react-toastify'

export const notify = (message: string, status: string) => {
  switch (status) {
    case 'success':
      toast.success(message)
      break
    case 'error':
      toast.error(message)
      break
    default:
      toast(message)
  }
}
