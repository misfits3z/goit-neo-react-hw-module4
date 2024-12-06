

export default function ImageCard ({image}){

    return(
        <li>
          <a href={image.urls.full} target="_blank" rel="noopener noreferrer">
            <img src={image.urls.thumb} alt={image.alt_description} />
          </a>
        </li>

    )
}

// export default function ImageCard ({image}){

//     return(
//     <div>
//       <img 
//         src={image.urls.thumb}
//         alt={image.alt_description}
//         // onClick={handleClick} 
//         />
//     </div>

//     )
// }