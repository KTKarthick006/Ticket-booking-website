import { Movie } from '../models/Movie.js';
import { rm } from 'fs';

//createMovie
export const createMovie = async (req, res) => {
    try {
        if (req.user.role != 'admin') {
            return res.status(403).json({message: "Unauthorized Access."});
        }
        const { title, description, genre, language, releaseDate, duration } = req.body;
        const poster = req.file;
        if (!title || !description || !genre || !language || !releaseDate || !duration) {
          return res.status(400).json({message: "All fields are required."});
        }
        if (!poster) {
            return res.status(400).json({message: "Please Select the image."});
        }
        if (new Date(releaseDate) > new Date()) {
          return res.status(400).json({message: "Release date must be in the past or present."});
        }
        const movie = await Movie.find(title);
        if (movie) {
            return res.status(404).json({message: "Movie Already Exists."});
        }
        const newMovie = new Movie({
          title,
          description,
          genre,
          language,
          releaseDate,
          duration,
          poster: poster?.path,
        });
        const savedMovie = await newMovie.save();
        res.status(201).json({message: "Movie added successfully.", movie: savedMovie});
    } catch (error) {
        res.status(500).json({message: "Failed to add movie.", error: error.message});
    }
};

//fetchAllMovies
export const fetchAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        if (!movies) {
            return res.status(404).json({message: "No Movies Found."});
        }
        return res.status(200).json({message: "All Movies List.", movies});
    } catch (error) {
        return res.status(500).json({message: "Failed to fetch movies.", error: error.message});
    }
};

//fetchSingleMovie
export const fetchSingleMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({message: "No Movie Found."});
        }
        return res.status(200).json({message: "Movie Data.", movie});
    } catch (error) {
        return res.status(500).json({message: "Failed to fetch movie.", error: error.message});
    }
};

// updateMovie
export const updateMovie = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({message: "Unauthorized Access."});
        }
        const id = req.params.id;
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({message: "Movie not found."});
        }
        const { title, description, genre, language, releaseDate, duration } = req.body;
        const poster = req.file;
        if (!title || !description || !genre || !language || !releaseDate || !duration) {
          return res.status(400).json({message: "All fields are required."});
        }
        if (!poster) {
            return res.status(400).json({message: "Please Select the image."});
        }
        if (new Date(releaseDate) > new Date()) {
            return res.status(400).json({message: "Release date must be in the past or present."});
        }
        if (poster) {
            rm(movie.poster, () => {
                console.log("Old poster deleted.");
            });
            movie.poster = poster?.path; 
        }
        movie.title = title;
        movie.description = description;
        movie.genre = genre;
        movie.language = language;
        movie.releaseDate = releaseDate;
        movie.duration = duration;
        const updatedMovie = await movie.save();
        res.status(200).json({message: "Movie updated successfully.", movie: updatedMovie});
    } catch (error) {
        return res.status(500).json({message: "Failed to update movie.", error: error.message});
    }
};

//deleteMovie
export const deleteMovie = async (req, res) => {
    try {
        if (req.user.role != 'admin') {
            return res.status(403).json({message: "Unauthorized Access."});
        }
        const id = req.params.id;
        const movie = await Movie.findById(id);
        if(!movie){
            return res.status(403).json({message: "Invalid Movie Details."});
        }
        rm(movie.poster, () => {
            console.log("Poster Deleted.");
        });
        await movie.deleteOne();
        return res.json({message: "Movie Delete Success."})
    } catch (error) {
        return res.status(500).json({message: "Failed to delete movie.", error: error.message});
    }
};