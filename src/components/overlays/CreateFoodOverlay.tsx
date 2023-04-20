import Footer from '../footers/feedFooter'
import { CreateFoodOverlayContainer } from './styles'
export default function CreateFoodOverlay() {
  return (
    <CreateFoodOverlayContainer>
      <button>Create Ingredient</button>
      <button>Create Recipe</button>
      <Footer />
    </CreateFoodOverlayContainer>
  )
}


