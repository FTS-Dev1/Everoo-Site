
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
                    <div className="flex gap-4 justify-between">
                        <div className="my-6 md:mb-0 col-span-1 w-[408px]">
                            <Logo width={150} height={80} />
                            <p className="mb-4 w-[350px]">
                                Everoo übernimmt auch für Dein Event gerne das Steuer. Einfache und kostengünstige Planung, um Dein Eventerlebnis erfolgreich und einfach umzusetzen.
                            </p>

                        </div>
                        <div className="mb-6 md:mb-0 pt-12 w-[224px]">
                            <h4 className="mb-2 text-[24px]">Navigation</h4>
                            <div className='flex flex-col gap-3 my-7 cursor-pointer'>
                                <div key="1" onClick={() => window.location.href = "https://sr.w-lu.de/firmenevent/"}>Events & Service</div>
                                <div key="3" onClick={() => window.location.href = "https://sr.w-lu.de/unternehmen/#ueber-uns"}>Unternehmen</div>
                                <div key="5" onClick={() => window.location.href = "https://sr.w-lu.de/kontakt/#kontaktformular"}>Kontakt</div>
                            </div>

                        </div>
                        <div className="mb-6 md:mb-0 pt-12 w-[224px]">
                            <h4 className="mb-2 text-[24px]">Informationen</h4>
                            <div className='flex flex-col gap-3 my-7 cursor-pointer'>
                                <div key="2" onClick={() => window.location.href = "https://sr.w-lu.de"}>Home</div>
                                <div key="1" onClick={() => window.location.href = "https://sr.w-lu.de/impressum"}>Impressum</div>
                                <div key="3" onClick={() => window.location.href = "https://sr.w-lu.de/datenschutzerklaerung"}>Datenschutzerklärung</div>
                            </div>

                        </div>
                        <div className="mb-6 md:mb-0 pt-12 w-[200px]">
                            <h4 className="mb-2 text-[24px]">Kontakt</h4>
                            <div className='flex items-center my-7'>
                                <p className="">
                                    everoo snc <br />
                                    Via Carlo Imbonati 14
                                    22042 San Fermo della Battaglia (CO)
                                </p>
                            </div>
                            <div className='flex items-center mb-4'>
                                <p className="">
                                    Telefon: <span className='cursor-pointer' onClick={() => window.open("tel:+393756772517")}> +39 375 677 2517 </span>
                                    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='cursor-pointer' onClick={() => window.open("tel:+393920640251")}> +39 392 064 0251</span>
                                </p>
                            </div>
                            <div className='flex items-center mb-4'>
                                <p className="">
                                    E-Mail: <span className='cursor-pointer' onClick={() => window.open("mailto:info@everoo.xxx")}> info@everoo.xxx</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
