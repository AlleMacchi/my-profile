import style from '../../../styles/pages/about/components/services/style.module.css'
import ServiceCard from '../../../components/card/ServicesCard'

import Data from '../../../data/Services/List.json'

const DataCards = Data;

export default function Services(){
    return(
        <div className={style.container}>
            {DataCards.map((DataCards) => (
                <div className={style.card}>
                    <ServiceCard 
                        key={DataCards.id} 
                        urlImage={DataCards.urlImage}
                        title={DataCards.title}
                        titleBackground={DataCards.titleBackground}                  
                        content={DataCards.content}
                        textButton={DataCards.textButton}
                        hasButton={DataCards.hasButton}
                    />
                </div>
            ))}
        </div>
    )
}