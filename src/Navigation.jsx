import { NavLink } from 'react-router';


const Item = (props) => {
    const path = props.path;

    return (
        <NavLink
            to={`/${path.toLowerCase()}`}
            style={{ transition: 'all 0.33s' }}
            className={({ isActive }) =>
                isActive ?
                    'w-fit text-amber-200 before:content-[">"] before:absolute before:left-8 before:opacity-0 before:animate-fadeIn'
                    :
                    'w-fit hover:text-amber-200'
            }
        >
            {path}
        </NavLink>
    );
};

export default function Navigation() {
    return (
        <div className='mt-14 flex flex-col gap-2 font-bold'>
            <Item path='About' />
            <Item path='Work' />
            <Item path='Projects' />
            <Item path='Contact' />

            <a
                href='https://blog.jasonmorofsky.com'
                className='w-fit hover:text-amber-200'
                style={{ transition: 'all 0.33s' }}
            >
                Blog ↗
            </a>
        </div>
    );
};
