# 🚀 Space Facts Generator (NASA APOD App)

## 📌 Project Description

The **Space Facts Generator** is a React-based web application that fetches and displays real astronomy data using NASA’s Astronomy Picture of the Day (APOD) API.

Each time the user clicks the button, the app retrieves a **random space image, title, and explanation** from NASA’s database, providing an engaging and educational experience.

---

## 🎯 Features

- 🌌 Fetches real-time data from NASA’s APOD API
- 🎲 Generates a **random space image and explanation**
- 🖼️ Displays high-quality images or embedded videos
- ⏳ Loading state for better UX
- ⚠️ Error handling for failed API requests
- 🎨 Modern space-themed UI with responsive layout
- 🔁 Dynamic content updates on each button click

---

## 🛠️ Technologies Used

- React (Functional Components + Hooks)
- JavaScript (ES6+)
- CSS (Custom styling)
- NASA Open API (APOD)

---

## 🔌 API Used

### NASA Astronomy Picture of the Day (APOD)

**Endpoint:**

```
https://api.nasa.gov/planetary/apod
```

**Query Parameters Used:**

- `api_key`: Your NASA API key
- `date`: Randomly generated date to fetch different results

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd space-facts-app
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create a `.env` file

In the root of your project, create a file named:

```
.env
```

Add your NASA API key:

```
REACT_APP_NASA_API_KEY=your_api_key_here
```

> ⚠️ Important: The variable name must start with `REACT_APP_` or React will not recognize it.

---

### 4. Start the development server

```bash
npm start
```

The app will open at:

```
http://localhost:3000
```

---

## ▶️ How to Use the App

1. Open the app in your browser
2. Click **“Generate Space Insight”**
3. View:
   - 📸 Image or video
   - 🧠 Title and explanation
   - 📅 Date of the content
4. Click again to generate a new random space result

---

## 🧠 Key Implementation Details

### Random Data Fetching

The NASA APOD API normally returns the same image for the current day.  
To make the app dynamic, a **random date** is generated between 1995 (when APOD started) and today.

```javascript
const start = new Date(1995, 5, 16);
const end = new Date();

const randomDate = new Date(
  start.getTime() + Math.random() * (end.getTime() - start.getTime()),
)
  .toISOString()
  .split("T")[0];
```

---

### Conditional Rendering

The app dynamically renders:

- Loading state
- Error messages
- Image or video content

---

### Media Handling

The API may return:

- `"media_type": "image"` → display `<img>`
- `"media_type": "video"` → display `<iframe>`

---

## ⚠️ Known Limitations

- NASA API rate limits may apply
- Some APOD entries return videos instead of images
- Occasional slower load times depending on API response

---

## 🧪 Future Improvements

- 📅 Add date picker to select specific days
- ⭐ Save favorite space images
- 🔁 Add previous/next navigation
- 📱 Improve mobile responsiveness
- 🎬 Add animations for smoother transitions

---

## 👨‍💻 Author

John Ownby

---

## 📚 Acknowledgments

- NASA Open APIs
- React documentation

## New Implementations/Features

- Add a search bar for specific things the user wants to find
- Possibly add a carousel design so that the user can pick and choose what they want to read
- Potentially add a source/references section
- Figure out if the API KEY I am already using has more information
