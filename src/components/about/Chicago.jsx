import './Chicago.css';
import owners1 from '../../images/Mario and Adrian A.jpg';
import owners2 from '../../images/Mario and Adrian b.jpg';

export function Chicago() {
	return (
		<>
			<section className='about'>
				<div className='container'>
					<div className='aboutWrapper'>
						<div className='aboutLeft'>
							<h1 className='aboutHeading'>Little Lemon</h1>
							<p className='aboutSubHeading'>Chicago</p>
							<p className='aboutText'>
								We are a family owned Mediterranean restaurant, focused on traditional
								recipes served with a modern twist.
							</p>
							<p className='aboutText'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
								voluptatibus at culpa recusandae. Maiores labore aliquam quis odit
								aperiam debitis.
							</p>
							<p className='aboutText'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
								consequatur ab a voluptate adipisci fuga ea delectus explicabo quaerat
								velit odit ipsam pariatur, omnis ipsa esse autem. Porro, nam ducimus!
							</p>
						</div>
						<div className='aboutRight'>
							<img
								className='aboutImage aboutImageTop'
								src={owners1}
								alt=''
							/>
							<img
								className='aboutImage aboutImageBottom'
								src={owners2}
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
