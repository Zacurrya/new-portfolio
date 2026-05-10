import SocialIcons from "../SocialIcons"

const Navbar = ({ handleClick }) => {

    return (
        <div className="flex items-center justify-between px-4 z-100">

            <button onClick={handleClick}>
                <img src="/logo.svg" className="mb-4 w-24 mt-3 opacity-70 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.5)] hover:opacity-80 transition-all duration-200" />
            </button>

            <SocialIcons
                iconSize='w-10 h-10' 
                emailIconSize="w-10"
            />

        </div>
    )
}
export default Navbar