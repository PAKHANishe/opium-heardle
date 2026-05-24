// База данных треков для теста
const tracksDatabase = [
    {
        id: 1,
        title: "Habits",
        artist: "OsamaSon",
        url: "tracks/habits.mp3",
        startFrom: 0, 
        answers: ["osamason habits", "habits", "осамасон хэбитс", "осамасон"]
    },
    {
        id: 2,
        title: "Mannequin",
        artist: "Che",
        url: "tracks/mannequin.mp3",
        startFrom: 0, 
        answers: ["che mannequin", "mannequin", "че манекен", "che"]
    },
    {
        id: 3,
        title: "Body Double",
        artist: "Kai Angel",
        url: "tracks/body_double.mp3",
        startFrom: 0, 
        answers: ["kai angel body double", "body double", "боди дабл", "kai angel"]
    }
];

// Полный список для подсказок при вводе
const allAutocompleteOptions = [
    "OsamaSon — Habits",
    "Che — Mannequin",
    "Kai Angel — Body Double"
];
