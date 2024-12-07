import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import React from 'react'; // Import React

const SecondaryDropDownMenu = () => {
    const navs = [
        {
            title: "Sell on Siddhi Creatives",
            icon: <BusinessCenterIcon sx={{ fontSize: "18px" }} />,
            redirect: "/",
        },
        {
            title: "24x7 Customer Care",
            icon: <LiveHelpIcon sx={{ fontSize: "18px" }} />,
            redirect: "/",
        }
    ];

    return (
        <div className="absolute w-60 -right-2 top-9 bg-white shadow-2xl rounded flex-col text-sm">
            {navs.map((item, i) => {
                const { title, icon, redirect } = item;

                return (
                    <a className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" href={redirect} key={i}>
                        <span className="text-primary-blue">{icon}</span>
                        {title}
                    </a>
                );
            })}

            <div className="absolute right-1/2 -top-2.5">
                <div className="arrow_down"></div>
            </div>
        </div>
    );
};

export default SecondaryDropDownMenu;