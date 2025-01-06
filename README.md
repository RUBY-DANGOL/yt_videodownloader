# YouTube Video Downloader

A simple web application to download YouTube videos for offline viewing. This project is built using **FastAPI** for the backend and a minimal HTML, CSS, and JavaScript frontend.

## Features
- Download YouTube videos in the best available quality.
- Simple and intuitive user interface.
- Uses `yt-dlp` for video downloads.
- Lightweight and easy to set up.

## Table of Contents
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [License](#license)

## Demo
### Frontend Preview
![image](https://github.com/user-attachments/assets/55353899-346f-4522-a82f-0aa5bc3deb56)


## Installation
pip install -r requirement.txt

### Prerequisites
- Python 3.9+
- `pip` package manager
- `yt-dlp` library

### Run the Application
uvicorn main:app --reload

### Access the Application
#open your Browser and naviage to
http://127.0.0.1:8000

### Usage
#1. Paste the YouTube URL in the input field.
#2. Click the "Download" button.
#3. The video will be downloaded, and your browser will prompt you to save the file.

### Technologies used
#FastAPI: Backend framework
#HTML/CSS/JavaScript: Frontend
#yt-dlp: For downloading YouTube videos

###Directory Structure
youtube-video-downloader/
│
├── static/
│   ├── style.css          # Styling for the application
│   └── script.js          # Frontend JavaScript
│
├── templates/
│   └── index.html         # HTML template for the application
│
├── downloads/             # Folder where videos are downloaded
│
├── main.py                # Main FastAPI application
├── requirements.txt       # Python dependencies
├── README.md              # Project documentation

### Clone the Repository
```bash
git clone https://github.com/yourusername/youtube-video-downloader.git
cd youtube-video-downloader



