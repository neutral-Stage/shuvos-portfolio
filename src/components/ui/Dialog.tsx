
type Props = {
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean
}

const Dialog = ({setIsDialogOpen,isError}:Props) => {

  return (
    <div

  className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60  backdrop-blur-sm transition-opacity duration-300"
>
  <div
    
    className="relative m-4 p-4 w-4/5 md:min-w-[20%] md:max-w-[20%] rounded-lg bg-neutral-800 shadow-sm"
  >
    <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-neutral-300">
      {isError ? 'Message sent failed' : 'Message sent successfully!'}
    </div>
    <div className="relative border-t border-neutral-600 py-4 leading-normal text-neutral-400 font-light">
    {isError ? 'Oops! Something went wrong. Can you please try again?' : 'Thank you for your message. I will get back to you as soon as possible.' }   
    </div>
    <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
      <button onClick={()=>setIsDialogOpen(false)}  className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-neutral-300 bg-neutral-700 hover:bg-neutral-600 focus:bg-neutral-600 active:bg-neutral-600" type="button">
        Close
      </button>
    </div>
  </div>
</div>
  )
}

export default Dialog;