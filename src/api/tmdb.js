import axios from "axios";
import { TMDB_AUTH } from "../keys";

export default axios.create({
	baseURL: "https://api.themoviedb.org/3/movie",
	headers: {
		Authorization: TMDB_AUTH,
	},
});
