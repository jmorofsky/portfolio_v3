import { NavLink } from 'react-router';


const Item = (props) => {
    const path = props.path;

    function handleClick() {
        const main = document.getElementById('main');
        
        setTimeout(() => main.scrollTo(0, 0), 400);
    };

    return (
        <NavLink
            onClick={handleClick}
            to={`/${path.toLowerCase()}`}
            style={{ transition: 'all 0.33s' }}
            className={({ isActive }) =>
                isActive ?
                    'w-fit text-gold before:content-[">"] before:absolute before:left-14 before:opacity-0 lg:before:animate-fadeIn'
                    :
                    'w-fit hover:text-gold'
            }
            viewTransition
        >
            {path}
        </NavLink>
    );
};

export default function Navigation() {
    return (
        <div className='mt-2 lg:mt-14 max-w-xs mx-auto lg:mx-0 flex lg:flex-col justify-evenly gap-4 lg:gap-2 font-bold flex-wrap'>
            <Item path='About' />
            <Item path='Work' />
            <Item path='Projects' />
            <Item path='Contact' />

            <a
                href='https://blog.jasonmorofsky.com'
                className='w-fit hover:text-gold'
                style={{ transition: 'all 0.33s' }}
            >
                Blog ↗
            </a>
        </div>
    );
};
