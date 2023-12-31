import './Techs.css';

function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <div className='techs__container'>
                <h3 className='techs__caption'>7 технологий</h3>
                <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className='techs__grid-container'>
                <div className='techs__card'><p className='techs__card-text'>HTML</p></div>
                <div className='techs__card'><p className='techs__card-text'>CSS</p></div>
                <div className='techs__card'><p className='techs__card-text'>JS</p></div>
                <div className='techs__card'><p className='techs__card-text'>React</p></div>
                <div className='techs__card'><p className='techs__card-text'>Git</p></div>
                <div className='techs__card'><p className='techs__card-text'>Express.js</p></div>
                <div className='techs__card'><p className='techs__card-text'>mongoDB</p></div>
            </div>
        </section>
    )
}

export default Techs;