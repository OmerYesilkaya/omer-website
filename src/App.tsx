import styled from "styled-components";

function App() {
    return (
        <Center>
            <Box>
                <Header>OMER YESILKAYA</Header>
            </Box>
        </Center>
    );
}

export default App;

const Center = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Box = styled.div`
    border-radius: 8px;
    border: 8px solid #22db88;
    width: 50%;
    height: 33%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 0 16px;
`;

const Header = styled.div`
    font-family: "Questrial", sans-serif;
    font-size: 56px;
    font-weight: 600;
`;
