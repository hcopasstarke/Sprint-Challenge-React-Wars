import React from 'react'
import './StarWars.css';
import {StarCharacters} from './StarCharacters'

export const StarCharacterCompMap = props => {
	console.log(props.chars)
	return (
		<div>
			{props.characters.map((character, index) =>
				(
					<div>
						<StarCharacters character={character} key={index} />
					</div>
				))}
		</div>
	)
}