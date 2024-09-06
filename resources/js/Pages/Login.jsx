import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import { useTranslation } from 'react-i18next';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

export default function Login({ errors }) {
    const { t, i18n } = useTranslation();
    const { data, setData, post, processing, reset } = useForm({
        phone: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login', {
            onSuccess: () => reset()
        });
    };

    return (
        <>
            <GuestLayout>
                <div className="flex grid grid-cols-7 w-full h-screen">
                    <div className="mx-auto my-auto col-span-5 w-full max-w-md p-5">
                        <div className="font-bold text-4xl text-center">{t('title', { ns: 'login' })}</div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 mt-8">
                                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="phone">
                                    {t('phone_label', { ns: 'login' })}
                                </label>
                                <PhoneInput
                                    country={'kz'}
                                    onlyCountries={['kz']}
                                    value={data.phone}
                                    onChange={phone => setData('phone', phone)}
                                    inputStyle={{
                                        width: '100%',
                                        padding: '20px',
                                        paddingLeft: '50px',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                    }}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">
                                    {t('password_label', { ns: 'login' })}
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    className="appearance-none transition-all duration-150 border rounded w-full border-gray-300 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 w-full hover:bg-blue-600 transition-all duration-100 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                                    disabled={processing}
                                >
                                    {t('login_button', { ns: 'login' })}
                                </button>
                            </div>
                        </form>
                        <Link href="/register" className="text-center mt-10 block">
                            {t('register_prompt', { ns: 'login' })} <span className="font-bold text-blue-500">{t('register_prompt_span', { ns: 'login' })}</span>
                        </Link>
                        <Link href="/forgot_password" className="text-center mt-3 block">
                            {t('forgot_password', { ns: 'login' })} <span className="font-bold text-blue-500">{t('forgot_password_span', { ns: 'login' })}</span>
                        </Link>
                    </div>
                    <div className='h-full bg-[#F9FAFC] rounded-lg col-span-2 p-5 relative'>
                        <div className='absolute bottom-5 pr-10'>
                            <div className='text-lg'>Сложности со входом?</div>
                            <div className='text-sm font-light text-gray-500'>При возникновении трудностей вы можете обратиться по этим контактным данным</div>
                            <div className='mt-10 text-sm'>
                                <div>+7 707 221 31 31</div>
                                <div className='ml-auto'>janamumkindik@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
