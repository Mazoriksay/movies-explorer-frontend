import './AboutMe.css';
import me from '../../images/gon.jpg';

function AboutMe() {
    return(
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about-me__text-container'>
                    <h3 className='about-me__name'>Никита</h3>
                    <h4 className='about-me__description'>Фронтенд-разработчик, 19 лет</h4>
                    <p className='about-me__subtitle'>
                        Я родился и живу в Краснодаре, обучаюсь в университете КубГАУ на факультете прикладной информатики.
                        С недавних пор начал активно заниматься спортом, также увлекаюсь скейтбордингом и компьютерными играми.
                        После прохождения курса от Практикума полон энтузиазма и энергии, чтобы применить свои навыки и знания в реальных проектах.
                    </p>
                    <a className='about-me__github' href='https://github.com/Mazoriksay' target='_blank'>GitHub</a>
                </div>
                <img className='about-me__image' src={me} alt='Я'/>
            </div>
        </section>
        
    )
}

export default AboutMe;