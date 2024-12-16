import { useContext, useState } from 'react'
import './questions.css'
import { GlobalState } from '../../App'

export default function Questions() {
	const {point, setPoint} = useContext(GlobalState);
	const [chiara, setChiara] = useState(false)
	const [firstQuestions, setFirstQuestions] = useState({
		first: true,
		second: true,
		third: true,
		fourth: true
	})
	const [secondQuestions, setSecondQuestions] = useState({
		first: true,
		second: true,
		third: true,
		fourth: true
	})
	const [thirdQuestions, setThirdQuestions] = useState({
		first: true,
		second: true,
		third: true,
		fourth: true
	})

	function handleRight(questionKey, setFirstQuestions) {
		setChiara(false)
		setPoint((prevState) => prevState + 1);
		setFirstQuestions((prevState) => ({
			...prevState,
			[questionKey]: true
		}));
	}

	function handleWrong(questionKey, setFirstQuestions) {
		setChiara(true)
		setFirstQuestions((prevState) => ({
			...prevState,
			[questionKey]: false,
		}));
	}

	return (
		<>
		<div className='containerQuestions'>
			{
				point === 0 &&
				<>
					<p>
						Sono il ponte invisibile che collega l’anima e l’orecchio, ma non possiedo forma fisica. Posso cambiare volto a seconda delle emozioni, eppure non esisto senza un corpo che mi faccia vibrare. Sono un’onda che scompare subito dopo essere stata percepita.
					</p>
					<span className='chiSono'><b>Chi sono?</b></span>
					<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
						{chiara && <img className='chiaraX' src="/ele-error-removebg-preview.png" alt="chiara" />}
					</div>
					<div className='questionsGroup'>
						<div className='questions2'>
							<span className={firstQuestions.first ? 'question' : 'questionNo'} onClick={() => handleWrong("first", setFirstQuestions)}>
								Il respiro
							</span>
							<span className={firstQuestions.second ? 'question' : 'questionNo'} onClick={() => handleWrong("second", setFirstQuestions)}>
								La musica
							</span>
						</div>
						<div className='questions2'>
							<span className={firstQuestions.third ? 'question' : 'questionRight'} onClick={() => handleRight("third", setFirstQuestions)}>
								La voce
							</span>
							<span className={firstQuestions.fourth ? 'question' : 'questionNo'} onClick={() => handleWrong("fourth", setFirstQuestions)}>
								Il pensiero
							</span>
						</div>
					</div>
				</>
			}
						{
				point === 1 &&
				<>
					<p>
						Non sono vivo, ma posso “ascoltare” e “parlare”. Non ho emozioni, ma posso ripetere tutto ciò che mi viene detto. Posso custodire un ricordo o un messaggio, ma non ricordo nulla senza essere attivato.
					</p>
					<span className='chiSono'><b>Chi sono?</b></span>
					<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
						{chiara && <img className='chiaraX' src="/ele-error-removebg-preview.png" alt="chiara" />}
					</div>
					<div className='questionsGroup'>
						<div className='questions2'>
							<span className={secondQuestions.first ? 'question' : 'questionNo'} onClick={() => handleWrong("first", setSecondQuestions)}>
								La macchina fotografica
							</span>
							<span className={secondQuestions.second ? 'question' : 'questionRight'} onClick={() => handleRight("second", setSecondQuestions)}>
								Il registratore
							</span>
						</div>
						<div className='questions2'>
							<span className={secondQuestions.third ? 'question' : 'questionNo'} onClick={() => handleWrong("third", setSecondQuestions)}>
								Il computer
							</span>
							<span className={secondQuestions.fourth ? 'question' : 'questionNo'} onClick={() => handleWrong("fourth", setSecondQuestions)}>
								Il telefono
							</span>
						</div>
					</div>
				</>
			}
						{
				point === 2 &&
				<>
					<p>
						Sono nascosto in un angolo, ma non posso essere ignorato. Vengo scelto con cura, ma la mia vera bellezza sta nel far sorridere chi mi riceve. Non sono vivo, ma porto con me emozioni che vivranno a lungo. A volte mi accompagna un fiocco, ma la mia forma è un segreto fino all’ultimo momento.
					</p>
					<span className='chiSono'><b>Chi sono?</b></span>
					<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
						{chiara && <img className='chiaraX' src="/ele-error-removebg-preview.png" alt="chiara" />}
					</div>
					<div className='questionsGroup'>
						<div className='questions2'>
							<span className={thirdQuestions.first ? 'question' : 'questionRight'} onClick={() => handleRight("first", setThirdQuestions)}>
								I regali di Natale
							</span>
							<span className={thirdQuestions.second ? 'question' : 'questionNo'} onClick={() => handleWrong("second", setThirdQuestions)}>
								I biglietti di auguri
							</span>
						</div>
						<div className='questions2'>
							<span className={thirdQuestions.third ? 'question' : 'questionNo'} onClick={() => handleWrong("third", setThirdQuestions)}>
								Le luci natalizie
							</span>
							<span className={thirdQuestions.fourth ? 'question' : 'questionNo'} onClick={() => handleWrong("fourth", setThirdQuestions)}>
								I piatti della cena
							</span>
						</div>
					</div>
				</>
			}
		</div>
		</>
	)
}