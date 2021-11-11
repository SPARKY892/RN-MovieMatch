import { useEffect, useState } from "react";
import tmdb from "../api/tmdb";
import { TMDB_API_KEY } from "../keys";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (searchTerm) => {
		try {
			const response = await tmdb.get("/top_rated", {
				params: {
					api_key: TMDB_API_KEY,
					language: "en-GB",
				},
			});
			setResults(response.data.results);
		} catch (err) {
			setErrorMessage("Something went wrong");
		}
	};

	useEffect(() => {
		searchApi("");
	}, []);

	return [searchApi, results, errorMessage];
};
