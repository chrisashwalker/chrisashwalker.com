import "./CardLink.css";

const CardLink = (props: {img: string, url: string, text: string}) => {

    return (
        <div className="col mt-4">
            <div className="card bg-secondary cw-hover">
                <img className="card-img-top" src={props.img} />
                <div className="card-body">
                    <p className="card-text">
                        <a className="stretched-link text-light" href={props.url}>
                            {props.text}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )

}

export default CardLink;