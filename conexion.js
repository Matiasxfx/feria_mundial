const URL = "https://pkjojohlemxnebvtoeki.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBra29qb2hsZW14bmVidnRvZWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMzQ5MjAsImV4cCI6MjA5NzkxMDkyMH0.j_WoerH08rR68Md0F7ZWBSKyF7GgXGX5dHd7SAXtnus";

const supabase = supabase.createClient(URL, KEY);

async function testConnection() {
    try {
        const { data, error } = await supabase.from('preguntas').select('id');
        if (error) {
            document.body.innerHTML = "<h1>Error: " + error.message + "</h1>";
        } else {
            document.body.innerHTML = "<h1>¡CONEXIÓN EXITOSA!</h1>";
        }
    } catch (e) {
        document.body.innerHTML = "<h1>Error de red: " + e.message + "</h1>";
    }
}

testConnection();
