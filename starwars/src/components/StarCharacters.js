import React from "react"
import "./StarWars.css"

import { Card } from "semantic-ui-react"

export const StarCharacters = props => {
	console.log(props.character.url)
	return (
		<div>
			<br />
			<Card color='white' className='card' style={{ margin: "auto", opacity: 0.9 }}>
				<Card.Content>
					<Card.Header className='font'>{props.character.name}</Card.Header>
					<Card.Meta> Age: {props.character.birth_year} </Card.Meta>
					<Card.Description> Gender: {props.character.gender} </Card.Description>
				</Card.Content>
			</Card>
		</div>
	)
}
