import { Card } from '@components/Card';

export default function Dashboard() {
	fetch(`http://localhost:3000/api/proxy`).then((res) => {
		console.log(res);
	});

	return (
		<Card>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Exercitationem vitae esse alias ea quasi nostrum maxime soluta
				veniam aspernatur, eos minima neque doloremque in debitis
				dignissimos aut! At tempora maxime perspiciatis a veniam fuga
				distinctio et dolorum inventore aspernatur! Commodi vero
				aspernatur nesciunt hic vitae sint porro doloribus minus itaque
				eligendi ad rem eius minima, voluptatum iure ipsam facere
				nostrum exercitationem. Eos aliquid in numquam labore provident
				culpa delectus illo odio dolor maiores animi asperiores eveniet
				tempora soluta, autem dolorem, et veniam. Voluptatem, deleniti
				reprehenderit quasi illo laudantium iusto! Rem fugit nostrum
				libero! Sit delectus reiciendis consequatur cumque itaque
				magnam?
			</p>
			<p>
				Vitae, adipisci assumenda! Sunt dolorum quam soluta! Fugiat
				ipsam earum eaque, voluptatibus placeat itaque sint! Vel, quas
				esse exercitationem, necessitatibus earum nulla eligendi quidem
				enim assumenda ab corporis, neque deleniti aliquam qui eos ullam
				amet nisi aperiam sequi. Quia, voluptatibus. Ea iure totam
				consequuntur ipsum recusandae excepturi delectus qui saepe.
				Voluptates consequatur neque ducimus nam quos, sed nemo! Dolore
				ut quod eos dolorem quasi vel. Quia, fugiat corporis dignissimos
				at excepturi, reiciendis quis error vitae omnis quaerat dolorem
				perferendis id porro! Assumenda eligendi enim ipsam eius
				accusantium dolore ratione sapiente cumque repudiandae ex
				suscipit praesentium corrupti, mollitia architecto eaque
				tenetur.
			</p>
			<p>
				Harum laboriosam nemo ipsa nam ipsum quia sapiente libero
				provident quaerat sint labore non, repellat consectetur soluta
				dignissimos molestias eaque. Deleniti, cupiditate accusantium.
				Enim provident velit doloribus impedit ad, id repellat fugiat
				tenetur, debitis numquam praesentium consequatur perferendis!
				Explicabo voluptate velit, dolor nihil quaerat quas ducimus
				officiis. Ratione ipsa sequi ipsam, soluta facere voluptatibus
				aperiam fugiat eligendi accusantium pariatur, officiis neque
				laudantium id velit sunt praesentium alias. Unde, quos cum
				dolores harum id cumque perferendis facere eos magnam deleniti
				repellat velit fugiat commodi illum magni dicta quo alias
				tempore numquam. Mollitia explicabo consequuntur obcaecati
				ducimus dolor, optio sed necessitatibus corporis.
			</p>
			<p>
				Odio minus officiis consequuntur ratione doloribus totam
				cupiditate error natus, veritatis sunt excepturi ipsam omnis
				dicta ea modi. Voluptatem eaque quis quae explicabo, molestiae
				animi consequatur perferendis repudiandae eum blanditiis!
				Consequatur, corrupti voluptates error delectus quo tempora vel
				beatae ipsam esse aut facere a ipsum est! Quidem, iure
				perspiciatis nam blanditiis, rem eaque molestias reprehenderit
				asperiores vero harum sequi nulla mollitia odio eveniet fuga
				repudiandae! Aperiam nulla autem enim debitis a harum ipsam eum
				ducimus est aliquid, quo, saepe veniam rerum laudantium odit non
				fugiat consectetur repudiandae laboriosam. Ipsum iste fuga
				consectetur deleniti, saepe est nihil eaque possimus error
				facere.
			</p>
		</Card>
	);
}
