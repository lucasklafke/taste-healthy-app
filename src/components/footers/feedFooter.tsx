import { useState } from 'react'
import { CreateFoodOverlayContainer } from './styles'
import { IoAddOutline } from 'react-icons/io5'
import {FooterContainer} from './styles' 
import {IoAlbums, IoPersonSharp, } from 'react-icons/io5'
export default function Footer() {
  const [overlayVisible, setOverlayVisible] = useState<Boolean>(false)
  const [degrees, setDegrees] = useState<number>(0)
  const handleClick = () => {
    degrees === 0? setDegrees(45) : setDegrees(0)
    setOverlayVisible(!overlayVisible)
  }
  return (
    <>{
      overlayVisible?
        <CreateFoodOverlayContainer>
          <button>Create Ingredient</button>
          <button>Create Recipe</button>
          <FooterContainer degrees={degrees}>
            <div className='icon'>
              <IoPersonSharp color='#333333' fontSize={28}/>
            </div>
            <div className='addOverlay' >
              <IoAddOutline fontSize={32} className='button' onClick={handleClick}/>
            </div>
            <div className='icon'>
              <IoAlbums fontSize={28} color='#333333'/>
            </div>
          </FooterContainer>
        </CreateFoodOverlayContainer>
        :
        <FooterContainer degrees={degrees}>
          <div className='icon'>
            <IoPersonSharp color='#333333' fontSize={28}/>
          </div>
          <div className='addOverlay' >
            <IoAddOutline fontSize={32} className='button' onClick={handleClick}/>
          </div>
          <div className='icon'>
            <IoAlbums fontSize={28} color='#333333'/>
          </div>
        </FooterContainer>
    }
    </>
  )
}


// export default function CreateFoodButton() {
//   return (
//     <Button onClick={handleClick} degrees={degrees}>
//       <IoAddOutline fontSize={32}/>
//     </Button>
//   )
// }