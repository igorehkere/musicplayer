## MusicPlayer

A web player for listening to music from an external API. Tracks are loaded page by page, and you can view details (cover art, lyrics, likes). The project is written in TypeScript using React.

## Functionality

- Retrieving a track list from the server (10 tracks per page)
- Pagination (pages 1-3, forward/back buttons)
- Track playback via a custom player
- Player controls: play/pause, progress bar, volume
- Viewing track details (cover, title, lyrics, likes)
- Skeleton (loading GIF) while waiting for an API response

## Screenshots

# Main page
<img width="2125" height="1224" alt="image" src="https://github.com/user-attachments/assets/fc501d82-f719-41cf-8565-b4f63f301497" />

# Details track
<img width="2127" height="1224" alt="image" src="https://github.com/user-attachments/assets/6915a200-b3eb-4218-a1d0-ded11f34e796" />


## Technologies

- React
- TypeScript
- Vite
- react-use-audio-player
- CSS Modules
- API: musicfun.it-incubator.app

## Project Structure

src/
├── bll/ 
│ ├── usePlayer.ts 
│ ├── useTracks.ts 
│ └── useDetails.ts 
├── dal/ 
│ └── api.ts 
├── components/ 
│ ├── MyPlayer.tsx 
│ ├── TracksList.tsx 
│ ├── TrackDetails.tsx 
│ ├── PageBar.tsx 
│ └── Logo.tsx 
├── styles/ 
├── assets/ 
├── App.tsx
├── main.tsx
└── index.css

## Installation and Run

git clone https://github.com/igorehkere/musicplayer
cd musicplayer
npm install
npm run dev

## Implementation Features

- Separation of concerns. The useTracks, useDetails, and usePlayer hooks are separate. Each hook performs a single task.
- Custom player implemented via the react-use-audio-player library. Implemented a progress bar (updated every 100 ms), volume control, and playback controls.
- Skeleton. A GIF is shown while tracks or details are loading. The user sees that the data is loading.
- CSS Modules. Styles do not conflict between components.

## License

MIT

## Author

Igorehkere
