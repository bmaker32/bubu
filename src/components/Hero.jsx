import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            The <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>Most Beautiful Girl</span><br/> there is.
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-4xl'> It's incredible how a single snap text brought us here, weaving a beautiful story from such a simple start. Every moment with you feels like magic, and I wouldn't trade it for anything.</p>
        <div className="flex justify-center my-10">
            <a href="#" className='py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-800 round-md mx-3'>Create acccount</a>
            <a href="#" className='py-3 px-4 border round-md mx-3'>Sign in</a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src={video1} type='video/mp4'/>
                Your Browser doesnt support the video
            </video>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src={video2} type='video/mp4'/>
                Your Browser doesnt support the video
            </video>
        </div>
    </div>
  )
}

export default Hero