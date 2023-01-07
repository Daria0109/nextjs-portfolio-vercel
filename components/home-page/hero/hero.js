import Image from 'next/image';
import classes from './hero.module.css';

export const Hero = () => (
	<section className={classes.hero}>
		<div className={classes.image}>
			<Image src="/images/site/hero.jpg" alt="Darya Frontend developer" width={300} height={300} />
		</div>
		<h1>Hello, I'm Darya</h1>
		<p>I'm a frontend React developer.</p>
	</section>
);
