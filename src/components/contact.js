import React from "react"
import "./contact.css"
// import { StaticImage } from "gatsby-plugin-image"

const Contact = ({}) => {
  return (
    <div className="min-h-35">
      <section className="sm:px-10 lg:px-40 grid grid-cols-1">
        <div className="col-span-1">
          <div className="my-10 flex flex-wrap flex-col head-title row-span-1">
            <h2 className="text-4xl font-bold">Contact Me</h2>
            <p className="text-base text-gray-600">
              Have something to say ? Feel free to reach out to me.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 px-5 xl:px-20 md:grid-cols-2 gap-10">
          <div className="col-span-1">
            <form className="p-10 bg-gray-100 mb-5 rounded">
              <div className="w-full mb-5">
                <input
                  className="w-full bg-transparent border border-2 border-gray-400 focus:border-red-500 outline-none rounded p-1"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required="required"
                ></input>
              </div>
              <div className="w-full mb-5">
                <input
                  className="w-full bg-transparent border border-2 border-gray-400 focus:border-red-500 outline-none rounded p-1"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required="required"
                ></input>
              </div>
              <div className="w-full mb-5">
                <input
                  className="w-full bg-transparent border border-2 border-gray-400 focus:border-red-500 outline-none rounded p-1"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                ></input>
              </div>
              <div className="w-full mb-5">
                <textarea
                  className="w-full bg-transparent border border-2 border-gray-400 focus:border-red-500 outline-none rounded p-1"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  required="required"
                ></textarea>
              </div>
              <button
                type="submit"
                name="submit"
                className="bg-red-500 hover:bg-red-700 outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 text-white p-2 rounded font-normal"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="flex flex-col flex-wrap">
            <h5 className="text-xl font-bold mb-4">
              For hiring or any other queries
            </h5>
            <p className="mb-6">
              If you like my work and want to hire me or just have a friendly
              conversation, don't hesitate to reach out to me on my email or
              phone. Would love to collaborate and learn with like minded
              people.
            </p>
            <div className="flex flex-col mb-4">
              <p className="font-bold">Phone: </p>
              <p className="font-light">+91 (7738845950)</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Email: </p>
              <p><a className="font-light text-red-500 hover:text-red-700" href="mailto:rohitchavan@yahoo.com">rohitchavan@yahoo.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
