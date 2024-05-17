import React from 'react';

const ulStyle = { display: "flex", justifyContent: "center", listStyleType: "none" };

export function Footer() {
	return (
		<footer className="sticky-footer bg-white ">
			<div className="container my-auto  flex flex-row items-center justify-around">
				<section className="footer text-center my-auto">
					<strong>CONTACTO</strong>
					<ul style={ulStyle} className='flex-col items-center justify-center'>
						<li>
							Libertad N20 - Ciudad de Nieva - Jujuy
						</li>
						<li>
							Av Jujuy 1234 - Centro - Salta
						</li>
						<li>
							388-5489123 / 387-6423784
						</li>
					</ul>
				</section>
				<section>
					<strong>HORARIOS DE ATENCION</strong>
					<ul style={ulStyle} className='flex-col items-center justify-center'>
						<li>
							Lunes a Viernes 09:00 a 13:00 /
							17:00 a 21:00
						</li>
					</ul>
				</section>
				<section>
					<strong>NUESTRAS REDES</strong>
					<div id="img__redes"> <img src="/images/redes.svg" alt="fondo"/></div>
				</section>
				<section>
					<strong>METODOS DE PAGO</strong>
					<ul style={ulStyle} className='flex-col items-center justify-center'>
						<li>
							Efectivo
						</li>
						<li>
							Mercado Pago
						</li>
						<li>
							Transferencias bancarias
						</li>
						<li>
							Tarjetas de crédito
						</li>
					</ul>
				</section>
				<section>
					<strong>FAQ</strong>
				</section>
			</div>
		</footer>
	)
}