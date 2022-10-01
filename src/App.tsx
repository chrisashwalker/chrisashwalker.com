import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardLink from './components/CardLink/CardLink';

function App() {
    useEffect(() => {
        const counter: number = Math.floor(Math.random() * 6) + 1;
        const bgDiv: HTMLElement | null = document.querySelector<HTMLElement>(".cw-bg");
        if (bgDiv) {
            bgDiv.style.width = "100%";
            bgDiv.style.height = "100%";
            bgDiv.style.backgroundImage = "url('bg" + counter + "b.jpeg')";
            bgDiv.style.backgroundSize = "cover";
            bgDiv.style.backgroundRepeat = "no-repeat";
            bgDiv.style.backgroundAttachment = "scroll";
        }
    });

    return (
        <Container fluid className="cw-bg">
            <Row xs={1} lg={3} className="min-vh-100 align-items-center pb-4">
                <CardLink
                    img="instagramSnip.png"
                    url="https://instagram.com/chrisashwalker"
                    text="instagram.com/chrisashwalker"
                />
                <CardLink
                    img="linkedinSnip.png"
                    url="https://linkedin.com/in/chrisashwalker"
                    text="linkedin.com/in/chrisashwalker"
                />
                <CardLink
                    img="githubSnip.png"
                    url="https://github.com/chrisashwalker"
                    text="github.com/chrisashwalker"
                />
            </Row>
        </Container>
    )
}

export default App;
