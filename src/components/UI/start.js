import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
if(!stars){
  return <p className="text-sm text-gray-500">No customer reviews</p>
}

  return (
      
<>
<div className="flex items-center gap-2">
{Array.from({ length: stars }, (_, i) => (


<div className="flex items-center gap-1">
<svg
  className="w-4 h-4 fill-current text-orange-400"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
>
  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
</svg>
  </div>

))}
{reviews && (
  <p className="text-sm text-gray-500">({reviews} customer reviews)</p>
)}
</div>
</>

  );
};

export default Star;
