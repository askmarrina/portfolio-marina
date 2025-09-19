
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import book from '../../../assets/images/book.webp'
import cola from '../../../assets/images/cola.webp'
import magazine from '../../../assets/images/magazine.webp'
import orange from '../../../assets/images/orange.webp'
import plant from '../../../assets/images/plant.webp'
import sauce from '../../../assets/images/sauce.webp'
import {Work} from "../works/work/Work.tsx"


export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Latest Works</SectionTitle>
            <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'} >
                <Work src={sauce}
                      title={'Project title'}
                      text={'UI, Art drection'}/>
                <Work src={magazine}
                      title={'Project title'}
                      text={'UI, Art drection'}/>
                <Work src={orange}
                      title={'Project title'}
                      text={'UI, Art drection'}/>
                <Work src={plant}
                      title={'Project title'}
                      text={'UI, Art drection'}/>
                <Work src={cola}
                      title={'Project title'}
                      text={'UI, Art drection'}/>
                <Work src={book}
                      title={'Project title'}
                      text={'UI, Art drection'}/>

            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #c0ea9f;
`