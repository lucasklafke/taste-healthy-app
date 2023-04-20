import { IoAddOutline } from 'react-icons/io5'
import { Button } from './styles'
import { useState } from 'react'
export default function CreateFoodButton() {
  const [degrees, setDegrees] = useState<number>(0)
  const handleClick = () => {
    degrees === 0? setDegrees(45) : setDegrees(0)
  }
  return (
    <Button onClick={handleClick} degrees={degrees}>
      <IoAddOutline fontSize={32}/>
    </Button>
  )
}
