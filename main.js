const gifts = ['book', 'game', 'socks']

const wrapping = (gifts = []) => {
    let res = [];

    gifts.forEach(x => {
        let numero = x.length;
        let envoltura = '';

        for(let i = 0; i < numero + 2; i++) {
            envoltura = envoltura + '*';
        }

        res.push(`${envoltura}\n*${x}*\n${envoltura}`);
    });
   
    return res;
}

const wrap = wrapping(gifts);
console.log(wrap);
