export default function Contact() {
    return (
      <div id="contact" className="md:p-20 p-5">
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl">
              <h1 className="text-5xl font-bold text-center p-20"><span className="text-third">Contact</span> Us</h1>
              <div className="flex flex-col gap-2 justify-center max-w-xl mx-auto pb-10 px-5">
                  <input className="rounded-md p-2 outline-0 border-2 border-slate-300" type="text" placeholder="Full Name" />
                  <input className="rounded-md p-2 outline-0 border-2 border-slate-300" type="text" placeholder="Email Address" />
                  <input className="rounded-md p-2 outline-0 border-2 border-slate-300" type="text" placeholder="Phone Number" />
                  <textarea className="rounded-md p-2 min-h-56 outline-0 border-2 border-slate-300 resize-none" placeholder="Have anything to say" />
                  <button className="mt-5 p-3 transition-all bg-third text-white rounded-md hover:bg-fourth">Send</button>
              </div>
          </div>
      </div>
    )
  }
  