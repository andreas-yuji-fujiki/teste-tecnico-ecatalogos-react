// imports
import styled from 'styled-components'

interface SearchBtnProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// function
export default function ProductSearchBtn( { onClick } : SearchBtnProps) {
  return (
    <ProductSearchBtnWrapper onClick={onClick}>
        <img src="/images/search-btn-icon.svg" alt="Pesquisar por referência" />
    </ProductSearchBtnWrapper>
  )
}

// styles
const ProductSearchBtnWrapper = styled.button`
  display: flex;
  width: 35px;
  height: 35px;

  img{
    width: 100%;
  }
`