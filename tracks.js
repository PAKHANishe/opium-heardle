// База данных треков
const tracksDatabase = [
    // --- OSAMASON ---
    {
        id: 1,
        title: "Habits",
        artist: "OsamaSon",
        url: "tracks/habits.mp3",
        startFrom: 0, 
        answers: ["osamason habits", "habits", "хэбитс", "осамасон"]
    },
    {
        id: 2,
        title: "Ref",
        artist: "OsamaSon",
        url: "tracks/ref.mp3",
        startFrom: 0, 
        answers: ["osamason ref", "ref", "реф", "осамасон реф"]
    },
    {
        id: 3,
        title: "The Whole World Is Free",
        artist: "OsamaSon",
        url: "tracks/the_whole_world_is_free.mp3",
        startFrom: 0, 
        answers: ["the whole world is free", "whole world is free", "free"]
    },
    {
        id: 4,
        title: "Pop",
        artist: "OsamaSon",
        url: "tracks/pop.mp3",
        startFrom: 0, 
        answers: ["osamason pop", "pop", "поп"]
    },
    {
        id: 5,
        title: "Made Sum Plans",
        artist: "OsamaSon",
        url: "tracks/made_sum_plans.mp3",
        startFrom: 0, 
        answers: ["made sum plans", "plans", "мейд сам плэнс"]
    },
    {
        id: 6,
        title: "mufasa",
        artist: "OsamaSon",
        url: "tracks/mufasa.mp3",
        startFrom: 0, 
        answers: ["osamason mufasa", "mufasa", "муфаса"]
    },
    {
        id: 7,
        title: "frontin",
        artist: "OsamaSon",
        url: "tracks/frontin.mp3",
        startFrom: 0, 
        answers: ["osamason frontin", "frontin", "фронтин"]
    },

    // --- KAI ANGEL ---
    {
        id: 8,
        title: "Body Double",
        artist: "Kai Angel",
        url: "tracks/body_double.mp3",
        startFrom: 0, 
        answers: ["kai angel body double", "body double", "боди дабл", "kai angel"]
    },
    {
        id: 9,
        title: "sirens",
        artist: "Kai Angel",
        url: "tracks/sirens.mp3",
        startFrom: 0, 
        answers: ["kai angel sirens", "sirens", "сайренс", "сирены"]
    },
    {
        id: 10,
        title: "Chelsea Smile",
        artist: "Kai Angel",
        url: "tracks/chelsea_smile.mp3",
        startFrom: 0, 
        answers: ["chelsea smile", "челси смайл", "chelsea"]
    },
    {
        id: 11,
        title: "SHOW OFF",
        artist: "Kai Angel",
        url: "tracks/show_off.mp3",
        startFrom: 0, 
        answers: ["show off", "шоу офф", "шоуофф"]
    },
    {
        id: 12,
        title: "dance like u in pain",
        artist: "Kai Angel",
        url: "tracks/dance_like_u_in_pain.mp3",
        startFrom: 0, 
        answers: ["dance like u in pain", "dance like you in pain", "pain", "дэнс лайк"]
    },
    {
        id: 13,
        title: "Angel May Cry",
        artist: "Kai Angel",
        url: "tracks/angel_may_cry.mp3",
        startFrom: 0, 
        answers: ["angel may cry", "may cry", "энджел мэй край"]
    },
    {
        id: 14,
        title: "JUMP!",
        artist: "Kai Angel",
        url: "tracks/jump.mp3",
        startFrom: 0, 
        answers: ["kai angel jump", "jump", "джамп"]
    },
    {
        id: 15,
        title: "Freddy Krueger",
        artist: "Kai Angel",
        url: "tracks/freddy_krueger.mp3",
        startFrom: 0, 
        answers: ["freddy krueger", "freddy", "krueger", "фредди крюгер"]
    },
    {
        id: 16,
        title: "hurt",
        artist: "Kai Angel",
        url: "tracks/hurt.mp3",
        startFrom: 0, 
        answers: ["kai angel hurt", "hurt", "херт", "хёрт"]
    },
    {
        id: 17,
        title: "prada party",
        artist: "Kai Angel",
        url: "tracks/prada_party.mp3",
        startFrom: 0, 
        answers: ["prada party", "prada", "party", "прада пати"]
    },
    {
        id: 18,
        title: "ballerina",
        artist: "Kai Angel",
        url: "tracks/ballerina.mp3",
        startFrom: 0, 
        answers: ["kai angel ballerina", "ballerina", "балерина"]
    },

    // --- CHE ---
    {
        id: 19,
        title: "Mannequin",
        artist: "Che",
        url: "tracks/mannequin.mp3",
        startFrom: 0, 
        answers: ["che mannequin", "mannequin", "че манекен", "che"]
    },
    {
        id: 20,
        title: "DIOR LEOPARD",
        artist: "Che",
        url: "tracks/dior_leopard.mp3",
        startFrom: 0, 
        answers: ["dior leopard", "dior", "leopard", "диор леопард"]
    },
    {
        id: 21,
        title: "SLAM PUNK",
        artist: "Che",
        url: "tracks/slam_punk.mp3",
        startFrom: 0, 
        answers: ["slam punk", "slam", "punk", "слэм панк"]
    },
    {
        id: 22,
        title: "BLACK SWAN",
        artist: "Che",
        url: "tracks/black_swan.mp3",
        startFrom: 0, 
        answers: ["black swan", "swan", "блэк свон", "черный лебедь"]
    },
    {
        id: 23,
        title: "UAV",
        artist: "Che",
        url: "tracks/uav.mp3",
        startFrom: 0, 
        answers: ["che uav", "uav", "уав"]
    },
    {
        id: 24,
        title: "FREAK NEEK",
        artist: "Che",
        url: "tracks/freak_neek.mp3",
        startFrom: 0, 
        answers: ["freak neek", "freak", "neek", "фрик ник"]
    },
    {
        id: 25,
        title: "KING OF ROCK",
        artist: "Che",
        url: "tracks/king_of_rock.mp3",
        startFrom: 0, 
        answers: ["king of rock", "king", "rock", "кинг оф рок"]
    },
    {
        id: 26,
        title: "Interlude",
        artist: "Che",
        url: "tracks/interlude.mp3",
        startFrom: 0, 
        answers: ["che interlude", "interlude", "интерлюдия"]
    },
    {
        id: 27,
        title: "Promoting Violence",
        artist: "Che",
        url: "tracks/promoting_violence",
        startFrom: 0, 
        answers: ["promoting violence", "violence", "промоутинг вайленс"]
    }
];

// Полный список для подсказок при вводе
const allAutocompleteOptions = [
    "OsamaSon — Habits",
    "OsamaSon — Ref",
    "OsamaSon — The Whole World Is Free",
    "OsamaSon — Pop",
    "OsamaSon — Made Sum Plans",
    "OsamaSon — mufasa",
    "OsamaSon — frontin",
    "Kai Angel — Body Double",
    "Kai Angel — sirens",
    "Kai Angel — Chelsea Smile",
    "Kai Angel — SHOW OFF",
    "Kai Angel — dance like u in pain",
    "Kai Angel — Angel May Cry",
    "Kai Angel — JUMP!",
    "Kai Angel — Freddy Krueger",
    "Kai Angel — hurt",
    "Kai Angel — prada party",
    "Kai Angel — ballerina",
    "Che — Mannequin",
    "Che — DIOR LEOPARD",
    "Che — SLAM PUNK",
    "Che — BLACK SWAN",
    "Che — UAV",
    "Che — FREAK NEEK",
    "Che — KING OF ROCK",
    "Che — Interlude",
    "Che — Promoting Violence"
];
