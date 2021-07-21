import Modal from 'react-modal';

import { Container } from './styles';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestCode: () => void;
}

function NewTransactionModal({isOpen, onRequestCode}: NewTransactionModalProps) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestCode}
  >
    <h2>Cadastrar transação</h2>
  </Modal>
  );
};

export { NewTransactionModal };
