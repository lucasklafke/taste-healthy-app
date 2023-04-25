import { IoMenuSharp, IoSearchSharp } from 'react-icons/io5'
import { HeaderContainer } from './styles'
export default function Header() {
  return (
    <HeaderContainer>
      <div className='contentContainer'>
        <IoMenuSharp className='icon'/>
        <div className='searchContainer'>
          <label htmlFor='search' className='label' ><IoSearchSharp className='search'/></label>
          <input type="text" className='input' name='search' id='search' placeholder='Procure por receitas e ingredientes!'/>
        </div>
      </div> 
    </HeaderContainer>
  )
}
