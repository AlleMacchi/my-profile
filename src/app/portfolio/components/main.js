import PortfolioCard from "../../../components/card/PortfolioCard";

import style from '../../../styles/pages/portfolio/components/main/style.module.css'

import Data from '../../../data/Portfolio/List.json'

const DataCards = Data;

export default function BlogMain(){
    return(
        <div className={style.container}> 
            {DataCards.map((DataCards) => (
                <PortfolioCard
                    key={DataCards.id} 
                    urlImage={DataCards.urlImage}
                    date={DataCards.date}
                    company={DataCards.company}
                    title={DataCards.title}
                    text={DataCards.text}
                    textButton={DataCards.textButton}
                    hasButton={DataCards.hasButton}

                />
            ))}
        </div>        
    )
}