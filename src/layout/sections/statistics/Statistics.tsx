
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Statistics = () => {
    return (
        <StyledStatistics>
            <FlexWrapper justify={'space-around'} wrap={'wrap'} gap={'50px'} align={'center'}>
                <StatisticsItem>
                    <span>81</span>
                    <div>Happy Customers</div>
                </StatisticsItem>
                <StatisticsItem>
                    <span>97+</span>
                    <div>Completed Projects</div>
                </StatisticsItem>
                <StatisticsItem>
                    <span>50</span>
                    <div>Awards won</div>
                </StatisticsItem>
            </FlexWrapper>




        </StyledStatistics>
    );
};

const StyledStatistics = styled.section`
    min-height: 30vh;
    display: flex;
    justify-content: space-around;
    gap: 50px;
    background-color: #b3c5ea;
    align-items: center;
`

const StatisticsItem = styled.div`
    display: flex;
    flex-direction: column;
`