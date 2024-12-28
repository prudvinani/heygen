
const Doit = () => {
  return (
    <div>

        {/* do it */}
        <div className="grid grid-rows-1 md:grid-cols-2 px-10 md:mx-56 mt-10">
            <div>
            <video
    className="rounded-3xl px-5"
    src="https://res.cloudinary.com/diqmvbeg6/video/upload/f_auto,q_auto/v1727308222/HeyGen-2.0-StreamingAvatar-1400x1600-081524_npuqow.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
            </div>

            <div>
                <p className='md:text-5xl text-3xl pt-8' >Do it live</p>
                <p className='mt-4'>Your customers can speak to your avatar live. They ask questions and an avatar responds, using your knowledge base and an LLM to enable a natural conversation with a person, not a painful interaction with a chat-bot.</p>
                <button className='text-white bg-black px-4 py-3 rounded-full mt-6'>See a demo</button>

            </div>
        </div>
    </div>
  )
}

export default Doit