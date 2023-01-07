import Image from 'next/image';
import classes from './hero.module.css';

export const Hero = () => (
	<section className={classes.hero}>
		<div className={classes.image}>
			<Image />
		</div>
		<h1>Hello, I'm Darya</h1>
		<p>I'm a frontend React developer.</p>
	</section>
);
