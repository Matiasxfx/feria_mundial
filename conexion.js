const URL_SUPABASE = "https://pkjojohlemxnebvtoeki.supabase.co";
const KEY_SUPABASE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBra29qb2hsZW14bmVidnRvZWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMzQ5MjAsImV4cCI6MjA5NzkxMDkyMH0.j_WoerH08rR68Md0F7ZWBSKyF7GgXGX5dHd7SAXtnus";

// 1. Verificar si la librería se cargó
if (typeof supabase === 'undefined') {
    document.getElementById("pregunta").innerText = "Error: La librería de Supabase no cargó.";
} else {
    const sb = supabase.createClient(URL_SUPABASE, KEY_SUPABASE);
    
    // 2. Intentar obtener datos
    sb.from('preguntas').select('*').then(res => {
        if(res.error) {
            document.getElementById("pregunta").innerText = "Error DB: " + res.error.message;
        } else if (res.data.length === 0) {
            document.getElementById("pregunta").innerText = "La tabla está vacía.";
        } else {
            document.getElementById("pregunta").innerText = "¡Conectado! La primera pregunta es: " + res.data[0].pregunta;
        }
    }).catch(err => {
        document.getElementById("pregunta").innerText = "Error de red: " + err.message;
    });
}