import { CalllToAction } from '../hero/CallToAction';
import { Specials } from '../specials/Specials';
import { CustomersSay } from '../testimonials/CustomersSay';
import { Chicago } from '../about/Chicago';
import './main.css';

export function Main() {
	return (
		<>
			<main>
				<CalllToAction></CalllToAction>
				<Specials></Specials>
				<CustomersSay></CustomersSay>
				<Chicago></Chicago>
			</main>
		</>
	);
}
