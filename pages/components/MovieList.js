import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div key={movie.imdbID} className='images'>
					<Image  className='image' src={movie.Poster} alt='movie'/>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;