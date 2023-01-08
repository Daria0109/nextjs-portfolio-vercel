import Image from 'next/image';
import classes from './hero.module.css';

export const Hero = () => (
	<section className={classes.hero}>
		<div className={classes.image}>
			<Image src="/images/site/hero.jpg" alt="Darya Frontend developer" width={300} height={300} />
		</div>
		<h1>Hello, my name is Darya. I am a JavaScript developer.</h1>
		<p>Welcome to my personal blog about Frontend and frontender's Life :)</p>
	</section>
);
