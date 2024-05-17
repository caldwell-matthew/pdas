import ProfileCard from "./ProfileCard";
import alexaImg from './images/alexa.png';
import siriImg from './images/siri.png';
import cortanaImg from './images/cortana.png';
import 'bulma/css/bulma.css';

function App() {
	const data = [
		{
			title: 'Alexa',
			handle: 'alexa1234',
			desc: 'Alexa Lorem Ipsum is simply dummy text of the printing and typesetting',
			img: alexaImg
		},
		{
			title: 'Cortana',
			handle: 'goooooo',
			desc: 'Cortana Lorem Ipsum is simply dummy text of the printing and typesetting',
			img: cortanaImg
		},
		{
			title: 'Siri',
			handle: 'pearssux',
			desc: 'Siri Lorem Ipsum is simply dummy text of the printing and typesetting',
			img: siriImg
		}
	]

	return (
		<div className="container">
			<section className="hero is-primary">
				<div className="hero-body">
					<p className="title">
						Personal Assistants
					</p>
				</div>
			</section>
			<div className="section">
				<div className="columns">
				{
					data.map((e, key) => 
					<div className="column is-3">
						<ProfileCard 
						title={e.title} 
						handle={e.handle} 
						desc={e.desc}
						img={e.img}
					/>
					</div>)
				}
				</div>
			</div>
		</div>
	)
}

export default App;