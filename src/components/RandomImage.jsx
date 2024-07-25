import { imageUs } from "../constants"
const RandomImage = () => {
  return (
    <div className="p-5 md:p-10">
        <div className="columns-1 gap-5 lg-gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
            {imageUs.map((item,index) =>(
                <img src={item.image} alt="images" />
            ))}
        </div>
    </div>
  )
}

export default RandomImage