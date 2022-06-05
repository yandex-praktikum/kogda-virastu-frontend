/* eslint-disable */
import { useMemo, FC } from 'react';
  import styled, { useTheme } from 'styled-components';
  
  import ReactDOM from 'react-dom';
  import { RegularText } from '../ui-lib';

  const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 95;
`;
 
  const ModalDialog = styled.div`
    position: relative;
    width: 267px;
    height: 32px;
    z-index: 97;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 30px 0;
    background-color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08), 0 0 4px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    @media screen and (max-width: 420px) {
      width: 200px;
    }
  `;
  
  const TagModal: FC<any> = ({message}) => {
    const theme = useTheme();
    const portalRoot = useMemo(() => document.getElementById('modal'), []) as Element;

    return ReactDOM.createPortal(
      (
        <ModalOverlay>
          <ModalDialog>
            <RegularText
              size='large'
              weight={400}
              sansSerif
              color={theme.bgPrimary}
            >
              {message}
            </RegularText>
          </ModalDialog>
          </ModalOverlay>

      ), portalRoot,
    );
  };
  
  export default TagModal;
  