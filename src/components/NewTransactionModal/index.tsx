import Modal from 'react-modal';
import { Container, ButtonCloseModal, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  onCloseRequestModal: () => void;
  isOpenModal: boolean;
}

Modal.setAppElement("#root");

export function NewTransactionModal({ isOpenModal, onCloseRequestModal }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseRequestModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ButtonCloseModal type="button" onClick={onCloseRequestModal} className="button-close-react-modal">
        <img src={closeImg} alt="Sair do modal" />
      </ButtonCloseModal>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Título" />
        <input type="text" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}