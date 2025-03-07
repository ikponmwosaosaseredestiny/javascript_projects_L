// compound interest calculator
// formula used A = p(1 + r/n)^nt
// where A = total amount that accumulates. P = original principal; that's the money we start with. The r = interest rate. and t = time (in years).
// --------- IODCONSTRUCT (2025) ----------

// solve for A 
const solve_A = () => {
    //inputs
    let n = 'daily_360';
    let p = 100;
    let r = 2.34
    let t = 3
    let n_value = 0;

    switch (n.toLowerCase()) {
        case 'daily_360':
            n_value = 360;
            break;
        case 'daily_365':
            n_value = 365;
            break;
        case 'monthly':
            n_value = 12;
            break;
        case 'quarterly':
            n_value = 4;
            break;
        case 'annually':
            n_value = 1
            break;
        default:
            console.log('please select a suitable option!')
            break;
    }

    r = (r / 100).toPrecision(5);
    r_n = r / n_value;
    n_t = n_value * parseInt(t);
    A = parseInt(p) * ((1 + r_n) ^ n_t)
    console.log(`Your total amount that accumulates (A) is ${A}`)
}

//solve for P
const solve_P = () => {
    //inputs
    let n = 'daily_360';
    let a = 108100;
    let r = 2.34
    let t = 3
    let n_value = 0;

    switch (n.toLowerCase()) {
        case 'daily_360':
            n_value = 360;
            break;
        case 'daily_365':
            n_value = 365;
            break;
        case 'monthly':
            n_value = 12;
            break;
        case 'quarterly':
            n_value = 4;
            break;
        case 'annually':
            n_value = 1
            break;
        default:
            console.log('please select a suitable option!')
            break;
    }

    r = (r / 100).toPrecision(5);
    r_n = r / n_value;
    n_t = n_value * t;
    p = a / ((1 + r_n) ^ n_t);
    console.log(`your original principal is ${p}`)
}

//solve for R
const solve_R = () => {
    //inputs
    let n = 'daily_360';
    let a = 1081;
    let p = 10
    let t = 3
    let n_value = 0;

    switch (n.toLowerCase()) {
        case 'daily_360':
            n_value = 360;
            break;
        case 'daily_365':
            n_value = 365;
            break;
        case 'monthly':
            n_value = 12;
            break;
        case 'quarterly':
            n_value = 4;
            break;
        case 'annually':
            n_value = 1
            break;
        default:
            console.log('please select a suitable option!')
            break;
    }

    n_t = n_value * t;

    a_p = (Math.pow(parseFloat(a / p), parseFloat(1 / n_t))) - 1;
    r = n_value * a_p;
    console.log(`your interest rate is ${(r).toPrecision(3)}%`);
}

const solve_T = () => {
    //inputs
    let n = 'daily_360';
    let a = 1081;
    let p = 10;
    let r = 1.56
    let n_value = 0;

    switch (n.toLowerCase()) {
        case 'daily_360':
            n_value = 360;
            break;
        case 'daily_365':
            n_value = 365;
            break;
        case 'monthly':
            n_value = 12;
            break;
        case 'quarterly':
            n_value = 4;
            break;
        case 'annually':
            n_value = 1
            break;
        default:
            console.log('please select a suitable option!')
            break;
    }

    a_p = parseFloat(a) / parseFloat(p);
    r_n = 1 + (parseFloat(r) / n_value);
    log_a_p = Math.log10(a_p);
    log_r_n = Math.log10(r_n);
    t = log_a_p / (n_value * log_r_n);
    console.log(`Your time (in years) is ${t.toPrecision(3)} years`)



}

// solve_A()
// solve_P()
// solve_R()
// solve_T()