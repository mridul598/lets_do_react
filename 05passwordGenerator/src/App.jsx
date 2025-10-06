import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberallowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "012356789"
    if(charactersAllowed) str += "!@#$%^&*(){}[]~`"
     
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
     pass += str.charAt(char)
    
    }
    setPassword(pass)

  }, [length, numberAllowed, charactersAllowed, setPassword])
 
   const [copied, setCopied] = useState(false);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1200);
  }, [password])

 

  useEffect(() => 
    {passwordGenerator()}, 
  [length, numberAllowed,charactersAllowed, setPassword, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref={passwordRef}
           />

           <button
  onClick={copyPasswordToClipboard}
  className='
    outline-none 
    border border-transparent
    bg-blue-700 text-white px-3 py-0.5 shrink-0
    transition duration-150 ease-in-out
    hover:bg-blue-800 active:bg-blue-900
    focus:outline-none focus:ring-2 focus:ring-blue-400
  '
>
  {copied ? 'copied!' : 'copy'}
</button>


        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer' 
              onChange={(e) => {setlength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                     defaultChecked={numberAllowed}
                     id='numberInput'
                     onChange={() => {
                     setNumberallowed((prev) => !prev)
              }} />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                     defaultChecked={charactersAllowed}
                     id='characterInput'
                     onChange={() => {
                     setCharactersAllowed((prev) => !prev)
              }} />
              <label htmlFor="numberInput">Characters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
