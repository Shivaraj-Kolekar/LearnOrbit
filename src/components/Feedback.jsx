import React from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from './ui/dialog'
import { Textarea } from './ui/textarea'
import { toast } from 'react-toastify'
function Feedback () {
  const [result, setResult] = React.useState('')
  const onSubmit = async event => {
    event.preventDefault()
    setResult('Sending....')
    //toast.info('Sending feedback...')
    const formData = new FormData(event.target)

    formData.append('access_key', '071ff0b2-49c7-40fd-94e4-75afe84c8360')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult('')
      toast.success('Feedback submitted successdully, Thankyou!')
      event.target.reset()
    } else {
      console.log('Error', data)
      toast.error('Something went wrong, please try again later!')
      setResult(data.message)
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className='border-none hover:bg-transparent self-start  py-1 lg:px-4 text-gray-400 hover:text-white text-lg  font-semibold '
          variant='outline'
        >
          Feedback
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-slate-950 border-slate-700'>
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription>
            Your valuable feedback will help us improve the app and provide new
            feature faster.
          </DialogDescription>
        </DialogHeader>{' '}
        <form onSubmit={onSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input id='name' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='feedback' className='text-right'>
                Feedback
              </Label>
              <Textarea id='feedback' className='col-span-3' />
            </div>
          </div>

          <DialogFooter>
            <Button type='submit'>Send</Button>
          </DialogFooter>
        </form>
        <span>{result}</span>
      </DialogContent>
    </Dialog>
  )
}

export default Feedback
