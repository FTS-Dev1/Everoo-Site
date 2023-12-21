
import { ReactComponent as Logo } from '../../Assets/svgs/logo.svg'
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import mail from '../../Assets/svgs/mail.svg'
import phone from '../../Assets/svgs/phone.svg'
import address from '../../Assets/svgs/address.svg'
const Footer = () => {
    return (
        <>
            <footer className="flex flex-col items-center bg-transparent text-center dark:bg-neutral-600 lg:text-left">
                <div className="container p-6 text-neutral-800 dark:text-neutral-200">
                    <div className="grid gap-4 lg:grid-cols-3">
                        <div className="mb-6 md:mb-0 col-span-1">
                            {/* <h5 className="mb-2 font-medium uppercase">Footer text</h5> */}
                            <Logo width={220} />
                            <p className="mb-4">
                                Everoo übernimmt auch für Dein Event gerne das Steuer. Einfache und kostengünstige Planung, um Dein Eventerlebnis erfolgreich und einfach umzusetzen.
                            </p>

                        </div>
                        <div></div>
                        <div className="mb-6 md:mb-0 pt-12">
                            <h5 className="mb-2 font-medium uppercase">Kontakt</h5>
                            <div className='flex items-center mb-4'>
                                <img src={address} width={16} className='mr-3' />
                                <p className="">
                                everoo snc
                                Via Carlo Imbonati 14
                                22042 San Fermo della Battaglia (CO)
                                </p>
                            </div>
                            <div className='flex items-center mb-4'>
                                <img src={phone} width={16} className='mr-3' />
                                <p className="">
                                    Telefon: +39 375 677 2517
                                    +39 392 064 0251
                                </p>
                            </div>
                            <div className='flex items-center mb-4'>
                                <img src={mail} width={16} className='mr-3' />
                                <p className="">
                                E-Mail: info@everoo.xxx
                                </p>
                            </div>
                            <div className="flex space-x-4 justify-left">
                                <div className="rounded-full p-2 bg-blue-500 hover:bg-blue-600 cursor-pointer">
                                    <FaFacebookF className="text-white text-lg" />
                                </div>
                                <div className="rounded-full p-2 bg-pink-500 hover:bg-pink-600 cursor-pointer">
                                    <RiInstagramFill className="text-white text-lg" />
                                </div>
                                <div className="rounded-full p-2 bg-blue-400 hover:bg-blue-500 cursor-pointer">
                                    <FaTwitter className="text-white text-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-transparent p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                    © 2023 Copyright:
                    <a className="text-neutral-800 dark:text-neutral-400" href="https://tw-elements.com/">
                        Firm Tech Services
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
