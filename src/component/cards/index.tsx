import React from 'react';
import "./card.scss";
import img1 from '../../assets/image/home_bg1.jpg';
import img2 from '../../assets/image/home_bg2.jpg';
import img3 from '../../assets/image/home_bg3.jpg';
const Card = (props) => (
    <div className="card">
        <img src={props.imgUrl}
            alt={props.alt || 'Image'} />
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    </div>
);

const CardContainer = (props) => (
    <div className="cards-container">
        {
            props.cards.map((card) => (
                <Card title={card.title}
                    content={card.content}
                    imgUrl={card.imgUrl} />
            ))
        }
    </div>
);

const CardSlider: React.FC = () => {
    const cardsData = [
        { id: 1, title: 'DeFi Made Simple ', content: 'Swap DeFi tokens on the Cronos network with the lowest fees!', imgUrl: img1 },
        { id: 2, title: 'Become a Liquidity Provider', content: 'Supply liquidity to a pair to receive LP Tokens and earn Crow from trading fees!', imgUrl: img2 },
        { id: 3, title: 'Put Your Crows To Work', content: 'Simply stake your Crow tokens to earn passive income', imgUrl: img3 },
    ];
    return (
        <CardContainer cards={cardsData} />
    );
}

export default CardSlider;