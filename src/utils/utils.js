/** 判断是否为空对象 */
export function isEmptyObject(obj) {
    let name;

    for (name in obj) return false;

    return true;
}

/** 生成32位的id值 */
export function guid() {
    return 'xxxxxxxxxxxxyxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;

        return v.toString(16);
    });
}

/** 数字金额大写转换 */
export function smalltoBIG(n) {
    let fraction = ['角', '分'];
    let digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    let unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
    let head = n < 0 ? '欠' : '';
    n = Math.abs(n);

    let s = '';

    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }

    s = s || '整';
    n = Math.floor(n);

    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';

        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }

        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }

    return (
        head +
        s
            .replace(/(零.)*零元/, '元')
            .replace(/(零.)+/g, '零')
            .replace(/^整$/, '零元整')
    );
}

export function isFunction(obj) {
    return typeof obj === 'function' && typeof obj.nodeType !== 'number';
}

export function isPlainObject(obj) {
    var proto, Ctor;

    if (!obj || {}.toString.call(obj) !== '[object Object]') {
        return false;
    }

    proto = Object.getPrototypeOf(obj);

    if (!proto) {
        return true;
    }

    let hasOwn = {}.hasOwnProperty;

    Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;

    return typeof Ctor === 'function' && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
}

export function randomNum(min, max, len = 0) {
    let arr = [];

    for (let i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return len === 1 ? arr[0] : arr;
}

export function formatNum(value) {
    let val = Number(value).toFixed(2);
    let arr = String(val).split('.');

    if (arr.length === 1) {
        return String(arr[0]).replace(/(?!^)(?=(\d{3})+$)/g, ',');
    }

    return String(arr[0]).replace(/(?!^)(?=(\d{3})+$)/g, ',') + '.' + arr[1]
}

export function colorToRgba(str, opacity = 1) {
    let sColor = str.toLowerCase();
    const REG = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (sColor && REG.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = '#';
            for (let i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        const sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
        }
        return 'rgba(' + sColorChange.join(',') + ', ' + opacity + ')';
    }
    return sColor;
}

export function rgbToHsl(r, g, b) {
    (r /= 255), (g /= 255), (b /= 255);
    let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h,
        s,
        l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [Math.floor(h * 100), Math.round(s * 100), Math.round(l * 100)];
}

/** 获取屏幕的尺寸  */
export function getScreen() {
    let width = document.body.clientWidth;

    if (width >= 1200) {
        return 'lg'
    } else if (width >= 992) {
        return 'md'
    } else if (width >= 768) {
        return 'sm'
    } else {
        return 'xs'
    }
}