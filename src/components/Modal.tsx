import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
  width: 50%;
`

const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const ModalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ModalListItem = styled.li`
  margin-bottom: 10px;
`

const Modal = ({ isOpen, onClose, title, list }: any) => {
  if (!isOpen) return null

  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <ModalClose onClick={onClose}>X</ModalClose>
        <ModalTitle>{title}</ModalTitle>
        <ModalList>
          {list.map((item: any, index: any) => (
            <ModalListItem key={index}>{item}</ModalListItem>
          ))}
          <NavLink to="/contact">
            <button className="flex rounded-md justify-center p-4 w-1/2 text-center  my-4 mx-auto outline-none bg-[#5C5C5C] text-white">
              Faça seu orçamento!
            </button>
          </NavLink>
        </ModalList>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
