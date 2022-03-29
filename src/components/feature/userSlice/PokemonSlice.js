import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [


        {
            id: "p1",
            name: "Clefairy",
            src:"clefairy.png",
            base_experience: 113,
            height: 6,
            order: 56,
            weight: 75,
        },
        {
            id: "p2",
            name: "Pickachu",
            src:"pikachu.jpeg",
            base_experience: 160,
            height: 7,
            order: 55,
            weight: 80,
        },
        {
            id: "p3",
            name: "Charmander",
            src:"charmander.jpeg",
            base_experience: 115,
            height: 5,
            order: 55,
            weight: 80,
        },
        {
            id: "p4",
            name: "Bulbasaur",
            src:"bulbasaur.jpeg",
            base_experience: 155,
            height: 4.11,
            order: 55,
            weight: 80,
        },
        {
            id: "p5",
            name: "Arboc",
            src:"arboc.jpeg",
            base_experience: 155,
            height: 4,
            order: 55,
            weight: 80,
        },
        {
            id: "p6",
            name: "Venonat",
            src:"venonat.jpeg",
            base_experience: 110,
            height: 8,
            order: 55,
            weight: 80,
        },
        {
            id: "p7",
            name: "Squirtle",
            src:"squirtle.jpeg",
            base_experience: 114,
            height: 3.10,
            order: 55,
            weight: 80,
        },
        {
            id: "p8",
            name: "Caterpie",
            src:"caterpie.jpeg",
            base_experience: 99,
            height: 7,
            order: 55,
            weight: 80,
        }
    ]
}


export const pokemonSlice = createSlice({
    name: "trainer",
    initialState,
    reducers: {
        deletePokemon: (state, action) => {
            state.data = state.data.filter(p => p.id !== action.payload.id)
        },
    }

})
export const { deletePokemon} = pokemonSlice.actions

export default pokemonSlice.reducer
