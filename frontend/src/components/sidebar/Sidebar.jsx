import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`flex flex-col border-r-[5px] border-slate-500 p-4 md:w-80 ${isOpen ? 'w-full' : 'w-16'} transition-width duration-300`}>
			<button className='block md:hidden mb-4' onClick={toggleSidebar}>
				<GiHamburgerMenu size={24} />
			</button>
			{isOpen && (
				<>
					<SearchInput />
					<div className='divider px-3'></div>
					<Conversations />
					<LogoutButton />
				</>
			)}
		</div>
	);
};

export default Sidebar;
