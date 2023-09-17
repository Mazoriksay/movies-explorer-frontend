import '../AboutProject/AboutProject.css';

function AboutProject() {
    return (
        <section className='about' id='about-project'>
            <h2 className='about__title'>О проекте</h2>
            <div className='about__container'>
                <div className='about__text-content'>
                    <h3 className='about__caption'>Дипломный проект включал 5 этапов</h3>
                    <p className='about__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about__text-content'>
                    <h3 className='about__caption'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about__grid-container'>
                <div className='about__line about__line_type_green'><p className='about__line-text'>1 неделя</p></div>
                <div className='about__line about__line_type_gray'><p className='about__line-text'>4 недели</p></div>
                <div className='about__line about__line_type_black'><p className='about__line-text'>Back-end</p></div>
                <div className='about__line about__line_type_black'><p className='about__line-text'>Front-end</p></div>
            </div>
        </section>
    )
}

export default AboutProject;