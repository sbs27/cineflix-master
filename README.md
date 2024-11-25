# CINEFLIX

Welcome to Cinwflix- Movie and TV Show Streaming App! This app is designed to let users explore trending videos from YouTube, including popular movies and TV shows. Users can search for videos, bookmark their favorites, and watch them in full-screen mode. It uses the free YouTube Data API v3 to fetch trending content.

## Features

- Displays trending movies and TV shows from YouTube.
- Real-time search functionality to filter videos by title.
- Bookmark favorite videos for quick access.
- Full-screen video player for seamless viewing.
- Fully responsive design for use on mobile, tablet, and desktop devices.

## Technologies Used

- React with TypeScript for building a modern, type-safe frontend.
- Material-UI (MUI) for consistent and clean user interface design.
- YouTube Data API v3 for fetching trending video data.
- React Context API for global state management.
- React Router for navigation between pages.
- Vite as the build tool for fast development.

## Installation Instructions

### Prerequisites

Ensure the following are installed on your system:
- Node.js (version 14 or higher)
- npm or yarn for managing dependencies

### Steps to Install and Run the Project

1. **Clone the Repository**:
   Clone the project to your local machine:
   ```
   git clone https://github.com/your-username/movie-tv-show-streaming-app.git
   cd movie-tv-show-streaming-app
   ```

2. **Install Dependencies**:
   Install the required dependencies:
   ```
   npm install
   ```

3. **Setup YouTube API Key**:
   Create a `.env` file in the root directory and add your YouTube API key. Obtain your key from the [Google Developers Console](https://console.developers.google.com/).
   ```
   REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
   ```
   Replace `your_youtube_api_key` with your actual API key.

4. **Start the Development Server**:
   Run the app:
   ```
   npm run dev
   ```
   Open your browser and go to `http://localhost:3000`.

## Project Structure

```
src/
├── assets/                # Static assets like images
├── components/            # Reusable UI components
├── context/               # Global state management files
├── pages/                 # Main app pages
├── utils/                 # Utility functions like fetchTrendingVideos
├── App.tsx                # Root component
└── index.tsx              # Entry point for the app
```

## How It Works

1. **Trending Videos**:
   The app fetches trending videos from the YouTube Data API using the `/videos` endpoint. The videos include metadata like titles, thumbnails, and video IDs.

2. **Search Functionality**:
   Users can type into the search bar to filter videos based on their titles. The search updates the displayed list dynamically.

3. **Bookmarking**:
   Clicking the heart icon on a video bookmarks it. The app remembers bookmarks during the current session.

4. **Full-Screen Video Player**:
   Clicking on a video opens it in a full-screen embedded YouTube player.

## Future Enhancements

- Add user authentication for personalized features.
- Include advanced filters for genres, ratings, and release years.
- Support trending videos from multiple regions.
- Introduce backend support for saving user preferences and bookmarks.
- Implement infinite scrolling for exploring more videos.

## License

This project is licensed under the MIT License.

