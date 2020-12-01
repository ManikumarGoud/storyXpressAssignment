import axios from "axios";

const GENRESAPI =
	"https://api.themoviedb.org/3/genre/movie/list?api_key=3aa42666769d5d67b81910715e8f560c&language=en-US";


    export const getMovies = async (url) => {
	try {
		const {
			data: { results },
		} = await axios.get(url);
		return results;
	} catch (error) {
		return error;
	}
};

export const getGenres = async () => {
	try {
		const {
			data: { genres },
		} = await axios.get(GENRESAPI);
		return genres;
	} catch (error) {
		return error;
	}
};

export const findGenre = async (id) => {
	try {
		const {
			data: { genres },
		} = await axios.get(GENRESAPI);

		for (let i = 0; i <= genres.length; i++) {
			if (id === genres[i].id) {
				return genres[i].name;
			} else {
				return "No Genre";
			}
		}
	} catch (error) {
		return error;
	}
};

export const findMovie = async (id) => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=3aa42666769d5d67b81910715e8f560c&language=en-US`
		);
		return data;
	} catch (error) {
		return error;
	}
};

export const getRecommended = async (id) => {
	try {
		const { data: { results } } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3aa42666769d5d67b81910715e8f560c&language=en-US&page=1`
		);
		return results;
	} catch (error) {
		return error;
	}
};

export const getCast = async (id) => {
	try {
		const { data: { cast } } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/casts?api_key=3aa42666769d5d67b81910715e8f560c`
		);
		return cast;
	} catch (error) {
		return error;
	}
};
