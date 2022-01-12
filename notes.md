# random notes on how to get things to work

## supabase

the main connection is establisted from files in `./components/logic/Supabase.js` this handles pulling in the API(database) address as well as the key to use. i will test shortly the ENV workfing on local and on site (this will happen once its been pushed to Heroku)

once this is working i can use the API details on supabase <https://app.supabase.io/> to connect and either get/insert/update/delete from that database
the below snippits worked to pull and insert data

```javascript

async function readData() {
    const { data: Medication, error } = await supabase
        .from("dosage_history")
        .select("*");
    console.log(Medication, error);
}

async function updateData() {
    let { data, error } = await supabase
        .from("Medication")
        .insert([{ dose: 10, linked_user: UUID }]);
    console.log(data);
}

```

these can then be connected to any thing required(i had tested on buttons and worked as expected)


auth is also handled, but no notes on how that works yet.

i can now work within WSL. WIN!!!!