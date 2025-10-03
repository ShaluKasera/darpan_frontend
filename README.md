# User Panel Frontend

This is the frontend for the **User Panel for Icche** project. It uses **Next.js** and integrates with Cloudinary and MongoDB.

---

## Getting Started

Follow these steps to set up the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ICCHE-Iiest-Shibpur/user_pannel_frontend.git
```

### 2️⃣ Navigate to the project folder
```bash
cd user_pannel_frontend
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Create .env.local file
```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_cloudinary_api_key
NEXT_PUBLIC_CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NEXT_PUBLIC_MONGO_URI=your_mongodb_connection_uri
MONGODB_DB_NAME=your_database_name
NEXT_PUBLIC_API_URL=backend_url
```

### 5️⃣ Run the application
```bash
npm run dev
```

## The app will run locally at: http://localhost:3000