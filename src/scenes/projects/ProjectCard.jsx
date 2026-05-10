import { RoundedBox } from '@react-three/drei'
import { Html } from '@react-three/drei'

const CARD_WIDTH = 200   // px
const CARD_HEIGHT = 300  // px
const ZOOM = 38
const wu = (px) => px / ZOOM  // converts px to world units

const ProjectCard = ({ image, title, description, skills, position }) => {
    return (
        <group position={position}>
            <RoundedBox 
                args={[wu(CARD_WIDTH), wu(CARD_HEIGHT), 0.1]} 
                radius={0.05} 
                smoothness={4}
            >
                <meshStandardMaterial color="#004C9C" />
            </RoundedBox>

            <Html transform position={[0, 0, 0.06]}>
                <div style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}
                     className="text-white overflow-hidden">
                    <img src={image} className="w-full rounded" />
                    <h2 className="text-[10px] font-semibold px-1">{title}</h2>
                    <p className="text-[5.5px] px-1">{description}</p>
                </div>
            </Html>
        </group>
    )
}

export default ProjectCard