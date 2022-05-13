import {Link} from 'react-router-dom'
import styled from 'styled-components';


const Heading = styled.h2`
color: ${((props) => props.theme.headerNofound)};
font-size: 118px;
font-family: ${({ theme: { secondLevelHeading: { family } } }) => family};
line-height: 118px;
font-weight: ${({ theme: { secondLevelHeading: { weight } } }) => weight};
text-align: center;
margin-bottom: 24px;
`
const NotFoundStyle = styled.section`
    box-sizing: border-box;
    padding-top:80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height:747px;
`
const LinkStyle = styled(Link)`
    color: ${((props) => props.theme.markedText)};
`
const Text = styled.p`
max-width: 297px;
text-align: center;
margin: 0;
font-family: ${({ theme: { text18Sans: { family } } }) => family};
  font-size: ${({ theme: { text18Sans: { size } } }) => size}px;
  font-weight: ${({ theme: { text18Sans: { weight } } }) => weight};
  line-height: ${({ theme: { text18Sans: { height } } }) => height}px;
`

const  NotFound = () => {
    return(
        <NotFoundStyle>
        <Heading >
            404
        </Heading>
        <div>
      <Text> Страница не найдена.</Text>
      <Text>Чтобы читать блог, перейдите на <LinkStyle to='/'> Главную</LinkStyle></Text>
      </div>
      </NotFoundStyle>
    )
}
export default NotFound
