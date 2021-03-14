import React from "react"
import "./contact.css"
import { useForm } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("mknpdpwg")

  return (
    <div id="contact" className="min-h-35 scroll-target">
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
            <form
              onSubmit={handleSubmit}
              className="p-10 bg-gray-100 mb-5 rounded"
            >
              <div className="w-full mb-5">
                <label
                  className="mb-2 tracking-wide font-bold text-base text-red-600"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full bg-transparent border border-2 border-gray-400 focus:border-red-500 outline-none rounded p-1"
                  type="text"
                  name="name"
                  id="name"
                  required="required"
                ></input>
              </div>
              <div className="w-full mb-5">
                <label
                  className="mb-2 tracking-wide font-bold text-base text-red-600"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full bg-transparent border border-2 border-gray-400 focus:border-red-500 outline-none rounded p-1"
                  type="email"
                  name="email"
                  id="email"
                  required="required"
                ></input>
              </div>
              <div className="w-full mb-5">
                <label
                  className="mb-2 tracking-wide font-bold text-base text-red-600"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full bg-transparent border border-2 border-gray-400 focus:border-red-500 outline-none rounded p-1"
                  type="text"
                  name="subject"
                  id="subject"
                  required="required"
                ></input>
              </div>
              <div className="w-full mb-5">
                <label
                  className="mb-2 tracking-wide font-bold text-base text-red-600"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full bg-transparent border border-2 border-gray-400 focus:border-red-500 outline-none rounded p-1"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  required="required"
                ></textarea>
              </div>
              <button
                type="submit"
                name="submit"
                className="bg-red-500 hover:bg-red-700 outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 text-white p-2 rounded font-normal flex items-center"
              >
                Send message
                {state.submitting && (
                  <svg
                    className="inline"
                    x="0px"
                    y="0px"
                    width="25px"
                    height="25px"
                    viewBox="0 0 40 40"
                    enableBackground="new 0 0 40 40"
                  >
                    <path
                      opacity="0.2"
                      fill="#fff"
                      d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                    />
                    <path
                      fill="#fff"
                      d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
          C22.32,8.481,24.301,9.057,26.013,10.047z"
                    >
                      <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 20 20"
                        to="360 20 20"
                        dur="0.5s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                )}
              </button>
              {state.succeeded && !state.submitting && (
                <p className="mt-2 text-green-600 font-medium">
                  You message was successfully submitted.
                </p>
              )}
              {!!state.errors.length && !state.submitting && (
                <p className="mt-2 text-red-600 font-medium">
                  There was an error while sending your message.
                </p>
              )}
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
              <p className="font-light text-red-500 hover:text-red-700">
                +91 (7738845950)
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Email: </p>
              <p>
                <a
                  className="font-light text-red-500 hover:text-red-700"
                  href="mailto:rohitchavan@yahoo.com"
                >
                  rohitchavan@yahoo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
