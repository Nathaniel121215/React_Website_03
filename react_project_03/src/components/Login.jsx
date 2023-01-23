import React, { useState } from 'react';
import Modal from 'react-modal'

function Login() {

    const[modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <Modal isOpen={modalIsOpen} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col max-w-[400px] mx-auto my-8">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
      <p class="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <div className="bg-[#cc4839] hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">Sign In</div>
      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
</Modal>
  )
}

export default Login