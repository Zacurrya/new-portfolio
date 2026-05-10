/**
 * Handles the button logic of the social icon buttons.
 * Currently just handles the button routes
 * */
export const useSocialIcon = (link) => {

    const handleClick = () => {
        window.open(link)
    }

    return { 
        handleClick,
    }
}
