# Dog Breed Explorer App (TanStack Query)

## Overview
This project is a React application built with Vite and TanStack Query.  
It fetches data from the Dog API and displays:
- List of dog breeds
- Detailed breed information
- Random dog facts
- Dog group information

## Features
- Fetch all dog breeds using TanStack Query
- Click a breed to view detailed information
- Fetch and display random dog facts
- Fetch and display dog groups
- Loading, error, and success states handled properly

## API Used
https://dogapi.dog/api/v2

Endpoints:
- /breeds
- /breeds/{id}
- /facts
- /groups

---

## How to Run the Project

### 1. Install dependencies
npm install

### 2. Start development server
npm run dev

### 3. Open in browser
http://localhost:5173

---

## Testing

### Normal Test Cases
1. Load app → breeds list appears
2. Click a breed → breed details display
3. Scroll → facts and groups load correctly

### Edge Test Cases
1. API failure → error message displays
2. Slow internet → loading state shows spinner/text
3. Invalid breed selection → fallback message appears

---

## Tech Stack
- React
- Vite
- TanStack Query
- JavaScript
- CSS

---

## Youtube
https://www.youtube.com/watch?v=rAmKok95VJ8
