import { MenuHome } from "../menuHome/page";
import { MenuHomeLine } from "../menuHomeLine/page";

export function HeaderHome() {
    return (
        <header className="flex items-center justify-between p-8 lg:px-[20%] bg-yellow-500 rounded-br-lg rounded-bl-lg">
            <div>Logo</div>
            <div>
                <MenuHome />
                <MenuHomeLine />
            </div>
        </header>
    )
}