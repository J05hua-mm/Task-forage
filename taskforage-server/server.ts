import app from './app.ts';

const PORT = 3000;

app.listen(PORT,() => {
    console.log(`express is running http://localhost:${PORT}`);
})

