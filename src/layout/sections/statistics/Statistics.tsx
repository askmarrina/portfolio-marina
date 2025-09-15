
import styled from "styled-components";


export const Statistics = () => {
    return (
        <StyledStatistics>

                <StatisticsItem>
                    <div>81</div>
                    <div>Happy Customers</div>
                </StatisticsItem>
                <StatisticsItem>
                    <div>97+</div>
                    <div>Completed Projects</div>
                </StatisticsItem>
                <StatisticsItem>
                    <div>50</div>
                    <div>Awards won</div>
                </StatisticsItem>

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