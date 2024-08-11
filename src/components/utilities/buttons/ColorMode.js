export default function ColorModeBtn(props) {
    let isLightMode = document.body.classList.contains("light-mode");
    let isDarkMode = document.body.classList.contains("dark-mode");
    let isSystemMode = document.body.classList.contains("system-mode");
    let isBlackWhite = document.body.classList.contains("black-mode");

    let curMode;
    if (isLightMode) {
        curMode = "light";
    } else if (isDarkMode) {
        curMode = "dark";
    } else if (isBlackWhite){
        curMode = "black";
    } else if (isSystemMode) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            curMode = "dark";
        } else if (isLightMode) {
            curMode = "light";
        } else {
            curMode = "black";
        }
    }
    let newMode = (curMode === "light") ? "dark" : "black" ;
    

    return (
        <button
            className={`btn colorMode ${newMode}Mode ripple-effect`}
            title={`to ${newMode} mode`}
            onClick={
                () => {
                    if (newMode === "light") {
                        props.updateLightMode();
                        props.updateColorMode("light");
                    } else if (newMode === "dark") {
                        props.updateDarkMode();
                        props.updateColorMode("dark");
                    } else {
                        props.updateBlackWhiteMode();
                        props.updateColorMode("black");
                    }
                }
            }
            tabIndex="0"
            aria-label={`switch to ${newMode} mode`}
        />
    )
}