import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

function Article({hit, sendEvent}) {
  return (
    <article className="card">
    <img src={hit.image_url} alt={hit.name} className="object-cover w-full h-fit mb-3"/>
    <div>
        <h5 className="font-bold text-base mb-2" onClick={() => {
          sendEvent('click', hit, 'Article Clicked');
        }}>
          {hit.title}
        </h5>
        <div className="flex ">
        <FaRegThumbsUp className="mr-2" onClick={() => sendEvent('conversion', hit, 'Thumbs up')} />
        <FaRegThumbsDown />
        </div>
    </div>
  </article>
  )
}
export default Article