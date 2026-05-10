import SocialIcons from "../SocialIcons"

const Navbar = ({ handleClick }) => {

    return (
        <div className="fixed top-0 left-0 w-full z-100">
            <div className="mx-auto flex w-full items-center justify-between px-4 lg:max-w-5xl xl:max-w-5xl">
                <button onClick={handleClick}>
                    <img src="/logo.svg" className="mb-4 w-24 mt-3 opacity-70 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.5)] hover:opacity-80 transition-all duration-200" />
                </button>

                <SocialIcons
                    iconSize='w-10 h-10' 
                    emailIconSize="w-10"
                />
            </div>
        </div>
    )
}
export default Navbar