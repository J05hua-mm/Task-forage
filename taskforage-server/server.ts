import app from './app.ts';
import { connectDB } from './db.ts';

const PORT = 3000;

connectDB().then(
    () => {
        app.listen(PORT,() => {
        console.log(`express is running http://localhost:${PORT}`);
});
    }
);


