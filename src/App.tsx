import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardLink from './components/CardLink/CardLink';

function App() {
    useEffect(() => {
        const counter: number = Math.floor(Math.random() * 6) + 1;
        const bgDiv: HTMLDivElement | null = document.querySelector<HTMLDivElement>("#bg");
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
        <div id="bg">
            <main className="container">
                <section className="row row-cols-1 row-cols-md-1 row-cols-lg-3 text-center min-vh-100 align-items-center pb-4">
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
                </section>
            </main>
        </div>
    )
}

export default App;
