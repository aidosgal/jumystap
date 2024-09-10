import { useEffect, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineBookmarks, MdOutlineCloud, MdOutlineGroupAdd, MdOutlineLogout, MdOutlineWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from 'react-icons/io5';

export default function Guest({ children }) {
    const { t, i18n } = useTranslation();
    const { auth, url } = usePage().props;
    const [showDropdown, setShowDropdown] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [source, setSource] = useState('');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    useEffect(() => {
        let savedLanguage = localStorage.getItem('i18nextLng') || 'ru';
        if (savedLanguage !== 'ru' && savedLanguage !== 'kz') {
            savedLanguage = 'ru';
        }
        i18n.changeLanguage(savedLanguage);

        const params = new URLSearchParams(location.search);
        const sourceParam = params.get('source') || '';
        if (sourceParam != '') {
            setSource(sourceParam);
            localStorage.setItem('source', sourceParam);
        }
    }, [i18n]);

    const handleLogout = () => {
        axios.post('/logout').then(() => {
            window.location.reload();
        });
    };

    const currentPath = new URL(url, window.location.origin);
    console.log(window.location.pathname)
    console.log(currentPath);

    const isActive = (path) => window.location.pathname === path;

    return (
        <>
        <Head title="JUMYSTAP – программа возможностей" />
        <div className='md:hidden block'>
            <div className='flex py-5 px-3'>
                <Link
                    className={`block ${isActive('/') ? 'text-blue-500 font-semibold' : ''}`}
                    href='/'
                >
                    <ApplicationLogo/>
                </Link>
                <div className='ml-auto'>
                    <div>open</div>
                </div>
            </div>
        </div>
        <div className='md:flex hidden font-regular'>
            <div className="mx-auto min-h-[650px] max-w-[1400px] grid grid-cols-9 md:min-w-[1400px] px-5">
                <div className='sticky top-0 pt-5 items-center col-span-2 h-screen border-r pr-5 border-gray-200'>
                    <Link
                        className={`block ${isActive('/') ? 'text-blue-500 font-semibold' : ''}`}
                        href='/'
                    >
                        <ApplicationLogo/>
                    </Link>
                    <Link
                        className={`flex items-center text-xl gap-x-4 mt-5 py-2 hover:px-5 hover:bg-gray-100 rounded-full transition-all duration-150 ${isActive('/') ? 'text-blue-500 font-semibold' : ''}`}
                        href='/'
                    >
                        <RiHome2Line className='text-3xl'/>
                        Главная
                    </Link>
                    <Link
                        className={`flex items-center text-xl gap-x-4 mt-2 py-2 hover:px-5 hover:bg-gray-100 rounded-full transition-all duration-150 ${isActive('/employees') ? 'text-blue-500 font-semibold' : ''}`}
                        href='/employees'
                    >
                        <HiOutlineUserGroup className='text-3xl'/>
                        {t('nav_for_employers', { ns: 'header'})}
                    </Link>
                    <Link
                        className={`flex items-center text-xl gap-x-4 mt-2 py-2 hover:px-5 hover:bg-gray-100 rounded-full transition-all duration-150 ${isActive('/announcements') ? 'text-blue-500 font-semibold' : ''}`}
                        href='/announcements'
                    >
                        <MdOutlineWorkOutline className='text-3xl'/>
                        Вакансии
                    </Link>
                    <Link
                        className={`flex items-center text-xl gap-x-4 mt-2 py-2 hover:px-5 hover:bg-gray-100 rounded-full transition-all duration-150 ${isActive('/about') ? 'text-blue-500 font-semibold' : ''}`}
                        href='/about'
                    >
                        <MdOutlineCloud className='text-3xl'/>
                        О платформе
                    </Link>
                    <Link
                        className={`flex items-center text-xl gap-x-4 mt-2 py-2 hover:px-5 hover:bg-gray-100 rounded-full transition-all duration-150 ${isActive('/faq') ? 'text-blue-500 font-semibold' : ''}`}
                        href='/faq'
                    >
                        <IoSchoolOutline className='text-3xl'/>
                        Об обучении
                    </Link>
                    <Link
                        className={`flex items-center text-xl gap-x-4 mt-2 py-2 hover:px-5 hover:bg-gray-100 rounded-full transition-all duration-150 ${isActive('/fav') ? 'text-blue-500 font-semibold' : ''}`}
                        href='/fav'
                    >
                        <MdOutlineBookmarks className='text-3xl'/>
                        Избранные
                    </Link>
                    {!auth.user ? (
                        <>
                            <Link
                                className='text-center block px-10 mt-10 text-white font-bold py-1 text-lg bg-blue-500 border-[3px] hover:bg-white hover:text-blue-500 transition-all duration-300 border-blue-500 rounded-full'
                                href='/register'
                            >
                                {t('register', { ns: 'header'})}
                            </Link>
                            <Link
                                className='text-center hover:bg-blue-500 hover:text-white transition-all duration-300 block w-full mt-3 text-blue-500 font-bold py-1 text-lg border-[3px] border-blue-500 rounded-full'
                                href='/login'
                            >
                                Войти
                            </Link>
                        </>
                    ):(
                        <>
                        <Link href='/profile' className='flex gap-x-3 py-3 mt-5 hover:px-3 items-center transition-all duration-300 hover:bg-gray-100 rounded-full'>
                            <img src={`/storage/${auth.user.image_url}`} className='w-[50px] h-[50px] rounded-full'/>
                            <div className=''>
                                <div className='font-bold'>{auth.user.name}</div>
                                <div className='text-sm text-gray-500'>{auth.user.email}</div>
                            </div>
                        </Link>
                        <button onClick={handleLogout} className="text-xl flex items-center gap-x-4 mt-2 font-regular transition-all duration-150 py-2 hover:bg-gray-100 w-full text-left rounded-full hover:px-5">
                            <MdOutlineLogout className='text-3xl'/>
                            {t('logout', { ns: 'header' })}
                        </button>
                        </>
                    )}
                    <div>
                    </div>
                </div>
                <div className='hidden md:block col-span-7'>
                    {children}
                </div>
            </div>
        </div>
        </>
    );
}
