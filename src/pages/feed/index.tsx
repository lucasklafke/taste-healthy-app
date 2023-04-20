import Header from '@/components/headers/Header'
import FoodContainer from '@/components/foodContainer/FoodContainer'
// import {IoArrowDownSharp} from 'react-icons/io5'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import styles from '@/styles/feed.module.css'
// import OpenOverlayButton from '@/components/buttons/OpenOverlayButton'
import Footer from '@/components/footers/feedFooter'
export default function Feed() {
  useEffect(() => {
    setDocumentVisible(document.body)
  },[])

  const [documentVisible, setDocumentVisible] = useState<HTMLElement | null>(null)
  const filterOptions = [
    { value: 'todos', label: 'todos' },
    { value: 'receitas', label: 'receitas' },
    { value: 'ingredientes', label: 'ingredientes' }
  ]
  const orderOptions = [
    { value: 'Mais Recentes', label: 'Mais Recentes' },
    { value: 'Mais Populares', label: 'Mais Populares' },
    { value: 'Mais avaliados', label: 'Mais Avaliados' }
  ]
  const customStyles:any = {
    container: (provided:any) => ({
      ...provided,
      marginTop: '8px',
      minWidth: '140px'
    }),
    control: (provided:any) => ({
      ...provided,
      borderRadius: '5px',
      borderColor: '#ccc',
      zIndex: 5,
      height:'30px',
      minHeight: '24px',
      fontSize: '12px'
    }),
    option: (provided:any, state:any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#ccc' : 'transparent',
      color: '#000',
      zIndex: 5,
      fontSize: '12px',
      ':hover': {
        backgroundColor: '#eee',
      },
      menuPortal: (provided:any) => ({
        ...provided,
        zIndex: 2,
      }),
    }),
    indicatorSeparator: (provided:any) => ({
      ...provided,
      height: '16px', // set the height of the separator
    }),
    indicatorsContainer: (provided:any) => ({
      ...provided,
      height: '100%'
    }),
    dropdownIndicator : (provided:any) => ({
      ...provided,
      paddingTop: '8px', // set the top padding of the arrow
      paddingBottom: '8px', // set the bottom padding of the arrow
      width: '20px', // set the width of the arrow
      height: '20px',
      padding: '2px',
      boxSizing: 'none'
    })
  }
  return (
    <div className={styles.page}>
      <Header />
      <h1 className={styles.title}>Ache a sua refeição ideal!</h1>
      <hr className={styles.separator}/>
      <div className={styles.filters}>
        {/* <div>
          <input type="checkbox" name='dishes' />
          <label htmlFor="dishes">Receitas</label>
        </div>
        <div>
          <input type="checkbox" name='ingredients' />
          <label htmlFor="ingredients">Ingredientes</label>
        </div> */}
        <div>
          <label htmlFor="">Filtrar</label>
          {documentVisible? <Select
            options={filterOptions}
            isClearable={false}
            placeholder=""
            defaultValue={filterOptions[0]}
            styles={customStyles}
            menuPortalTarget={documentVisible}
            menuPosition={'fixed'} 
          />: null}
        </div>
        <div>
          <label htmlFor="">Ordenar</label>
          {documentVisible? <Select
            options={orderOptions}
            isClearable={false}
            placeholder=""
            defaultValue={orderOptions[0]}
            styles={customStyles}
            menuPortalTarget={documentVisible}
            menuPosition={'fixed'} 
          />: null}
        </div>
      </div>
      <main className={styles.feedContent}>
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
      </main>
      <Footer/>
    </div>
  )
}
