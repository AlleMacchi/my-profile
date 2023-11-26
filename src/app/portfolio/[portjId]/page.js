import style from '../../../styles/pages/portfolio/components/portfolioPage/style.module.css'
import Title from '../../../components/title/title'


export default function ProjectPage(){
return(
       <div className={`animate__animated animate__fadeIn animate__slower ${style.container} `}>
            <div className={style.titleBx}>
                <Title 
                    /* Title */
                    firstPartTitle='BERNECK®'
                    secondPartTitle=''
                    /* Subtitle */
                    firstPartSubtitle='IMAL srl '
                    secondPartSubtitle='1st June 2016'/>
            </div>

            <div className={style.wrapper}>
                <div className={style.imageBx}>
                    <img src='/images/Project_01.jpg' />
                </div>
                <div className={style.textBx}>
                    <h2>industry</h2>
                    <h4>manufacturing process</h4>

                    <h2>used technology</h2>
                    <div className={style.techBx}>
                        <ul>
                            <li><span>PLC: </span>CPUSafe Siemens</li>
                            <li><span>Language: </span>Ladder</li>
                            <li><span>Network: </span>Profinet</li>
                            <li><span>Safe Net: </span>Profinet</li>
                            <li><span>SCADA: </span>Wonderware</li>
                            <li><span>Electric connection: </span>Cable</li>
                            <li><span>Mechanical: </span>Heavy</li>
                            <li><span>Hydraulic: </span>Oil & Air</li>
                        </ul>
                    </div>
                    <h2>Where</h2>
                    <h4>Brazil</h4>
                </div>
            </div>

            <div className={style.overviewWrapper}>
                <h2>Overview</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras sit amet lorem erat. Nulla viverra quis odio nec aliquam. 
                    Pellentesque ut odio in urna venenatis bibendum. Curabitur 
                    eleifend pretium justo, et aliquet lacus tincidunt non. Vivamus 
                    fermentum tellus et tempus porta. Quisque ornare metus at tempus 
                    placerat. Etiam quam diam, porta et eleifend eu, commodo et tortor. 
                    Curabitur condimentum a ligula dictum auctor. Aenean porta 
                    ultricies ullamcorper. Donec et erat turpis. Mauris et sem in turpis
                     vestibulum rutrum. Mauris egestas, orci non rutrum euismod, nulla 
                     tortor facilisis risus, id sagittis mi purus vitae justo. Vestibulum 
                     feugiat lectus cursus ex consequat vehicula. Integer sagittis ut 
                     tellus congue volutpat. Proin mattis libero eget elementum rhoncus.
                </p>
            </div>

            <div className={style.contentBx}>
                <div className={style.paragraph01}>
                    <h2>Production Process</h2>
                    <br />
                    <p> Wood Fiber Preparation: Design a process for breaking down wood into fibers efficiently.<br />
                        Resin and Wax Mixing: Establish a controlled environment for combining resin and wax with wood fibers.<br />
                        Forming Panels: Develop a method for forming panels under high temperature and pressure.<br />
                        Curing and Finishing: Implement a curing process and finishing touches to ensure product durability and quality.<br />
                        <br />
                        Energy Efficiency:<br />
                        Optimized Heating System: Consider energy-efficient heating systems to reduce operational costs.<br />
                        Waste Heat Recovery: Implement systems to capture and reuse waste heat generated during production.<br />
                        <br />
                        Quality Control:<br />
                        Automated Inspection: Utilize sensors and automated systems for real-time quality control.<br />
                        Testing Protocols: Develop testing protocols to ensure compliance with industry standards.<br />
                        <br />
                        Environmental Impact:<br />
                        Waste Management: Implement a comprehensive waste management system for by-products.<br />
                        Sustainability Measures: Consider sustainable practices in wood sourcing and production processes.<br />
                    </p>
                </div>
                <div className={style.paragraph02}>
                    <h2>Automation and Technology</h2>
                    <br />
                    <p>Industry 4.0 Integration: Incorporate automation and data analytics for improved efficiency.<br />
                        Remote Monitoring: Implement systems for remote monitoring and control of the production process.<br />
                    </p>
                </div>
                <div className={style.image01}><img src='/images/Project_01_img_01.jpg' /></div>
                <div className={style.paragraph03}>
                    <h2>Challenges and Solutions</h2>
                    <br />
                    <p>Regulatory Compliance:<br />
                        Environmental Regulations: Stay compliant with environmental regulations to minimize negative impacts.<br />
                        Quality Standards: Ensure adherence to industry quality standards and certifications.<br />
                        <br />
                        Cost Management:<br />
                        Operational Costs: Monitor and optimize operational costs through efficient resource utilization.<br />
                        Investment Planning: Strategically plan investments in technology and infrastructure.<br />
                        <br />
                        Market Demand:<br />
                        Forecasting: Use market research and demand forecasting to adjust production volumes accordingly.<br />
                        Product Innovation: Stay agile in adapting to changing market preferences and trends.<br />
                    </p>
                </div>
                <div className={style.image02}><img src='/images/Project_01_img_03.jpg' /></div>
            </div>
            
            <div className={style.conclusionBx}>
                <div className={style.conculsionImage}>
                    <h2>Conclusion</h2>
                    <img src='/images/Project_01_img_02.jpg'></img>
                </div>
                <div className={style.conclusionText}>
                    <p>
                    Summarize the key aspects of the MDF production system, highlighting its efficiency, sustainability, and adherence to quality standards. Emphasize the system's ability to adapt to market changes and regulatory requirements.<br />

                    Recommendations:<br />
                    Provide recommendations for ongoing improvements, such as exploring new technologies, expanding sustainability initiatives, and staying updated on industry advancements.<br />

                    This case study outline provides a foundation for detailed analysis and development of a comprehensive MDF production system. Each component requires in-depth exploration and consideration for successful implementation.<br />
                    </p>
                </div>

            </div>
        </div>
    )
}