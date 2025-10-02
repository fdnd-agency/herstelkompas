export async function load({}){
    const joepie = "joepie patat";
    return {joepie};
}
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        let fields = data.getAll('bingocard-field');
        console.log(fields);

        // ALLE VELDEN OPHALEN, KIJKEN WELKE ER WEL CHECKED ZIJN, DAN NIEUWE ARRAY MAKEN
        return {
            success: true,
            message: "Yay!!"
        };

        /// POSTEN
    }
};
