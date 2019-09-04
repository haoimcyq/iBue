export function formatQuery(str) {
    if (!String(str)) return {};

    let obj = {};

    String(str).replace(/([^?&=]+)=([^?&=]*)/g, (rs, $1, $2) => {
        let key = decodeURIComponent($1),
            val = decodeURIComponent($2);
        val = String(val);
        obj[key] = val;

        return rs;
    });

    return obj;
}
