export let r = document.querySelector(':root');
export let ljos = document.querySelector("#ljos");

export function letThereBeLight() {
    let rootStyles = getComputedStyle(r)
    // console.log(roo)

    if(rootStyles.getPropertyValue('--backgroundLitur') === 'black') {
        document.documentElement.style.setProperty('--backgroundLitur', 'white');
        document.documentElement.style.setProperty('--stafaLitur', 'black');
    }
    else {
        document.documentElement.style.setProperty('--backgroundLitur', 'black');
        document.documentElement.style.setProperty('--stafaLitur', 'white');
    }
}