# 🍿 CinePulse: Premium Movie & TV Streaming Platform (React 19 + TMDB)

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**CinePulse** is a high-performance, open-source **movie and TV show streaming discovery engine**. Built for speed and aesthetics, this **React 19 movie application** uses a sleek, dark-mode glassmorphic design to provide a cinematic experience. It leverages the **TMDB API** for comprehensive metadata and integrates multiple **streaming providers** for a seamless viewing experience.

---

## 📽️ Visual Tour

| **Home Dashboard** | **Deep Discovery** |
| :---: | :---: |
| ![CinePulse Home Dashboard](./public/screenshots/home.png) | ![CinePulse Movie Detail Page](./public/screenshots/detail.png) |
| *High-performance movie browsing with dynamic hero sections and horizontal scrolling.* | *Detailed movie metadata, cast profiles, and franchise collections.* |

| **Cinematic Player** | **Viewer Analytics** |
| :---: | :---: |
| ![CinePulse Online Video Player](./public/screenshots/player.png) | ![CinePulse User Analytics Dashboard](./public/screenshots/stats.png) |
| *Advanced video player with binge-mode auto-play and multi-provider support.* | *Personal watch time analytics and genre heatmap tracking.* |

---

## ✨ Why CinePulse?

- **💎 Premium Design**: A state-of-the-art UI utilizing glassmorphism, fluid micro-animations, and a curated dark-mode palette.
- **🧠 Intelligent Pickers**: Can't decide? Use **Decision Mode** (mood-based) or **Quick Pick** to find your next favorite movie in seconds.
- **📊 Personal Insights**: A dedicated stats dashboard tracks your total watch time, favorite genres, and viewing frequency.
- **📱 Mobile-First Native Feel**: Experience smooth, 60fps transitions and gesture-friendly navigation on any device.
- **🔍 Global Search**: Lightning-fast search functionality powered by the TMDB ecosystem.

---

## 🛠️ Built With

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,tailwind,vite,express,firebase,ts" />
</p>

- **Frontend**: React 19, Vite, Tailwind CSS 4.0
- **Animations**: `motion/react` (Framer Motion)
- **Icons**: Lucide React
- **API**: TMDB (The Movie Database)
- **Backend**: Express (Vite Proxy Middleware)

---

## 🚀 Get Started in 60 Seconds

### 1. Clone & Install
```bash
git clone https://github.com/madireis/cinepulse.git
cd cinepulse
npm install
```

### 2. Configure API
Create a `.env` file and add your TMDB API Key:
```env
TMDB_API_KEY=your_api_key_here
```

### 3. Launch
```bash
npm run dev
```
Navigate to `http://localhost:3000` and start your journey.

---

## ⚠️ Disclaimer

This project is for **educational purposes only**. CinePulse is a frontend demonstration of modern web engineering.

- **No Content Hosting**: This application does not host or distribute copyrighted material.
- **Metadata**: All content info is provided via the [TMDB API](https://www.themoviedb.org/).
- **Legal Compliance**: Users are responsible for ensuring their usage aligns with local streaming laws.


---

## 🗺️ Roadmap

> CinePulse is actively evolving. Here's what's shipped and what's coming next.

### ✅ Shipped

| | Feature |
|---|---|
| ✅ | Premium dark-mode UI with glassmorphism & micro-animations |
| ✅ | TMDB integration — trending, popular, top-rated, upcoming |
| ✅ | Full Movie & TV Show detail pages with trailers |
| ✅ | **Streaming player** via embedded backend provider |
| ✅ | TV episode picker — season/episode navigation |
| ✅ | **Decision Mode** — mood-based movie picker |
| ✅ | **Quick Pick** — instant random suggestion |
| ✅ | Watchlist — save movies & shows locally |
| ✅ | Watch history tracking |
| ✅ | **Personal Analytics** dashboard — genre heatmap, watch time, streaks |
| ✅ | Global search — movies, TV shows, and **actors** |
| ✅ | **Actor pages** — full filmography with movie/TV filter |
| ✅ | Cast cards linked to actor profiles across all pages |
| ✅ | Dynamic episode headers — title & doc tab update on episode change |
| ✅ | Hard-reload episode switching to bypass provider cache |
| ✅ | SEO meta tags, keywords, and dynamic document titles |
| ✅ | Mobile-first responsive layout with slide-out nav |
| ✅ | Removed auth/sign-in — fully open, no account needed |
| ✅ | **Multi-provider support** — VidSrc.me, SuperEmbed, 2Embed, VidSrc Pro |
| ✅ | Provider selector UI — let user pick their preferred source |
| ✅ | 'Best' star badge indicator for recommended stream providers |
| ✅ | Keyboard shortcuts — F for fullscreen, arrow keys for episodes |
| ✅ | Trailer auto-play in hero section on hover |
| ✅ | Advanced filters — year range and runtime filtering |
| ✅ | **Collections & franchises** — view full MCU, Star Wars etc. |
| ✅ | Director & crew pages (linked from production info) |
| ✅ | Auto-play next episode toggle (Binge Mode) |
| ✅ | Social sharing — share favorite movies/shows with rich previews |

---

### 🔜 Coming Soon

| | Feature | Priority |
|---|---|---|
| 🔲 | **Continue Watching** row on home dashboard | 🔥 High |
| 🔲 | Smart Player Fallback — auto-switch providers if a stream fails | 🔥 High |
| 🔲 | Cloud Sync — sync watch history & lists across devices | ⚡ Medium |
| 🔲 | Custom subtitle uploads (.srt / .vtt) in player | ⚡ Medium |
| 🔲 | Cast to TV / Chromecast support | ⚡ Medium |
| 🔲 | Picture-in-Picture (PiP) mode for player | ⚡ Medium |
| 🔲 | Progressive Web App (PWA) — install on mobile | 🧊 Low |
| 🔲 | Export watch history & lists as CSV | 🧊 Low |

---

## 📝 License
Licensed under the [MIT License](LICENSE).

<p align="center">
  <i>Built with ❤️ for the cinematic community.</i>
</p>
